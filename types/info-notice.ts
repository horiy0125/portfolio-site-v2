import Thumbnail from './thumbnail';

type InfoNotice = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  content: string;
  url?: string;
  thumbnail?: Thumbnail;
  debug: boolean;
};

export default InfoNotice;
