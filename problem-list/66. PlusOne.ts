function plusOne(digits: number[]): number[] {
    const n = digits.length;

    for (let i = n - 1; i >= 0; --i) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    return [1, ...digits];
};


// Test Case
const testCase1 = [1, 2, 3]; // Output: [1, 2, 4]
const testCase2 = [4, 3, 2, 1]; // Output: [4, 3, 2, 2]
const testCase3 = [9, 9, 9]; // Output: [1, 0, 0, 0]

// Test Case Run
console.log(plusOne(testCase1));

// Solution
// 1. Reverse loop
// 2. If the value < 9 
//      - Add 1 to value then return the array
// 3. If the value = 9
//      - Define value into 0, save 1 then plus 1 to next loop value
//      - Continue to loop until end
// Special case: [9,9] or [9] 
//      - When finish loop will return with num 1 in first array
//      - Then 0 base on number 9 quantity