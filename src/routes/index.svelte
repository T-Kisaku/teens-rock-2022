<!-- <script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { Ivent } from '@/src/types/markdown';

	export const load: Load = async ({ fetch }) => {
		const response = await fetch('/api/ivents.json'),
			data: Ivent[] = await response.json();
		return {
			status: response.status,
			props: { data }
		};
		// return {
		// 	error: 'Page not found',
		// 	status: 404
		// };
	};
</script> -->

<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { goto } from '$app/navigation';

	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { EffectCoverflow, Pagination } from 'swiper';

	import 'swiper/css';
	import 'swiper/css/effect-coverflow';
	import 'swiper/css/pagination';
	import '@/src/styles/slide.coverflow.css';

	import IventCard from '@/src/components/atoms/IventCard.svelte';
	import Title from '../components/atoms/Title.svelte';

	// export let data: Ivent[];
</script>

<MetaTags title="Home" />

<!-- <div class="mx-20">
	<Title>IVENT</Title>
	<div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
		{#each data as ivent}
			<IventCard {ivent} />
		{/each}
	</div>
</div> -->
