function insertion_sort(array: number[]): number[] {
  if (array.length === 0 || array.length === 1) {
    return array;
  }

  for (let i = 1; i < array.length; i++) {
    checkAndSwap(i, array);
  }

  function checkAndSwap(idx: number, array: number[]): void {
    const curr = idx;
    const prev = idx - 1;

    if (idx >= 0 && array[curr] < array[prev]) {
      [array[prev], array[curr]] = [array[curr], array[prev]];
      checkAndSwap(idx - 1, array);
    }
  }

  return array;
}

console.log(insertion_sort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
