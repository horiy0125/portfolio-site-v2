import Post from '~/types/post';

type FetchPostsApiResponse = {
  contents: Post[];
  totalCount: number;
  offset: number;
  limit: number;
};

export default FetchPostsApiResponse;
