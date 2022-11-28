import { writable } from 'svelte/store';
import { CommandType } from '../../../../Egyebek/CommandApi/CommandType';
import { ViewEnums } from '../../comps/views/data/ViewStaticData';

export type DocConnStoreType = {};

let DocConnStoreDefault: DocConnStoreType = {};

export let DocConnStore = writable(DocConnStoreDefault, () => {
	console.log('got a subscriber');
	return () => console.log('no more subscribers');
});

class NewDoc implements CommandType {
	constructor(args: ViewEnums) {
		this.args = args;
	}
	args: ViewEnums;

	run() {
		DocConnStore.update((value) => {
			return value;
		});
	}
	redo() {
		DocConnStore.update((value) => {
			return value;
		});
	}
}
export let DocConnStoreCommands = {
	NewDoc: NewDoc
};
