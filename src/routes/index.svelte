<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { News } from '@/src/types/markdown';

	export const load: Load = async ({ fetch }) => {
		const response = await fetch('/api/news.json'),
			data: News[] = await response.json();
		return {
			status: response.status,
			props: { data }
		};
	};
</script>

<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { goto } from '$app/navigation';
	import dayjs from 'dayjs';

	import 'swiper/css';
	import 'swiper/css/effect-coverflow';
	import 'swiper/css/pagination';
	import '@/src/styles/slide.coverflow.css';

	import Paper from '../components/atoms/Paper.svelte';
	export let data: News[];
</script>

<MetaTags title="Home" />
<img src="/image/home.png" alt="home" />

<Paper class="py-5 px-7">
	<div class="bg-black text-white p-5">お知らせ</div>
	<div class="p-5">
		{#each data as news}
			<div
				on:click={() => goto(news.url)}
				class="flex gap-7 text-lg border-b border-slate-400 hover:opacity-25"
			>
				<div>{dayjs(news.metadata.publishDate).format('YYYY.MM.DD')}</div>
				<div>{news.metadata.title}</div>
			</div>
		{/each}
	</div>
</Paper>
<div />
