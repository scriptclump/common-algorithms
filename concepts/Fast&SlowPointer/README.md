https://iq.opengenus.org/fast-and-slow-pointer-technique/
https://emre.me/coding-patterns/fast-slow-pointers/
https://codeburst.io/fast-and-slow-pointer-floyds-cycle-detection-algorithm-9c7a8693f491

Fast and slow pointer technique in Linked List
Problem 1: Middle of Linked List
Problem 2: Detect Cycle in Linked List

The fast and slow pointer technique (also known as the tortoise and hare algorithm) uses two pointers to determine traits about directional data structures. This can be an array, singly-linked list, or a graph. It is often applied to determine if there are any cycles in the data structure and is therefore also known as Floyd’s Cycle Detection Algorithm.

This concept can be used in cases like detecting a loop in a graph, finding the middle node of a linked list (better time complexity), flattening a linked list etc. All these examples use the idea of slow and fast pointers.

public Node middleNodeOfList(Node head) {
    
    Node slow = head, fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}


public boolean detectCycle(Node head) {
    if (head == null) {
    	return false;
    }

    Node slow = head, fast = head.next;
    while (slow != fast) {
    	if (fast == null || fast.next == null) {
    		return false;
    	}
    	slow = slow.next;
    	fast = fast.next.next;
    }
    return true;
}

LeetCode 141 - Linked List Cycle [easy]
LeetCode 142 - Linked List Cycle II [medium]
LeetCode 202 - Happy Number [easy]
LeetCode 876 - Middle of the Linked List [easy]