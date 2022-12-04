<script lang="ts">
	import { EditorCommands } from '../../../../clientApi/EditorCommands';
	import { UIStore } from '../../../../clientApi/UIStore/UIStore';

	$: visible = () => {
		if (!$UIStore.contextMenuData.visible) return 'hidden';
	};
</script>

<div
	style="min-height: 20px;min-width: 20px;width: fit-content;height: fit-content;padding: 2px 6px 2px 6px;
	top: {$UIStore.contextMenuData.position.top}px;left: {$UIStore.contextMenuData.position.left}px"
	class="absolute  bg-gray-200 {visible()} flex flex-col "
>
	{#each $UIStore.contextMenuData.elementsList as elem, i}
		<b
			class="hoverClick bg-gray-200"
			on:click={() => {
				$UIStore.contextMenuData.elementsList[i].command($UIStore.contextMenuData.data);
			}}>{$UIStore.contextMenuData.elementsList[i].label}</b
		>
	{/each}
</div>
