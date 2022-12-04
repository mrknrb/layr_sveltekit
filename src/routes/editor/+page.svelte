<script lang="ts">
	import '../../app.css';
	import '../../scrollbar.css';
	import SidePanel from './comps/ui/comps/panels/PagePanel/Panel.svelte';
	import TopMenu from './comps/ui/comps/topMenu/TopMenu.svelte';
	import { PanelEnums } from './comps/ui/data/PanelStaticData';
	import ContextMenu from './comps/ui/comps/contextMenu/ContextMenu.svelte';
	import { UIStore } from './clientApi/UIStore/UIStore';
	import { EditorCommands } from './clientApi/EditorCommands';
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
	</style>
</svelte:head>

<TopMenu />
<div
	style="flex: 1 1 auto"
	class="  bg-gray-400 flex flex-row relative"
	on:contextmenu={(e) => {
		e.preventDefault();
	}}
	on:click={(e) => {
		EditorCommands.UIStoreCommands.ContextMenuClose();
	}}
>
	<SidePanel PanelType={PanelEnums.leftPanel} />
	<SidePanel PanelType={PanelEnums.middlePanel} />
	<SidePanel PanelType={PanelEnums.rightPanel} />
</div>
<ContextMenu />
