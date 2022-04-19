<script lang="ts">
    export let variant: 'all' | 'bottom' = 'all'
</script>

{#if variant === 'all'}
    <div class="py-20"><slot/></div>
{:else}
    <div class="pb-20"><slot/></div>
{/if}