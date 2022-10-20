// Sample
// {
//     head: {
//       value: 7, // first value
//       next: {
//         value: false, // second value
//         next: {
//           value: "A string", // third value
//           next: null
//         }
//       }
//     }
//   }

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}   
let newNode = new Node("World");
console.log(newNode);
