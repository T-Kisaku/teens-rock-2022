<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '@/src/components/atoms/Button.svelte';
	import config from '$lib/config.json';

	const gotoContact = () => {
			if (window) {
				window.open(config.project.form.contact, '_blank');
			}
		},
		gotoEntry = () => {
			if (window) {
				window.open(config.project.form.entry, '_blank');
			}
		};

	const routeList = [
		{ title: '東京大会概要', path: '/about/game' },
		{ title: 'エントリー', onClick: gotoEntry },
		{ title: 'お問い合わせ', onClick: gotoContact }
	];
</script>

<header class="py-5 px-28 shadow-md bg-black text-white">
	<div class="flex-grow text-xl font-medium" on:click={() => goto('/')}>
		{config.project.name}
	</div>
	<div class="flex space-x-5">
		{#each routeList as route}
			<Button
				on:click={() => {
					if (route.onClick) {
						return route.onClick();
					}
					return goto(route.path);
				}}
			>
				{route.title}
			</Button>
		{/each}
	</div>
</header>
