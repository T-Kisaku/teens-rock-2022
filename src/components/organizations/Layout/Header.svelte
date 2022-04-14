<script lang="ts">
	import { goto } from '$app/navigation';
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
		{ title: 'TOP', path: '/' },
		{ title: '東京大会概要', path: '/about/game' },
		{ title: '参加エントリー', onClick: gotoEntry },
		{ title: 'お問い合わせ', onClick: gotoContact }
	];
</script>

<header class="py-5 px-28 shadow-md bg-black text-white">
	<img src="/icon/TR-TOKYO-LOGO-W.png" alt="logo" class="mx-auto mb-1" on:click={() => goto('/')} />
	<div class="flex justify-center space-x-7">
		{#each routeList as route}
			<div
				class="py-3 font-semibold"
				on:click={() => {
					if (route.onClick) {
						return route.onClick();
					}
					return goto(route.path);
				}}
			>
				{route.title}
			</div>
		{/each}
	</div>
</header>
