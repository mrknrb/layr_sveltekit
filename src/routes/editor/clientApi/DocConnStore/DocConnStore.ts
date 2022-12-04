import { writable } from 'svelte/store';
import { CommandType } from '../../../../Egyebek/CommandApi/CommandType';
import { ViewEnums } from '../../comps/views/data/ViewStaticData';
import { editorCommandApi } from '../EditorCommandApi';
import { UIStore } from '../UIStore/UIStore';
import { supabase } from '../../../../lib/supabaseClient';
import { Doc } from '../../data/Types/Doc';
import { asyncable } from 'svelte-asyncable';
import { ElementEnums } from '../../data/Enums/ElementEnums';
import { ElementData } from '../../data/Types/ElementData';

export type DocConnStoreType = {
	docs: Map<string, Doc>;
};

let DocConnStoreDefault: DocConnStoreType = {
	docs: new Map<string, Doc>()
};

export let DocConnStore = writable(DocConnStoreDefault, () => {
	console.log('got a subscriber');
	return () => console.log('no more subscribers');
});
export let docConnStoreValue: DocConnStoreType;
DocConnStore.subscribe((value) => {
	docConnStoreValue = value;
});

let downloadDoc = async (docId: string) => {
	const { data, error } = await supabase.from('docs').select().eq('_id', docId);
	console.log(data);
	if (data) {
		DocConnStore.update((value) => {
			value.docs.set(docId, data[0]);
			return value;
		});
	}
};
let downloadDocs = async (docId: string) => {
	const { data, error } = await supabase.from('docs').select().eq('_id', docId);
	console.log(data);
	if (data) {
		DocConnStore.update((value) => {
			value.docs.set(docId, data[0]);
			return value;
		});
	}
};
let updateDoc = async (docId: string, callback: (docOld: Doc) => Doc | undefined) => {
	let docOld = docConnStoreValue.docs.get(docId);
	if (!docOld) return;
	let docUpdated = callback(docOld);
	if (!docUpdated) return;
	const { data, error } = await supabase
		.from('docs')
		.update(docUpdated)
		.eq('_id', docUpdated._id)
		.select();
	console.log(data);
	if (data) {
		DocConnStore.update((value) => {
			value.docs.set(docUpdated._id, data[0]);
			return value;
		});
	}
};

let createElement = async (docId: string, element: ElementData) => {
	await updateDoc(docId, (docOld) => {
		if (!docOld.elements) docOld.elements = [];
		docOld.elements.push(element);

		return docOld;
	});
};

export let DocConnStoreCommands = {
	downloadDoc,
	updateDoc,
	createElement
};
