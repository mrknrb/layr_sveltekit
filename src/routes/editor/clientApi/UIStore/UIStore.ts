import { writable } from 'svelte/store';
import { ViewEnums } from '../../comps/views/data/ViewStaticData';
import { PanelEnums } from '../../comps/ui/data/PanelStaticData';
import { editorCommandApi } from '../EditorCommandApi';
import { ContextMenuData } from '../../comps/ui/data/ContextMenuStaticData';

export type UIStoreType = {
	VisibleViews: ViewEnums[];
	ViewPositions: { view: ViewEnums; panel: PanelEnums }[];
	RootDocId?: string;
	FullScreenElementName?: string;
	selectedDocId?: string;
	contextMenuData: ContextMenuData;
};

let UIStoreDefault: UIStoreType = {
	VisibleViews: [
		ViewEnums.elementView,
		ViewEnums.templateView,
		ViewEnums.detailsView,
		ViewEnums.docView
	],
	ViewPositions: [
		{ view: ViewEnums.docView, panel: PanelEnums.leftPanel },
		{ view: ViewEnums.detailsView, panel: PanelEnums.rightPanel },
		{ view: ViewEnums.elementView, panel: PanelEnums.middlePanel },
		{ view: ViewEnums.templateView, panel: PanelEnums.leftPanel }
	],
	RootDocId: 'test',
	selectedDocId: '',
	contextMenuData: { visible: false, position: { top: 0, left: 0 }, elementsList: [] }
};

export let UIStore = writable(UIStoreDefault, () => {
	console.log('got a subscriber');
	return () => console.log('no more subscribers');
});

let VisibleView = (args: ViewEnums) => {
	editorCommandApi.addRun({
		args,
		run: () => {
			UIStore.update((value) => {
				let view = value.VisibleViews.find((views) => {
					return args === views;
				});
				if (view) {
					value.VisibleViews = value.VisibleViews.filter((views) => {
						return args !== views;
					});
					return value;
				} else {
					value.VisibleViews.push(args);
					return value;
				}
			});
		}
	});
};
let RootDocChange = (args: ViewEnums) => {
	editorCommandApi.addRun({
		args,
		run: () => {
			UIStore.update((value) => {
				return value;
			});
		}
	});
};
let SelectedDocChange = (args: string) => {
	UIStore.update((value) => {
		value.selectedDocId = args;
		return value;
	});
};
let ContextMenuOpen = (top: number, left: number, elementsList: [], data?: any) => {
	UIStore.update((value) => {
		value.contextMenuData.position.top = top;
		value.contextMenuData.position.left = left;
		value.contextMenuData.elementsList = elementsList;
		value.contextMenuData.visible = true;
		value.contextMenuData.data = data;
		return value;
	});
};
let ContextMenuClose = () => {
	UIStore.update((value) => {
		value.contextMenuData.visible = false;
		return value;
	});
};
let FullScreenElement = (elementName?: string) => {
	UIStore.update((value) => {
		value.FullScreenElementName = elementName;
		return value;
	});
};
export let UIStoreCommands = {
	VisibleView: VisibleView,
	RootDocChange,
	SelectedDocChange,
	ContextMenuOpen,
	ContextMenuClose,
	FullScreenElement
};
