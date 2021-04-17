import AlbumImage from '~/types/album-image';

const linebotAlbumImages: AlbumImage[] = [
  {
    src: '/images/IMG_0199.PNG',
    alt: '実際に作ったLINEbotアカウント',
    description:
      '送った文字をQRコードに変換してくれるLINEbot。FlaskでLINE Messaging APIを利用しており、Heroku上で稼働している。',
    link: null,
  },
  {
    src: '/images/IMG_0200.PNG',
    alt: 'LINEbotアカウントとのトーク画面',
    description:
      'このように生成したQRコードを画像形式でそのまま返信してくれる。',
    link: null,
  },
  {
    src: '/images/Ekvw4lKUcAMkS_v.png',
    alt: 'LINEbotアカウントのQRコード',
    description:
      '実際にLINEアカウントとして公開しているので、上のQRコードから友達追加できる。',
    link: null,
  },
];

export default linebotAlbumImages;
