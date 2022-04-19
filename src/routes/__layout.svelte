<script lang="ts">
	import Layout from '@/src/components/organizations/Layout/index.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import config from '$lib/config.json';

	import '@/src/styles/app.scss';
</script>

<MetaTags
	title="TEENS ROCK IN TOKYO"
	titleTemplate="%s | {config.project.name}"
	openGraph={{
		type: 'website',
		url: 'https://teens-rock.tokyo/',
		title: 'TEENS ROCK IN TOKYO',
		description: 'Open Graph Description',
		images: [
			{
				url: '/icon/TRTBLACK512.png',
				width: 800,
				height: 600,
				alt: 'Og Image Alt'
			}
		],
		article: {
			publishedTime: '2022-02-22T18:43:26+09:00'
		}
	}}
/>

<Layout>
	<slot />
</Layout>
