/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let list: number[] = [];
    let sortedList = new ListNode(-1)
    let curr = sortedList;

    while (list1 !== null) {
        list.push(list1.val);
        list1 = list1.next;
    }

    while (list2 !== null) {
        list.push(list2.val);
        list2 = list2.next;
    }
    
    list.sort((x, y) => x - y);
    for (let value of list) {
        curr.next = new ListNode(value);
        curr = curr.next;
    }

    return sortedList.next;
};

// Test Case
const testCase1 = {
    list1: new ListNode(1, new ListNode(2, new ListNode(4))),
    list2: new ListNode(1, new ListNode(3, new ListNode(4)))
}; // Output: [1, 1, 2, 3, 4, 4]

const testCase2 = {
    list1: null,
    list2: null
}; // Output: []

const testCase3 = {
    list1: null,
    list2: new ListNode(0)
}; // Output: [0]

// Test Case Run
console.log(mergeTwoLists(testCase1.list1, testCase1.list2));

// Solution
// 1. Create a new array to store all the value from list1 and list2
// 2. Loop through list1 and list2 to get all the value and store in the array
// 3. Sort the array
// 6. Loop through the array and create a new ListNode with the value from the array

// Time Complexity: O(n log n)
// Space Complexity: O(n)
