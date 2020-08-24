const DATE_UNITS = [
  ['year', 31536000],
  ['month', 2678400],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
];

const getDateDiffs = (timestamp) => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;
  // eslint-disable-next-line no-shadow
  const [unit, secondsInUnit] = DATE_UNITS.find(([unit, secondsInUnit]) => Math.abs(elapsed) > secondsInUnit || unit === 'second');

  return {
    value: Math.round(elapsed / secondsInUnit),
    unit,
  };
};

const timeAgo = (timestamp) => {
  const { value, unit } = getDateDiffs(timestamp);

  const rtf = new Intl.RelativeTimeFormat('es', { style: 'long' });

  return rtf.format(value, unit);
};

export default timeAgo;
