export function shortenString (string, charsCount = 30) {
  if (string.length <= charsCount){
    return string;
  }
  return `${string.slice(0, charsCount)}...`;
}
