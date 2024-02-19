function selection_sort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let lowestId = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j + 1] < arr[lowestId]) {
        lowestId = j + 1;
      }
    }

    let tmp = arr[lowestId];
    arr[lowestId] = arr[i];
    arr[i] = tmp;
  }
  
  return arr;
}

selection_sort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])