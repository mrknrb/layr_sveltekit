<script>
	import { page } from '$app/stores';
	import Auth from './comps/register/Auth.svelte';
	import AccountEdit from './comps/useredit/AccountEdit.svelte';
</script>

<svelte:head>
	<title>Supabase + SvelteKit</title>
	<meta name="description" content="SvelteKit using supabase-js v2" />
</svelte:head>

{#if !$page.data.session}
	<Auth />
{:else}
	<AccountEdit session={$page.data.session} />
{/if}
