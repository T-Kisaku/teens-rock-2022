<script lang="ts">
	import { goto } from '$app/navigation';
	import config from '$lib/config.json';
	import Drawer from 'svelte-drawer-component';


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

	let open = false
</script>

<header class="left-0 top-0 fixed w-full py-5 px-28 shadow-md bg-black text-white">
	<div class=''>
		<img
			src="/icon/menu.svg"
			alt="menu"
			class="absolute left-1 top-1/2 -translate-y-1/2 md:hidden ml-3"
			on:click={() => open = true}
		>
		<img src="/icon/TR-TOKYO-LOGO-W.png" alt="logo" class="mx-auto mb-1 flex-grow cursor-pointer" on:click={() => goto('/')} />
	</div>
	<div class="flex justify-center space-x-7">
		{#each routeList as route}
			<div
				class="py-3 font-semibold cursor-pointer hidden md:inline-block"
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
<Drawer { open } size='200px' on:clickAway={() => open = false}>
	<div class="h-full w-full bg-black text-white p-5">
		<img src="/icon/TR-TOKYO-LOGO-W.png" alt="logo" class="mx-auto mb-1 flex-grow" on:click={() => goto('/')} />
		{#each routeList as route}
			<div
				class="py-3 font-semibold cursor-pointer"
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
		<div class="text-center font-semibold mt-10" on:click={() => open = false}>閉じる</div>
	</div>
</Drawer>