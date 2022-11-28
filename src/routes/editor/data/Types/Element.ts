import { ElementEnums } from '../Enums/ElementEnums';

export class Element {
	name?: string;
	type?: ElementEnums;

	constructor(fieldName: string, elementType: ElementTypes) {
		this.fieldName = fieldName;
		this.elementType = elementType;
		//this.fieldId = MrkLibrary.generateShortId()
		this.partsData = {};
	}
}
