<script lang="ts">
	import '../../app.css';
	import '../../scrollbar.css';
	import PageButton from './comps/PageButton.svelte';
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
	</style>
</svelte:head>

<header class=" sticky bg-gray-500">
	<div style="height: 25px" class="  flex flex-row overflow-hidden">
		<div
			class="h-full 	cursor-pointer  w-20  flex flex-row justify-center flex-wrap content-center hover:backdrop-brightness-110"
			on:click={() => {
				window.open('/', '_self');
			}}
		>
			<img src="images/logo.png" class="h-5 w-5" />
		</div>

		<PageButton name="Browser" src="browser" />
		<PageButton name="Editor" src="editor" />
		<PageButton name="Handbook" src="handbook" />
		<PageButton name="User" src="user/" />
	</div>
</header>

<div class="justify-center m-auto bg-gray-400 ">
	<slot />
</div>
