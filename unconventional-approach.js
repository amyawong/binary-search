// Prompt: Given a sorted array, write a function that returns the index for the given element
// nums = [1, 3, 5, 7, 9, 11, 13]
// target = 8

// "BAD" approaches:
const arr = ["a", "b", "c", "x", "y", "z"];
const search = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
};

const search2 = (arr, target) => {
  return arr.indexOf(target)
}

// Time Complexity: O(n) / Linear
