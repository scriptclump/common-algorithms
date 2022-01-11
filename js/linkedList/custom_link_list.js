class SinglyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length =1;
    }
    // O(n)
    printList(){
        let list = [];
        let currentNode = this.head;
        while(currentNode.next != null){
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        if(currentNode.next === null){
            list.push(currentNode.value);   
        }
        console.log('Current Linked List contains: ===>', list)
        return list;
    }
    // O(1)
    append(value){
        let newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    // O(1)
    prepend(value){
        let newNode = {
            value: value,
            next: null
        }
        let firstItem = this.head;
        this.head = newNode;
        this.head.next = firstItem;
        this.length++;
        return this;
    }
    // O(n)
    traversal(index){
        let counter = 0;
        let currentNode = this.head;
        while(currentNode.next !== null){
            if(counter === index){
                return currentNode;
            }
            currentNode = currentNode.next;
            counter++;
        }
    }
    // O(n)
    insert(index, value){
        if(index >= this.length){
            this.append(value);
        }       
        let holdingPointer = this.traversal(index);
        let newNode = {
            value: value,
            next: holdingPointer.next
        }
        holdingPointer.next = newNode;
        this.length++;
        return this;
    }
    // O(n)
    delete(index){
        let holdingPointer = this.traversal(index-1);
        let unwantedNode = holdingPointer.next;
        let predence = unwantedNode.next;
        holdingPointer.next = predence;
        this.length--;
        return this;
    }

}


class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    printList(){
        let list = [];
        let currentNode = this.head;
        while(currentNode.next != null){
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        if(currentNode.next === null){
            list.push(currentNode.value);   
        }
        console.log('Current Doubly Linked List contains: ===>', list)
        return list;
    }

    append(value){
        let newNode = {
            value: value,
            next: null,
            prev: null
        }
    }

    


}



sll = new SinglyLinkedList(12);
sll.append(13);
sll.append(14);
sll.append(15);
sll.prepend(11);
sll.prepend(10);
sll.insert(4, 9);
sll.delete(5);
console.log(sll)
sll.printList();


dll = new DoublyLinkedList(1);
dll.printList();