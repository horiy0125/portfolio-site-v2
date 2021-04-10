import BlogPostCardViewModel from './types/blog-post-card';
import GET_ENV_VARIABLES from '~/config/env-variables';
import environments from '~/config/environments';
import Post from '~/types/post';
import QiitaPost from '~/types/qiita-post';
import pagePaths from '~/config/page-paths';

const blogPostCardViewModel = (
  posts: Post[],
  qiitaPosts: QiitaPost[],
): BlogPostCardViewModel[] => {
  const blogPostCardViewData: BlogPostCardViewModel[] = [];

  const envVariables = GET_ENV_VARIABLES();
  const onPrdEnvironment = envVariables.NODE_ENV === environments.production;

  posts.forEach(post => {
    const p: BlogPostCardViewModel = {
      id: post.id,
      title: post.title,
      thumbnailUrl: post.thumbnail ? post.thumbnail.url : null,
      categoryName: post.category.name,
      publishedAt: post.publishedAt,
      path: `${pagePaths.blogPost}/${post.id}`,
    };

    const isDebugPost = p.categoryName === 'debug';
    const rejectPost = onPrdEnvironment && isDebugPost;

    if (rejectPost === false) {
      blogPostCardViewData.push(p);
    }
  });

  qiitaPosts.forEach(post => {
    const p: BlogPostCardViewModel = {
      id: post.id,
      title: post.title,
      thumbnailUrl: post.thumbnailUrl,
      categoryName: post.category.name,
      publishedAt: post.publishedAt,
      path: post.url,
    };

    const isDebugPost = p.categoryName === 'debug';
    const rejectPost = onPrdEnvironment && isDebugPost;

    if (rejectPost === false) {
      blogPostCardViewData.push(p);
    }
  });

  return blogPostCardViewData;
};

export default blogPostCardViewModel;
