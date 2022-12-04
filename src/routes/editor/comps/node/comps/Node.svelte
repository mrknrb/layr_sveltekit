<script lang="ts">
	import { NodeData } from '../../../data/Types/NodeData';
	import { Doc } from '../../../data/Types/Doc';
	import { DocConnStore, DocConnStoreCommands } from '../../../clientApi/DocConnStore/DocConnStore';
	import ElementGenerator from '../../elements/elementGenerator/ElementGenerator.svelte';
	import { EditorCommands } from '../../../clientApi/EditorCommands';
	import { onMount } from 'svelte';
	import { ElementEnums } from '../../../data/Enums/ElementEnums';
	import { UIStore } from '../../../clientApi/UIStore/UIStore';
	import { maximalColRow } from './NodeFormatFunctions';
	import { ElementFormat } from '../../../data/Types/ElementFormat';
	import { ElementData } from '../../../data/Types/ElementData';

	export let nodeData: NodeData | undefined;
	export let docId: string;
	$: elementsAndFormat = () => {
		let elemnentAFormat: {
			elementData: ElementData;
			format: ElementFormat;
		}[] = [];
		docData.elements.forEach((element) => {
			elemnentAFormat.push({ format: elementformattest2.get(element.name), elementData: element });
		});
		return elemnentAFormat;
	};

	let elementformattest2: Map<string, ElementFormat>;

	$: selectedCss = () => {
		if ($UIStore.selectedDocId === docId) {
			return 'border-amber-500';
		}
		return 'border-gray-800';
	};
	$: docData = $DocConnStore.docs.get(docId);

	$: max = maximalColRow(elementformattest2);

	$: cssSizeGen = () => {
		if (!max?.col) return `width:10rem;height:10rem`;
		return `width:${max.col * 10}rem;height:${max.row * 10}rem`;
	};

	onMount(() => {
		if (!docData) {
			DocConnStoreCommands.downloadDoc(docId);
		}

		elementformattest2 = new Map<string, ElementFormat>();
		elementformattest2.set('title', {
			elementName: 'title',
			position: { pos: { row: 1, col: 1 }, size: { row: 1, col: 1 } }
		});
		elementformattest2.set('note', {
			elementName: 'note',
			position: { pos: { row: 2, col: 1 }, size: { row: 1, col: 1 } }
		});
	});
</script>

<div
	style={cssSizeGen()}
	class="  bg-gray-400  {selectedCss()}   border   border-4 "
	on:click={(e) => {
		EditorCommands.UIStoreCommands.ContextMenuClose();
	}}
	on:click={(e) => {
		e.stopPropagation();
		EditorCommands.UIStoreCommands.SelectedDocChange(docId);
	}}
>
	{#if docData?.elements}
		{#each docData?.elements as ef, i}
			<ElementGenerator
				position="absolute"
				elementData={docData?.elements[i]}
				elementFormat={elementformattest2?.get(docData?.elements[i].name)}
			/>
		{/each}
		<!--		<table style="">
			{#each Array(max.col) as _, h}
				<th class=" w-5  h-0 " style="max-width: 1.25rem" />
			{/each}
			{#each Array(max.row) as _, r}
				<tr class="h-5 w-5">
					{#each Array(max.col) as _, d}
						<td>
							{#if docData?.elements}
								{#each docData?.elements as ef, i}
									{#if elementformattest2.get(docData?.elements[i].name).position.start.col === d && elementformattest2.get(docData?.elements[i].name).position.start.row === r}
										<ElementGenerator elementData={docData?.elements[i]} />
									{/if}
								{/each}
							{/if}
						</td>
					{/each}
				</tr>
			{/each}
		</table>-->
		<!--		<button
			class="h-14 w-14 bg-green-600"
			on:click={() => {
				EditorCommands.DocConnStoreCommands.createElement(docId, {
					type: ElementEnums.text,
					data: 'jaja',
					name: Math.random().toString()
				});
			}}
		/>-->
	{:else}
		error
	{/if}
</div>
