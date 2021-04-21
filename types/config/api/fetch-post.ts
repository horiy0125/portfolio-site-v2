import Category from '~/types/category';
import Thumbnail from '~/types/thumbnail';

type FetchPostApiResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  thumbnail: Thumbnail;
  body: string;
  category: Category;
};

export default FetchPostApiResponse;
