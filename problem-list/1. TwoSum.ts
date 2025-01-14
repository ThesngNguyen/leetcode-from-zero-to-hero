// Time complexity: O(n^2) - Loop through the array twice
function twoSum(nums: number[], target: number): number[] {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// Best time complexity: O(n) - If the target is found in the first loop
// function twoSum(nums: number[], target: number): number[] {
//
//
// }

// Test Case
const testCase1 = [2, 7, 11, 15]; // Output: [0, 1]
const testCase2 = [3, 2, 4]; // Output: [1, 2]
const testCase3 = [3, 3]; // Output: [0, 1]
const testCase4 = [3, 2, 3]; // Output: [0, 2]

// Test Case Run
console.log(twoSum(testCase1, 9));

// Solution
// 1. Loop through the array with index from 0
// 2. Loop through the array again with index from 0 + 1 to find the sum of two values equal to target
// 3. Return the index of two values that equal to target


