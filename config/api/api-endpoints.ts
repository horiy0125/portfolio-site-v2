import API_BASE_URL from './api-base-url';

const apiEndpoints = {
  posts: `${API_BASE_URL}/posts`,
  qiita_posts: `${API_BASE_URL}/qiita_posts`,
  categories: `${API_BASE_URL}/categories`,
  // info_notice: `${API_BASE_URL}/info_notice`,
  info_notice: `${API_BASE_URL}/announcements`,
};

export default apiEndpoints;
