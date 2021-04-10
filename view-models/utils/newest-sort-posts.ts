import BlogPostCardViewModel from '../types/blog-post-card';
import getTimestamp from '~/utils/get-timestamp';

const newestSortPosts = (
  a: BlogPostCardViewModel,
  b: BlogPostCardViewModel,
): number => {
  const aTimestamp = getTimestamp(a.publishedAt);
  const bTimestamp = getTimestamp(b.publishedAt);

  if (aTimestamp === bTimestamp) {
    return 0;
  } else if (aTimestamp > bTimestamp) {
    return -1;
  } else {
    return 1;
  }
};

export default newestSortPosts;
