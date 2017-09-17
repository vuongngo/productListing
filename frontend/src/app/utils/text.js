export function reference(str = '', len = 50) {
  const part = str.slice(0, len).replace(/<p>/i, '');
  if (str.length > len) {
    return `${part} ...`;
  }
  return part;
}
