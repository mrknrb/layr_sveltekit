<script lang="ts">
	import { UIStore } from '../../../../clientApi/UIStore/UIStore';
	import Node from '../../../node/comps/Node.svelte';
	//	import { EditorCommands } from '../../../../clientApi/EditorCommands';
	//EditorCommands.DocConnStoreCommands.GetDoc($UIStore.RootDocId);

	/*
 let doc=await $DocConnStore
*/
</script>

<div class="bg-gray-50 flex-grow flex overflow-auto ">
	<Node docId={$UIStore.RootDocId} />
</div>
