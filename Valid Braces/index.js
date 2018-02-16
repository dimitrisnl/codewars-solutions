const validBraces = braces => {
  while (
    braces.includes('{}') ||
    braces.includes('[]') ||
    braces.includes('()')
  ) {
    braces = braces
      .replace('{}', '')
      .replace('[]', '')
      .replace('()', '');
  }
  return braces.length === 0;
};
