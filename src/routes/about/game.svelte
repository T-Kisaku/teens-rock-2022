<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import Container from '@/src/components/organizations/Container.svelte';
	import Paper from '@/src/components/atoms/Paper.svelte';
	import CheckTitle from '@/src/components/atoms/CheckTitle.svelte';
	import Alert from '@/src/components/atoms/Alert.svelte';
</script>

<MetaTags title="Tournament" />
<Container variant="article">
	<Paper class="border mx-auto py-10 px-5 space-y-5">
		<div
			class="border-y border-black bg-slate-100 py-3 font-bold text-center"
			style="font-size: 30px;"
		>
			TEENS ROCK IN TOKYO 大会概要
		</div>
		<p>
			2022年度TEENS　ROCK開催決定にあたり、今年から予選が全国１１ヶ所で行われることになりました。
		</p>
		<CheckTitle>参加資格</CheckTitle>
		<ul class="list-disc ml-7">
			<li>
				出場資格があるのは、メンバー全員が 2022年8月開催時点で15~18歳
				(高校1年生~3年生の年齢)に限らせていただきます。性別・国籍は不問です。
			</li>
			<li>
				本大会に出場できるアマチュアバンドとは、今現在どのプロダクションにも所属せず、プロとしてのデビューが決まってないバンドとなります。
			</li>
		</ul>
		<Alert title="注意事項">
			<ul class="ml-7 list-disc">
				<li>決勝大会ではオリジナル楽曲2曲を演奏し審査となります。</li>
				<li>ロックに限らず、すべてのジャンルが対象です。ソロでも応募可能です。</li>
				<li>1人のアーティストが2バンド以上の掛け持ちによる応募はできません。</li>
				<li>
					これまでは応募後のメンバーの変更は原則認めませんでしたが、新型コロナウィルス感染拡大に伴い、やむ終えない場合は変更を可能といたします。
				</li>
				<li>大会当日の写真・映像・音声等はTEENS ROCK 実行委員会が広報等で利用可能とします。</li>
				<li>
					大会当日、マスメディア等の取材が入った場合、各メディアが会場内の様子を撮影・利用します。
				</li>
				<li>
					応募時に提出された宣材写真やYouTubeの映像等は、TEENSROCK実行委員会が大会運営の為に使用します。
				</li>
			</ul>
		</Alert>
		<CheckTitle>大会開催場所と日時について</CheckTitle>
		<p>【日程】2022年6月19日（日）12時スタート</p>
		<p>【会場】aude shibuya</p>
		<p>【住所】東京都渋谷区宇田川町4-7 トウセン宇田川町ビル５F</p>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5878047651017!2d139.69568951520006!3d35.662525938605064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca93bcdba17%3A0x50a675c4a058b9a2!2z44CSMTUwLTAwNDIgVG9reW8sIFNoaWJ1eWEgQ2l0eSwgVWRhZ2F3YWNoxY0sIDTiiJI3IOODiOOCpuOCu-ODs-Wuh-eUsOW3neeUuuODk-ODqyA1Zg!5e0!3m2!1sen!2sjp!4v1650368214845!5m2!1sen!2sjp"
			style="border:0;"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			class="mx-auto h-96 w-full"
		></iframe>
		<CheckTitle>大会までの主なスケジュール</CheckTitle>
		<div class="font-bold">
			<p>4/20　バンドエントリーの開始</p>
			<p>5/20　バンドエントリーの締切</p>
			<p>5/22 　バンド選考会</p>
			<p>5/23 　出場バンド通知連絡</p>
		</div>
		<p>※各予選によって日程や時間など変わりますのでご注意ください。</p>
	</Paper>
</Container>
