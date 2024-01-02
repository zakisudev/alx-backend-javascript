export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (let employee of reportWithIterator) {
    result += employee + ' | ';
  }
  return result.slice(0, -3);
}