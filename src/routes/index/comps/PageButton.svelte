<script lang="ts">
	export let name = '';
	export let src = '';
	export let imgsrc = '';
	function openPage(src: string) {
		window.open('/' + src, '_self');
	}
</script>

<div
	class="h-full   w-20 cursor-pointer hover:backdrop-brightness-110 flex flex-row justify-center flex-wrap content-center"
	on:click={openPage(src)}
>
	{#if imgsrc}
		<img src={imgsrc} class="h-full" />
	{/if}

	<b class="text-center text-gray-300">{name}</b>
</div>
