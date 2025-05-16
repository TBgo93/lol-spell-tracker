const formatTime = (segundos: number): string => {
  const mins = Math.floor(segundos / 60);
  const secs = segundos % 60;
  const paddedMins = mins.toString().padStart(2, '0');
  const paddedSecs = secs.toString().padStart(2, '0');
  return `${paddedMins}:${paddedSecs}`;
};

export { formatTime };