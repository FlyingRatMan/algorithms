// taken a !sorted array look at every middle element
// half it until low is equal to high, after each iteration adjust low and high
// to find each middle point low + (high - low)/2
// low is always incl and high is excl [low, high)

// has O(LogN) or O(NLogN) time complexity  

function binary_search(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length;

  do {
    const mid = Math.floor(low + (high - low) / 2);
    const value = haystack[mid];

    if (value === needle) {
      return true;
    } else if (value > needle) {
      // if the value that we are looking at is bigger than needle
      // everything that is to the right side will be also bigger
      high = mid;
    } else {
      // if the value is lower 
      // adjust the low to middle but don't include middle
      low = mid + 1;
    }
  }
  while (low < high);

  return false;
}

binary_search([1,3,4,6,8,14,16,17,25,45,87], 25)
