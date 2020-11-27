class Stack{
    constructor(value){
        this.array = [];
    }

    peek(){
        console.log(this.array);
        return this.array[this.array.length-1];
    }

    push(value){
        console.log(this.array);
        return this.array.push(value);
    }

    pop(){
        console.log(this.array);
        return this.array.pop();
    }

}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.pop();
//console.log(stack.peek());