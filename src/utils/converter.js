export const converter = (s) => {
  // Number of milliseconds per unit of time
  const second = 1;
  const minute = second * 60;

  // Remaining minutes
  const minutes = Math.floor(s / minute);
  // Remaining seconds
  const seconds = Math.floor((s % minute) / second);

  return { minutes, seconds };
};
