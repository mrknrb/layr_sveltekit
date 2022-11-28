<script lang="ts">
	import { AMF } from '../../../../../../Egyebek/AMF';
	import { TopMenuEnums, TopMenuType } from '../../data/TopMenusStaticData';
	import TopMenuContext from './TopMenuContext.svelte';

	export let menuItem: TopMenuType;
	export let openedMenu: TopMenuEnums;
</script>

<div class="w-20   bg-gray-500 float-left p-1" on:click>
	<b class="text-gray-300">{menuItem._id}</b>

	{#if openedMenu === menuItem._id}
		<TopMenuContext
			topMenuContextType={menuItem.contexts}
			on:click={() => {
				openedMenu = null;
			}}
		/>
	{/if}
</div>
