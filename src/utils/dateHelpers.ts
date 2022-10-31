export const getMonthInString = (date: Date) => {
  const formatter = new Intl.DateTimeFormat('default', {
    month: 'long',
    year: 'numeric',
  });
  return formatter.format(date);
};
