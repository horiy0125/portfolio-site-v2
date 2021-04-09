import BlogPostCardViewModel from '../types/blog-post-card';
import GET_ENV_VARIABLES from '~/config/env-variables';
import environments from '~/constants/config/environments';
import pagePaths from '~/constants/page-paths';
import Post from '~/types/post';
import QiitaPost from '~/types/qiita-post';

const blogPostCardViewModel = (
  posts: Post[],
  qiitaPosts: QiitaPost[],
): BlogPostCardViewModel[] => {
  const integratedPosts: BlogPostCardViewModel[] = [];

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
      integratedPosts.push(p);
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
      integratedPosts.push(p);
    }
  });

  return integratedPosts;
};

export default blogPostCardViewModel;
