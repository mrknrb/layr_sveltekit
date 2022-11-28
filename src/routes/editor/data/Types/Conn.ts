import { nanoid } from 'nanoid';
export class ConnData {
	_id: string;

	collectionId: string;
	from: string;
	to: string;
	elementIdFrom?: string;
	elementIdTo?: string;
	type?: string;
	tags?: string[];
	data: {
		nodeCDataParts: any;
		edgeCDataParts: any;
		elementsCDataParts: any[];
	};
	lastChange?: number;

	constructor(from: string, to: string, collectionId: string, type?: string) {
		this._id = nanoid();
		// yxmultkor zavart okozott
		this.from = from;
		this.to = to;
		this.type = type;
		this.collectionId = collectionId;
		this.tags = [];
		this.data = {
			nodeCDataParts: {},
			edgeCDataParts: {},
			elementsCDataParts: []
		};

		this.lastChange = Date.now();
	}
}
