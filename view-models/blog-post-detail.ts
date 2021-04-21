import BlogPostDetailViewModel from './types/blog-post-detail';
import Post from '~/types/post';

const blogPostDetailViewModel = (postDetail: Post): BlogPostDetailViewModel => {
  const blogPostDetailViewData: BlogPostDetailViewModel = {
    id: postDetail.id,
    title: postDetail.title,
    thumbnailUrl: postDetail.thumbnail ? postDetail.thumbnail.url : null,
    publishedAt: postDetail.publishedAt,
    categoryName: postDetail.category.name,
    body: postDetail.body,
  };

  return blogPostDetailViewData;
};

export default blogPostDetailViewModel;
