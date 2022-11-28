import { nanoid } from 'nanoid';
export class Doc {
	_id: string;
	_idCollection: string;
	type?: string;
	elements?: [] = [];
	tags?: string;
	lastChange?: number;

	constructor(collectionId: string) {
		this._id = nanoid();
		this._idCollection = collectionId;
	}
}
