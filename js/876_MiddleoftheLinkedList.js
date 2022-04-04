// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let A = [head];
    while (A[A.length - 1].next != null){
        A.push(A[A.length - 1].next);
    }        
    return A[Math.trunc(A.length / 2)];
};

let  head = [1,2,3,4,5];
console.log(middleNode(head));


// Solution Apporach

// Approach 1: Output to Array
// Intuition and Algorithm
// Put every node into an array A in order. Then the middle node is just A[A.length // 2], since we can retrieve each node by index.
// We can initialize the array to be of length 100, as we're told in the problem description that the input contains between 1 and 100 nodes.

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100