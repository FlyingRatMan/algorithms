function qs(arr: number[], low: number, high: number): void {
  // end case when we have one element it's always sorted
  if (low >= high) {
    return;
  }

  // find pivot
  const pivotIdx = partition(arr, low, high);

  // recursively sort left and right part except pivot
  qs(arr, low, pivotIdx - 1);
  qs(arr, pivotIdx + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let idx = low - 1;

  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[high] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}

console.log(quick_sort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
