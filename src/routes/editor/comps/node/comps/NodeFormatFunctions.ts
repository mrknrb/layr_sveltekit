import { ElementData } from '../../../data/Types/ElementData';
import { ElementFormat } from '../../../data/Types/ElementFormat';

export function maximalColRow(elementsFormat?: Map<string, ElementFormat>) {
	let data = { col: 0, row: 0 };
	if (!elementsFormat) return data;
	elementsFormat.forEach((value) => {
		let maxCol = value.position.pos.col + value.position.size.col;
		let maxRow = value.position.pos.row + value.position.size.row;

		if (data.col < maxCol) data.col = maxCol;
		if (data.row < maxRow) data.row = maxRow;
	});
	return data;
}
