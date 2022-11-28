import { writable } from 'svelte/store';
import { ViewEnums } from '../../../views/data/ViewStaticData';
import { PanelEnums } from '../../data/PanelStaticData';
import { editorCommandApi } from '../../../../clientApi/EditorCommandApi';

export type UIStoreType = {
	VisibleViews: ViewEnums[];
	ViewPositions: { view: ViewEnums; panel: PanelEnums }[];
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
	]
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

export let UIStoreCommands = {
	VisibleView: VisibleView
};
