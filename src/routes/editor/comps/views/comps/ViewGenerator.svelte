<script lang="ts">
	import { ViewEnums } from '../data/ViewStaticData';
	import DocView from './DocView/DocView.svelte';
	import ElementView from './ElementView/ElementView.svelte';
	import DetailsView from './DetailsView/DetailsView.svelte';
	import { UIStore } from '../../ui/clientApi/UIStore/UIStore';
	import TemplateView from './TemplateView/TemplateView.svelte';

	export let ViewType: ViewEnums;
</script>

{#if $UIStore.VisibleViews.find((view) => {
	return view === ViewType;
})}
	{#if ViewType === ViewEnums.docView}
		<DocView />
	{:else if ViewType === ViewEnums.elementView}
		<ElementView />
	{:else if ViewType === ViewEnums.detailsView}
		<DetailsView />
	{:else if ViewType === ViewEnums.templateView}
		<TemplateView />
	{/if}
{/if}
