import AlbumImage from '~/types/album-image';

const portfolioAlbumImages: AlbumImage[] = [
  {
    src: '/images/IMG_0214.PNG',
    alt: 'このポートフォリオサイト',
    description:
      'このポートフォリオサイト。Nuxt.js(TypeScript)で開発し、Vercelでホスティングしている。',
    link: null,
  },
  {
    src: '/images/portfolio-components.png',
    alt: '実装したコンポーネント',
    description: 'HTML5標準タグなども共通コンポーネント化した。',
    link: null,
  },
  {
    src: '/images/2021-03-11.png',
    alt: 'GitHubのリポジトリ',
    description: 'ソースコードはすべて、GitHubにて公開している。',
    link: 'https://github.com/horri1520/portfolio-site',
  },
];

export default portfolioAlbumImages;
