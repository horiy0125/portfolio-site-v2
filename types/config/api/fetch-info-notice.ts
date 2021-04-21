import InfoNotice from '~/types/info-notice';

type FetchInfoNoticeApiResponse = {
  contents: InfoNotice[];
  totalCount: number;
  offset: number;
  limit: number;
};

export default FetchInfoNoticeApiResponse;
