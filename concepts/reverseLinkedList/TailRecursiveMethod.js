// javascript program for reversing the Linked list

var head;
class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

// A simple and tail recursive function to reverse
// a linked list. prev is passed as NULL initially.
function reverseUtil(curr, prev) {
  /* If head is initially null OR list is empty */
  if (head == null) return head;

  /* If last node mark it head */
  if (curr.next == null) {
    head = curr;

    /* Update next to prev node */
    curr.next = prev;
    return head;
  }

  /* Save curr->next node for recursive call */
  var next1 = curr.next;

  /* and update next .. */
  curr.next = prev;

  reverseUtil(next1, curr);
  return head;
}

// prints content of var linked list
function printList(node) {
  while (node != null) {
    console.log(node.data + " ");
    node = node.next;
  }
}

// Driver Code
var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

console.log("Original Linked list ");
printList(head);
var res = reverseUtil(head, null);
console.log("Reversed linked list ");
printList(res);
