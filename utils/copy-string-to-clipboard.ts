const copyStringToClipboard = async (data: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(data);
    return true;
  } catch {
    return false;
  }
};

export default copyStringToClipboard;
