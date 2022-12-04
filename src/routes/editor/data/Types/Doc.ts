import { nanoid } from 'nanoid';
import { ElementData } from './ElementData';
import { ElementFormat } from './ElementFormat';
export class Doc {
	_id: string;
	_idCollection: string;
	type?: string;
	elements?: ElementData[] = [];
	tags?: string;
	lastChange?: number;
	elementsFormat: ElementFormat[] = [];
	constructor(collectionId: string) {
		this._id = nanoid();
		this._idCollection = collectionId;
	}
}
