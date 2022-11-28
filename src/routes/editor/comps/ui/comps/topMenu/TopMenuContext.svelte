<script lang="ts">
	import { TopMenuContextType, TopMenusStaticData } from '../../data/TopMenusStaticData';
	import TopMenuButton from './TopMenuButton.svelte';
	import { CommandType } from '../../../../../../Egyebek/CommandApi/CommandType';
	import { editorCommandApi } from '../../../../clientApi/EditorCommandApi';

	export let topMenuContextType: TopMenuContextType[];
	let runCommand = (command: CommandType) => {
		editorCommandApi.addRun(command);
	};
</script>

<div class="absolute flex flex-col z-50 bg-gray-500 rounded" style="z-index: 1000">
	{#each topMenuContextType as cMenuItem, i}
		<b
			class="p-1 text-gray-300 hoverClick"
			on:click={() => {
				topMenuContextType[i].command();
				//	runCommand(topMenuContextType[i].command);
			}}
		>
			{topMenuContextType[i].label}
		</b>
	{/each}
</div>
