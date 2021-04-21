import WebShareData from '~/types/web-share-data';

const callWebShareApi = async (toShareData: WebShareData): Promise<boolean> => {
  try {
    await navigator.share(toShareData);
    return true;
  } catch {
    return false;
  }
};

export default callWebShareApi;
