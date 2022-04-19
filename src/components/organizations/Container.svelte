<script lang="ts">
    export let variant: 'all' | 'bottom' | 'article' | 'news' = 'all'
</script>

{#if variant === 'all'}
    <div class="py-20"><slot/></div>
{:else if variant === 'article'}
    <div class="pb-20 md:px-32 md:py-20">
        <slot/>
    </div>
{:else if variant ==='news'}
<div class="py-20 md:px-32">
    <slot/>
</div>
{:else}
    <div class="pb-20"><slot/></div>
{/if}