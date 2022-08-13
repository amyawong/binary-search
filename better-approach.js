// Task is to search through an array for an element (target) and return the index

const arr = ['a', 'b', 'c', 'x', 'y', 'z'];
// index:     0    1    2    3    4    5
//                        ⬆️
//                   middle index in this scenario is between 2 and 3 and refers to 'c' and 'x'


// Plan:
// Instead of starting at index 0, find the middle index and start in middle
  // if middle === target then return that index
  // if middle > target then search left half ['a', 'b', 'c']
  //                                            0    1    2
  //                                                 ⬆️
  // then repeat again and look in the middle of that left half array
  // if left middle < target then search right half ['x', 'y', 'z']
  //                                                  3    4    5
  // then repeat again until index is found


// Using recursion:
const search = (target, start, end) => { // takes in target(the search value), and a starting and ending index as arguments
  
  // base condition to stop looping when it reaches the end of an array
  if (start > end) {
    return ('Not Found')
  }

  // compute middle index
  const middle = Math.floor( (start + end ) / 2);

  // check to see if middle index is equal to target and can return since target element is found
  if (arr[middle] === target) {
    return `Found ${target} at index ${middle}`
  }

  // continue searching with recursion
  // if middle value is greater than the target then call the same function but set ending index at the middle
  if (arr[middle] > target) {
    return search(target, start, middle - 1)
  }

  // if middle value is less than the target, use recursion again but set the starting value as middle
  if (arr[middle] < target) {
    return search(target, middle + 1, end)
  }
}

search(3, 0, 8);

// Time Complexity: O(log(n)) / Logrithmic
// (faster than traditional for loop which is O(n))