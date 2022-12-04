<script lang="ts">
	import { ElementData } from '../../../data/Types/ElementData';
	import { EditorCommands } from '../../../clientApi/EditorCommands';
	import { ElementTextCMenuData } from './ElementTextCMenuData';

	export let elementData: ElementData;
</script>

<textarea
	class="resize-none"
	on:contextmenu={(e) => {
		e.preventDefault();
		EditorCommands.UIStoreCommands.ContextMenuOpen(
			e.clientY,
			e.clientX,
			ElementTextCMenuData,
			elementData
		);
	}}>{elementData.data}</textarea
>
