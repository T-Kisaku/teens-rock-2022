<script lang="ts">
	export let topPadding: boolean = true;
</script>

{#if topPadding}
	<main class="overflow-auto mt-10 pb-20 h-screen">
		<slot />
	</main>
{:else}
	<main class="overflow-auto pb-20 h-screen">
		<slot />
	</main>
{/if}
