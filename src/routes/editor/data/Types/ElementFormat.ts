export interface ElementFormat {
	elementName: string;
	position: {
		pos: {
			col: number;
			row: number;
		};
		size: {
			col: number;
			row: number;
		};
	};
}
