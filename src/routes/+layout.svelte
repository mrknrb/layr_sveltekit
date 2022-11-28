<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { supabase } from '../lib/supabaseClient';

	import '/src/app.css';
	import '/src/scrollbar.css';
	import PageButton from './index/comps/PageButton.svelte';
	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
	</style>
</svelte:head>

<div style="flex: 0 1 25px" class="  flex flex-row overflow-hidden bg-gray-700 ">
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

<div class=" relative flex flex-col" style="flex: 1 1 auto">
	<slot />
</div>
