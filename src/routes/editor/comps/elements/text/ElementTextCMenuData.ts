import { ContextMenuElement } from '../../ui/data/ContextMenuStaticData';
import { ElementData } from '../../../data/Types/ElementData';
import { EditorCommands } from '../../../clientApi/EditorCommands';

export let ElementTextCMenuData: ContextMenuElement[] = [
	{
		label: 'Change bg Color',
		command: (data: ElementData) => {
			console.log(data.type);
		}
	},
	{
		label: 'FullScreen',
		command: (data: ElementData) => {
			EditorCommands.UIStoreCommands.FullScreenElement(data.name);
		}
	},
	{
		label: 'hfghdsfsdfsdf',
		command: (data: ElementData) => {
			console.log(data.type);
		}
	}
];
