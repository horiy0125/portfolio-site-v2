const getTimestamp = (date: string): number => {
  const d = new Date(date);

  if (d === null) {
    return 0;
  } else {
    return d.valueOf();
  }
};

export default getTimestamp;
