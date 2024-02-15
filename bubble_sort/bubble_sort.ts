function bubble_sort(arr: number[]): void {
  // loop to keep track of sorted elements
  for (let i = 0 ; i < arr.length; i++) {
    // loop to go through unsorted elements
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temporal = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temporal;
      }
    }
  }
  console.log(arr);
}

// will sort from lowest to highest 
bubble_sort([1, 3, 5, 2, 7, 4]) 
