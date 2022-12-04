<script lang="ts">
	import { ElementEnums } from '../../../data/Enums/ElementEnums';
	import ElementText from '../text/ElementText.svelte';
	import { ElementData } from '../../../data/Types/ElementData';
	import { ElementFormat } from '../../../data/Types/ElementFormat';

	export let elementData: ElementData;

	export let elementFormat: ElementFormat;
	export let position = '';
	$: cssGenPos = () => {
		if (elementFormat?.position?.pos?.row === undefined) return ``;
		return `top: ${elementFormat.position.pos.row * 10}rem; left: ${
			elementFormat.position.pos.col * 10
		}rem`;
	};
	$: cssGenSize = () => {
		if (elementFormat?.position?.size?.row === undefined) return ``;
		return `width: ${elementFormat.position.size.row * 10}rem; height: ${
			elementFormat.position.size.col * 10
		}rem`;
	};
</script>

<div style="{cssGenSize()};{cssGenPos()}" class="flex {position}">
	{#if elementData.type === ElementEnums.text}
		<ElementText {elementData} />
	{:else if elementData.type === ElementEnums.group}
		<ElementText {elementData} />
	{/if}
</div>
