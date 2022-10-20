// Javascript program to detect loop in a linked list
let head; // head of list

/* Linked list Node*/
class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

/* Inserts a new Node at front of the list. */
function push(new_data) {
  /* 1 & 2: Allocate the Node & Put in the data*/
  let new_node = new Node(new_data);

  /* 3. Make next of new Node as head */
  new_node.next = head;

  /* 4. Move the head to point to new Node */
  head = new_node;
}

function detectLoop() {
  let slow_p = head, fast_p = head;
  let flag = 0;

  while (slow_p != null && fast_p != null && fast_p.next != null) {
    slow_p = slow_p.next;
    fast_p = fast_p.next.next;
    if (slow_p == fast_p) {
      flag = 1;
      break;
    }
  }
  if (flag == 1){
    console.log("Loop found");
  } else {
    console.log("Loop not found");
  } 
}

// Driver code
push(20);
push(4);



// Create loop for testing
head.next.next = head;
console.log(head);
detectLoop();
