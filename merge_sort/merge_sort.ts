function merge(left: number[], right: number[]): number[] {
  let sortedArray: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift() as number);
    } else {
      sortedArray.push(right.shift() as number);
    }
  }

  return [...sortedArray, ...left, ...right];
}

function merge_sort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  } 

  const mid = Math.floor(array.length / 2);

  return merge(merge_sort(array.slice(0, mid)), merge_sort(array.slice(mid)));
}

console.log(merge_sort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
