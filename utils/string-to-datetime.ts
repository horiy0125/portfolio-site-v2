const stringToDatetime = (string: string): Date | string => {
  const d = new Date(string);

  if (String(d) === 'Invalid Date') {
    return '';
  }
  return d;
};

export default stringToDatetime;
