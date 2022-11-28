<script lang="ts">
	import { TopMenuEnums, TopMenusStaticData } from '../../data/TopMenusStaticData';
	import TopMenuButton from './TopMenuButton.svelte';
	import { onMount } from 'svelte';

	let openedMenu: TopMenuEnums;
	onMount(() => {
		document.body.addEventListener('click', (ev) => {
			openedMenu = null;
		});
	});
</script>

<div style="flex: 0 1 25px" class="bg-gray-500   relative ">
	{#each TopMenusStaticData as menuItem, i}
		<TopMenuButton
			{openedMenu}
			{menuItem}
			on:click={(e) => {
				e.stopPropagation();
				openedMenu = TopMenusStaticData[i]._id;
			}}
		/>
	{/each}
</div>
