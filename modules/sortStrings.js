function sortStringsIgnoreSpaces(arr) {
  return [...arr].sort((a, b) =>
    a.replace(/\s+/g, '').localeCompare(b.replace(/\s+/g, ''), 'en', { sensitivity: 'base' })
  );
}
module.exports = { sortStringsIgnoreSpaces };
