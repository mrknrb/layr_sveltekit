<script lang="ts">
	import { EditorCommands } from '../../../../clientApi/EditorCommands';
	import ElementGenerator from '../../../elements/elementGenerator/ElementGenerator.svelte';
	import { UIStore } from '../../../../clientApi/UIStore/UIStore';
	import { DocConnStore } from '../../../../clientApi/DocConnStore/DocConnStore';
	import { Doc } from '../../../../data/Types/Doc';

	$: elementData = () => {
		let doc: Doc = $DocConnStore.docs.get($UIStore.RootDocId);
		return doc?.elements.find((el) => {
			return el.name === $UIStore.FullScreenElementName;
		});
	};
</script>

<div
	class="bg-gray-50 flex-grow flex"
	on:click={() => {
		EditorCommands.UIStoreCommands.SelectedDocChange('');
	}}
>
	{#if elementData()}
		<ElementGenerator elementData={elementData()} />
	{/if}
</div>
