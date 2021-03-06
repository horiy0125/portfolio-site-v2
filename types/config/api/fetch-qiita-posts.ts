import QiitaPost from '~/types/qiita-post';

type FetchQiitaPostsApiResponse = {
  contents: QiitaPost[];
  totalCount: number;
  offset: number;
  limit: number;
};

export default FetchQiitaPostsApiResponse;
