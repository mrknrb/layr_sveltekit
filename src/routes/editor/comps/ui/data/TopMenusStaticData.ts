import { EditorCommands } from '../../../clientApi/EditorCommands';
import { ViewEnums } from '../../views/data/ViewStaticData';
import { UIStoreCommands } from '../clientApi/UIStore/UIStore';
import { CommandType } from '../../../../../Egyebek/CommandApi/CommandType';

export enum TopMenuEnums {
	file = 'file',
	edit = 'edit',
	views = 'views'
}

export interface TopMenuType {
	_id: TopMenuEnums;
	label: string;
	contexts: TopMenuContextType[];
}

export interface TopMenuContextType {
	_id: string;
	label: string;
	command: any;
}

export enum EditEnums {
	settings = 'settings',
	import = 'import',
	templateView = 'templateView',
	detailsView = 'detailsView'
}

export let EditStaticData: TopMenuContextType[] = [
	{
		_id: EditEnums.settings,
		label: 'settings',
		command: EditorCommands.UIStoreCommands.VisibleView
	},
	{
		_id: EditEnums.import,
		label: 'import',
		command: EditorCommands.UIStoreCommands.VisibleView
	}
];

export let ViewsCMenuItems: TopMenuContextType[] = [
	{
		_id: ViewEnums.docView,
		label: 'docView',
		command: () => {
			EditorCommands.UIStoreCommands.VisibleView(ViewEnums.docView);
		}
	},
	{
		_id: ViewEnums.elementView,
		label: 'elementView',
		command: () => {
			EditorCommands.UIStoreCommands.VisibleView(ViewEnums.elementView);
		}
	},
	{
		_id: ViewEnums.templateView,
		label: 'templateView',
		command: () => {
			EditorCommands.UIStoreCommands.VisibleView(ViewEnums.templateView);
		}
	},
	{
		_id: ViewEnums.detailsView,
		label: 'detailsView',
		command: () => {
			EditorCommands.UIStoreCommands.VisibleView(ViewEnums.detailsView);
		}
	}
];
export let TopMenusStaticData: TopMenuType[] = [
	{ _id: TopMenuEnums.file, label: 'File', contexts: [] },
	{ _id: TopMenuEnums.edit, label: 'Edit', contexts: EditStaticData },
	{ _id: TopMenuEnums.views, label: 'Views', contexts: ViewsCMenuItems }
];
