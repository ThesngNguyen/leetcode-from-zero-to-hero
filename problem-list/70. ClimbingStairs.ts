function climbStairs(n: number): number {
    if (n <= 2) return n;
    let prev1 = 1, prev2 = 2;

    for (let i = 3; i <= n; i++) {
        const curr = prev1 + prev2;
        prev1 = prev2;
        prev2 = curr;
    }

    return prev2;
};

// Test Case
const testCase1 = 2; // Output: 2
const testCase2 = 3; // Output: 3
const testCase3 = 4; // Output: 5

// Test Case Run
console.log(climbStairs(testCase1));

// Solution
// 1. If n <= 2 return n
//    - If n = 1, only 1 way to climb
//    - If n = 2, 2 ways to climb ( 1 step + 1 step or 2 steps )
// 2. Define prev1 = 1, prev2 = 2 ( 1 step and 2 steps )
// 3. Loop from 3 to n 
//    - Define curr = prev1 + prev2 ( sum of 1 step and 2 steps )
//    - Define prev1 = prev2, prev2 = curr ( update 1 step and 2 steps )
// 4. Return prev2 ( total ways to climb )
//    - prev2 will be the last step of n

// Special case:
//    - If n = 1, return 1
//    - If n = 2, return 2
//    - If n = 3, return 3