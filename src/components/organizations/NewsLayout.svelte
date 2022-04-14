<script lang="ts">
	import dayjs from 'dayjs';
	import Paper from '@/src/components/atoms/Paper.svelte';
	import Title from '../atoms/Title.svelte';

	export let title;
	export let publishedDate;
</script>

<Title class="text-2xl mt-20">{title}</Title>
<div class="text-center">公開日: {dayjs(publishedDate).format('YYYY年M月D日')}</div>

<Paper class="mx-2 sm:mx-20 mt-20 mb-20 p-7">
	<slot />
</Paper>
