<script lang="ts">
	import Header from './Header.svelte';
	import Main from './Main.svelte';
	import Footer from './Footer.svelte';

	export let topPadding: boolean = true
</script>

<Header />
<Main topPadding={topPadding}><slot /></Main>
<Footer />
