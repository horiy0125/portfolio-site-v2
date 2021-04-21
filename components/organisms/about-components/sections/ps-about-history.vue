<template>
  <ps-section class="o-psAboutHistory" en-heading="History" jp-heading="来歴">
    <section class="o-psAboutHistory__subSection">
      <ps-second-heading class="o-psAboutHistory__year" :use-en-font="true">
        2000 - 2005
      </ps-second-heading>
      <p class="o-psAboutHistory__paragraph">
        2000年1月、香川県高松市にて生まれる。
        <br />
        幼稚園の頃から車やCDラジカセといった機械類に興味が強かった。
      </p>
    </section>

    <section class="o-psAboutHistory__subSection">
      <ps-second-heading class="o-psAboutHistory__year" :use-en-font="true">
        2006 - 2011
      </ps-second-heading>
      <p class="o-psAboutHistory__paragraph">
        小学生低学年の頃、父親からノートパソコンをクリスマスプレゼントとしてもらったことを機に、コンピューターの世界にのめり込んでいく。
        <br />
        最初はインターネットを使ってみたり、Windows
        ムービーメーカー(懐かしい)を触ってみたりという程度だったが、徐々にOSの入れ替えやハードウェアの換装など、低レイヤーな領域に興味を持つようになった。
      </p>
      <ps-album :album-images="primaryAlbumImages" />
    </section>

    <section class="o-psAboutHistory__subSection">
      <ps-second-heading class="o-psAboutHistory__year" :use-en-font="true">
        2012 - 2014
      </ps-second-heading>
      <p class="o-psAboutHistory__paragraph">
        中学生になったころ、普通のWindows PCにMac OS
        Xをインストールする”Hackintosh”というものに手を出していた。（技術的な好奇心というよりは、単純にお金がなくMacintoshが買えなかったためである。）
        <br />
        P2Pファイル共有やMac
        OSのドライバ"Kext"など、初めて触れたものも多かった。
      </p>
      <ps-image
        class="o-psAboutHistory__image"
        src="/images/IMG_2752.jpeg"
        alt="Mac OS XをインストールしたWindows PC"
      />
    </section>

    <section class="o-psAboutHistory__subSection">
      <ps-second-heading class="o-psAboutHistory__year" :use-en-font="true">
        2015 - 2017
      </ps-second-heading>
      <p class="o-psAboutHistory__paragraph">
        高校生になって、興味がモバイル端末のOSやハードウェアにシフトしていた。さすがにスマホのハードウェア換装はできないが、OS(ROM)の入れ替えは可能だったため、root化→ブートローダーアンロック→ROM焼きという手順を踏んでAndroid端末のカスタムを行っていた。
        <br />
        この頃、今でいうSIMフリー端末は皆無で、キャリアから販売されたスマホを白ロムとして購入するしかなく、余計なアプリが大量にプリインストールされていた。さらに、端末のスペックがまだまだ低かったので、通常は不可能なカスタマイズを施したりプリインアプリを消したりするのにROM焼きは非常に有効な方法だった。
      </p>
      <ps-album :album-images="highAlbumImages" />
    </section>

    <section class="o-psAboutHistory__subSection">
      <ps-second-heading class="o-psAboutHistory__year" :use-en-font="true">
        2018
      </ps-second-heading>
      <p class="o-psAboutHistory__paragraph">
        浪人していたため、人生で唯一あまりパソコンに触っていない1年間であったが、ちょくちょくパソコンの分解やOSの入れ替えなどをしていた。
      </p>
      <ps-album :album-images="roninAlbumImages" />
    </section>

    <section class="o-psAboutHistory__subSection">
      <ps-second-heading class="o-psAboutHistory__year" :use-en-font="true">
        2019 -
      </ps-second-heading>
      <p class="o-psAboutHistory__paragraph">
        無事、大学生になる。1年前期で履修した「プログラミング演習」という授業でPythonをやったことで、プログラミングの面白さに気づく。
        <br />
        もともと趣味のパソコン関係を仕事にできればいいなと思っていたため、実際に利用されているシステムの開発に携わったり、現役エンジニアから教えてもらったりできるインターンを始めることに。
      </p>
      <ps-image
        class="o-psAboutHistory__image"
        src="/images/IMG_0856.jpg"
        alt="インターン中の風景"
      />
      <p class="o-psAboutHistory__paragraph">
        写真は福岡市内のITベンチャーでインターンしていた頃の仕事風景。Web開発だけでなくハードウェアや機械学習も並行していた。
      </p>
    </section>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSection from '../../ps-section.vue';
import PsAlbum from '../../ps-album.vue';
import PsSecondHeading from '~/components/atoms/ps-second-heading.vue';
import roninAlbumImages from '~/contents/about-page/ronin-album-images';
import highAlbumImages from '~/contents/about-page/high-album-images';
import primaryAlbumImages from '~/contents/about-page/primary-album-images';
import PsImage from '~/components/atoms/ps-image.vue';
import imageAspect from '~/constants/image-aspect';
import imageFitting from '~/constants/image-fitting';
export default Vue.extend({
  components: { PsSection, PsSecondHeading, PsAlbum, PsImage },

  data() {
    return {
      roninAlbumImages,
      highAlbumImages,
      primaryAlbumImages,
      imageAspect,
      imageFitting,
    };
  },
});
</script>

<style lang="scss" scoped>
$block: '.o-psAboutHistory';
#{$block} {
  &__subSection {
    padding: 16px 0 32px 0;
  }
  &__year {
    font-weight: 500;
    line-height: 2;
    padding: 8px 0;
    @include font-size(2.4);
  }
  &__paragraph {
    line-height: 1.8;
  }
  &__image {
    width: 100%;
    padding: 32px 0;
  }
}
</style>
