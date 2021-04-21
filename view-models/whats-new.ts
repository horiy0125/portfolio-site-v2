import WhatsNewViewModel from './types/whats-new';
import GET_ENV_VARIABLES from '~/config/env-variables';
import environments from '~/config/environments';
import Post from '~/types/post';
import QiitaPost from '~/types/qiita-post';
import pagePaths from '~/config/page-paths';
import InfoNotice from '~/types/info-notice';

const whatsNewViewModel = (
  posts: Post[],
  qiitaPosts: QiitaPost[],
  infoNotices: InfoNotice[],
): WhatsNewViewModel[] => {
  const whatsNewViewData: WhatsNewViewModel[] = [];

  const envVariables = GET_ENV_VARIABLES();
  const onPrdEnvironment = envVariables.NODE_ENV === environments.production;

  posts.forEach(post => {
    const w: WhatsNewViewModel = {
      type: '記事更新',
      id: post.id,
      title: `ブログ記事『${post.title}』を書きました！`,
      thumbnailUrl: post.thumbnail ? post.thumbnail.url : null,
      publishedAt: post.publishedAt,
      url: `${pagePaths.blogPost}/${post.id}`,
    };

    const isDebugPost = post.category.name === 'debug';
    const rejectPost = onPrdEnvironment && isDebugPost;

    if (rejectPost === false) {
      whatsNewViewData.push(w);
    }
  });

  qiitaPosts.forEach(post => {
    const w: WhatsNewViewModel = {
      type: '記事更新',
      id: post.id,
      title: `Qiita記事『${post.title}』を書きました！`,
      thumbnailUrl: post.thumbnailUrl,
      publishedAt: post.publishedAt,
      url: post.url,
    };

    const isDebugPost = post.category.name === 'debug';
    const rejectPost = onPrdEnvironment && isDebugPost;

    if (rejectPost === false) {
      whatsNewViewData.push(w);
    }
  });

  infoNotices.forEach(infoNotice => {
    const w: WhatsNewViewModel = {
      type: 'お知らせ',
      id: infoNotice.id,
      title: infoNotice.content,
      thumbnailUrl: infoNotice.thumbnail ? infoNotice.thumbnail.url : null,
      publishedAt: infoNotice.publishedAt,
      url: infoNotice.url ? infoNotice.url : null,
    };

    const isDebugPost = infoNotice.debug;
    const rejectPost = onPrdEnvironment && isDebugPost;

    if (rejectPost === false) {
      whatsNewViewData.push(w);
    }
  });

  return whatsNewViewData;
};

export default whatsNewViewModel;
