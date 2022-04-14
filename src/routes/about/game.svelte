<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import Paper from '@/src/components/atoms/Paper.svelte';
	import Title from '@/src/components/atoms/Title.svelte';
	import config from '$lib/config.json';
</script>

<MetaTags title="COMPANY" />

<Title class="text-2xl">{config.project.name} 大会概要</Title>
<div class="px-7">
	<Paper class="border border-black mx-auto py-10 px-5 text-center" style="max-width: 500px;">
		<Title>Vision</Title>
		<p>TEENS ROCK IN TOKYO 大会概要 2022年度TEENS　ROCK開催決定にあたり、今年から予選が全国１１ヶ所で行われることになりました。</p>
		<div>参加資格</div>
		<ul>
			<li>出場資格があるのは、メンバー全員が 2022年8月開催時点で15~18歳 (高校1年生~3年生の年齢)に限らせていただきます。性別・国籍は不問です。</li>
			<li>本大会に出場できるアマチュアバンドとは、今現在どのプロダクションにも所属せず、プロとしてのデビューが決まってないバンドとなります。</li>
		</ul>
		<div>
			<p>注意事項</p>
			<ul>
				<li>決勝大会ではオリジナル楽曲2曲を演奏し審査となります。 ・ロックに限らず、すべてのジャンルが対象です。ソロでも応募可能です。</li>
				<li>1人のアーティストが2バンド以上の掛け持ちによる応募はできません。 ・これまでは応募後のメンバーの変更は原則認めませんでしたが、新型コロナウィルス感染拡大に伴い、やむ終えない場合は変更を可能といたします。</li>
				<li>大会当日の写真・映像・音声等はTEENS ROCK 実行委員会が広報等で利用可能とします。 ・大会当日、マスメディア等の取材が入った場合、各メディアが会場内の様子を撮影・利用します。</li>
				<li>応募時に提出された宣材写真やYouTubeの映像等は、TEENS ROCK実行委員会が大会運営の為に使用します。</li>
			</ul>
		</div>
		<div>大会開催場所と日時について</div>
		<p>【日程】2022年6月19日（日）12時スタート </p>
		<p>【会場】aude shibuya </p>
		<p>【住所】東京都渋谷区宇田川町4-7 トウセン宇田川町ビル５F</p>
		<div>大会までの主なスケジュール </div>
		<p>4/20　バンドエントリーの開始</p>
		<p>5/20　バンドエントリーの締切</p>
		<p>5/22 　バンド選考会</p>
		<p>5/23 　出場バンド通知連絡</p>
		 <p>※各予選によって日程や時間など変わりますのでご注意ください。</p>
	</Paper>
</div>
