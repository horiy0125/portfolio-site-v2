const getLocaleDate = (date: string): string => {
  const d = new Date(date);

  if (String(d) === 'Invalid Date') {
    return '';
  }
  return d.toLocaleDateString();
};

export default getLocaleDate;
