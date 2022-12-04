<script lang="ts">
	import { UIStore } from '../../../../../clientApi/UIStore/UIStore';
	import { PanelEnums } from '../../../data/PanelStaticData';
	import PanelButton from './PanelButton.svelte';
	import ViewGenerator from '../../../../views/comps/ViewGenerator.svelte';

	export let PanelType: PanelEnums;
	$: panelClass = () => {
		if (PanelType === PanelEnums.leftPanel) {
			return 'border-r-4 flex-row basis-40 ';
		} else if (PanelType === PanelEnums.rightPanel) {
			return 'border-l-4 flex-row-reverse basis-40 ';
		} else if (PanelType === PanelEnums.middlePanel) {
			return ' flex-col basis-auto flex-grow';
		}
	};
</script>

<div class="relative flex border-gray-900 flex-shrink  {panelClass()}">
	<div class="relative bg-gray-700 " style="flex: 0 1 25px">
		{#each $UIStore.ViewPositions as viewPos, i}
			{#if $UIStore.ViewPositions[i].panel === PanelType}
				<PanelButton menuItem={$UIStore.ViewPositions[i].view} {PanelType} />
			{/if}
		{/each}
	</div>

	<div class="relative bg-gray-800 flex flex-col" style="flex: 1 1 auto">
		{#each $UIStore.ViewPositions as viewPos, i}
			{#if $UIStore.ViewPositions[i].panel === PanelType}
				<ViewGenerator ViewType={$UIStore.ViewPositions[i].view} />
			{/if}
		{/each}
	</div>
</div>
