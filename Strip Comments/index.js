function solution(input, markers) {
  return input
    .split('\n')
    .map(x => {
      const markerIndexes = markers
        .map(marker => x.indexOf(marker))
        .filter(index => index > -1);

      const indexToRemove = Math.min(...markerIndexes);

      return x.slice(0, indexToRemove - 1);
    })
    .join('\n');
}
