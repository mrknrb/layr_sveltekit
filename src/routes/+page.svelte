<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '../lib/supabaseClient';
	/* yx supabase test	*/
	onMount(async () => {
		const { data, error } = await supabase.from('docs').select('*');
		console.log(data);
	});
</script>

<div class="flex flex-col content-center items-center">
	<img src="images/logo.png" class="w-52" />

	<h2>
		Layr is an app, which lets you organise your notes in a concept map, use the internet and create
		an abstract knowledge network.
	</h2>
</div>

<h1>Starting points:</h1>
<h2>Root doc search</h2>
<h2>New Root doc</h2>
<h2>Register/login</h2>
