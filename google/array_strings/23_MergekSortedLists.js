// 23. Merge k Sorted Lists

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 var mergeKLists = function(lists) {
    if (!lists.length) return null;
    
    // dummy value for simplified algo
    if (lists.length == 1) lists.push(null);
    
    var merge = function(l1, l2) {
        if (!l1) return l2;
        if (!l2) return l1;
        
        // h is dummy listnode to use as head of list
        let h = new ListNode(), c = h, n = null;

        while (l1 && l2) {
            // l1 must point to list with smallest val
            if (l1.val > l2.val) {
                [l1, l2] = [l2, l1];
            }

            // n == smallest val
            n  = l1;
            l1 = l1.next;
            
            c.next = n;
            c      = n;
        }

        // if one list is empty add remaining nodes from other list
        if (l2) c.next = l2;
        
        // strip dummy head
        return h.next;
    }

    // merge to two list into one list
    let r = lists.pop();
    while (lists.length) {
        r = merge(r, lists.pop());
    }
    
    return r;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    const flattenedArr = []; //temporarily take out of Linked List structure
    
    for (let i = 0; i < lists.length; i++) {
        while (lists[i]) {
            flattenedArr.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    
    flattenedArr.sort((a, b) => {return a - b}); // sort into ascending order
    
    const numTotalNodes = flattenedArr.length;
    
    if (numTotalNodes === 0 ) {
        const emptyNode = new ListNode(undefined, undefined);
        return emptyNode.next;
    }
    
    let prevNode = new ListNode(flattenedArr[numTotalNodes - 1], undefined);
    
    for (let i = flattenedArr.length - 2; i >= 0; i--) {
        // recreate the linked list (flattened)
        prevNode = new ListNode(flattenedArr[i], prevNode);
    }
    
    return prevNode;
};
// Approach 1: Brute Force
// Intuition & Algorithm

// Traverse all the linked lists and collect the values of the nodes into an array.
// Sort and iterate over this array to get the proper value of nodes.
// Create a new sorted linked list and extend it with the new nodes.
// As for sorting, you can refer here for more about sorting algorithms.

// class Solution(object):
//     def mergeKLists(self, lists):
//         """
//         :type lists: List[ListNode]
//         :rtype: ListNode
//         """
//         self.nodes = []
//         head = point = ListNode(0)
//         for l in lists:
//             while l:
//                 self.nodes.append(l.val)
//                 l = l.next
//         for x in sorted(self.nodes):
//             point.next = ListNode(x)
//             point = point.next
//         return head.next

// Complexity Analysis

// Time complexity : O(N\log N)O(NlogN) where NN is the total number of nodes.

// Collecting all the values costs O(N)O(N) time.
// A stable sorting algorithm costs O(N\log N)O(NlogN) time.
// Iterating for creating the linked list costs O(N)O(N) time.
// Space complexity : O(N)O(N).

// Sorting cost O(N)O(N) space (depends on the algorithm you choose).
// Creating a new linked list costs O(N)O(N) space.


// Approach 2: Compare one by one
// Algorithm

// Compare every \text{k}k nodes (head of every linked list) and get the node with the smallest value.
// Extend the final sorted linked list with the selected nodes.


// Complexity Analysis

// Time complexity : O(kN)O(kN) where \text{k}k is the number of linked lists.

// Almost every selection of node in final linked costs O(k)O(k) (\text{k-1}k-1 times comparison).
// There are NN nodes in the final linked list.
// Space complexity :

// O(n)O(n) Creating a new linked list costs O(n)O(n) space.
// O(1)O(1) It's not hard to apply in-place method - connect selected nodes instead of creating new nodes to fill the new linked list.


// Approach 3: Optimize Approach 2 by Priority Queue
// Algorithm

// Almost the same as the one above but optimize the comparison process by priority queue. You can refer here for more information about it.
// from Queue import PriorityQueue

// class Solution(object):
//     def mergeKLists(self, lists):
//         """
//         :type lists: List[ListNode]
//         :rtype: ListNode
//         """
//         head = point = ListNode(0)
//         q = PriorityQueue()
//         for l in lists:
//             if l:
//                 q.put((l.val, l))
//         while not q.empty():
//             val, node = q.get()
//             point.next = ListNode(val)
//             point = point.next
//             node = node.next
//             if node:
//                 q.put((node.val, node))
//         return head.next


// Complexity Analysis

// Time complexity : O(N\log k)O(Nlogk) where \text{k}k is the number of linked lists.

// The comparison cost will be reduced to O(\log k)O(logk) for every pop and insertion to priority queue. But finding the node with the smallest value just costs O(1)O(1) time.
// There are NN nodes in the final linked list.
// Space complexity :

// O(n)O(n) Creating a new linked list costs O(n)O(n) space.
// O(k)O(k) The code above present applies in-place method which cost O(1)O(1) space. And the priority queue (often implemented with heaps) costs O(k)O(k) space (it's far less than NN in most situations).


// Approach 4: Merge lists one by one
// Algorithm

// Convert merge \text{k}k lists problem to merge 2 lists (\text{k-1}k-1) times. Here is the merge 2 lists problem page.

// Complexity Analysis

// Time complexity : O(kN)O(kN) where \text{k}k is the number of linked lists.

// We can merge two sorted linked list in O(n)O(n) time where nn is the total number of nodes in two lists.
// Sum up the merge process and we can get: O(\sum_{i=1}^{k-1} (i*(\frac{N}{k}) + \frac{N}{k})) = O(kN)O(∑ 
// i=1
// k−1
// ​
//  (i∗( 
// k
// N
// ​
//  )+ 
// k
// N
// ​
//  ))=O(kN).
// Space complexity : O(1)O(1)

// We can merge two sorted linked list in O(1)O(1) space.
