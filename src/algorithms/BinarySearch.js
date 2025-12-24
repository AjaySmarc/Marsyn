//works for sorted array Integers
function BinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left < right) {
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    } else {
      right = mid - 1;
      mid = Math.floor((left = right) / 2);
    }
  }
  return arr[left] == target ? left : -1;
}
export default BinarySearch;
