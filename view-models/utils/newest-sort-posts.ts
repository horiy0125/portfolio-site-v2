import BlogPostCardViewModel from '../types/blog-post-card';
import WhatsNewViewModel from '../types/whats-new';
import getTimestamp from '~/utils/get-timestamp';

const newestSortPosts = (
  a: BlogPostCardViewModel | WhatsNewViewModel,
  b: BlogPostCardViewModel | WhatsNewViewModel,
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
