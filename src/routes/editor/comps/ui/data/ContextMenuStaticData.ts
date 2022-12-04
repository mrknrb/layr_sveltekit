export interface ContextMenuData {
	visible: boolean;
	position: { top: number; left: number };
	elementsList: ContextMenuElement[];
	data?: any;
}
export interface ContextMenuElement {
	_id?: string;
	label: string;
	command: any;
}
