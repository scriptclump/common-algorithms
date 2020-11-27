class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack {

    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        let newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else{
            let holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        console.log(this);
        return this;
    }

    pop(value){
        if(!this.top){
            return null;
        }
        if(this.top === this.bottom){
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
       
        console.log(this);
        return this;
    }
}


const stack = new Stack();
stack.push('google.com');
stack.push('scriptclump.com');
stack.push('twitter.com');
stack.pop();
stack.pop();
stack.pop();
stack.pop();
//stack.peek();
// stack.pop();
// stack.peek();