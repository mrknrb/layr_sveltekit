import { CommandType } from './CommandType';
import { CommandStatic } from './CommandStatic';

export class CommandApi {
	commands: CommandType[] = [];
	state = -1;
	addRun(command: CommandType) {
		this.run(command);
		if (command.redo) {
			this.state !== -1 ? this.deleteEverythingAfter(this.state) : console.log('ures');
			this.commands.push(command);
			this.state++;
		}
	}
	redo() {}
	undo() {}
	run(command: CommandType) {
		command.run(command.args);
	}
	deleteEverythingAfter(i: number) {
		this.commands.length = i;
	}
}
