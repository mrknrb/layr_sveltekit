import { DocConnStore } from '../../routes/editor/clientApi/DocConnStore/DocConnStore';
import { CommandStatic } from './CommandStatic';

export class CommandType {
	args?: any;
	run: any;
	redo?: any;
}
