<script lang="ts">
	import { TopMenuEnums, TopMenuType } from '../../../data/TopMenusStaticData';
	import { PanelEnums } from '../../../data/PanelStaticData';
	import { editorCommandApi } from '../../../../../clientApi/EditorCommandApi';
	import { EditorCommands } from '../../../../../clientApi/EditorCommands';
	import { ViewEnums } from '../../../../views/data/ViewStaticData';

	export let menuItem: ViewEnums;
	export let PanelType: boolean;

	$: rotetedcss = () => {
		if (PanelType === PanelEnums.leftPanel) {
			return ' writing-mode: tb-rl;	transform: rotate(-180deg);';
		} else if (PanelType === PanelEnums.rightPanel) {
			return ' writing-mode: tb-rl;';
		} else if (PanelType === PanelEnums.middlePanel) {
			return ' ';
		}
	};
</script>

<div
	class="p-1 "
	on:click={() => {
		EditorCommands.UIStoreCommands.VisibleView(menuItem);
	}}
>
	<b style="{rotetedcss()} " class="text-gray-300 hoverClick">
		{menuItem}
	</b>
</div>
