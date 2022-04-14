<script lang="ts">
	import {page} from '$app/stores'
	import Layout from '@/src/components/organizations/Layout/index.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import '@/src/styles/app.css';

	import config from '$lib/config.json';
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

<Layout topPadding={$page.url.pathname !== '/'}>
	<slot />
</Layout>
