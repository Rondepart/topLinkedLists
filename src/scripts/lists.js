class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let currNode = this.head;
    while(currNode.nextNode !== null) {
      currNode = currNode.nextNode;
    }
    currNode.nextNode = newNode;
    return;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    if (this.head === null) return 0;

    let sizeCtr = 0;
    let currNode = this.head;
    
    while(currNode !==null) {
      currNode = currNode.nextNode;
      sizeCtr++;
    }
    return sizeCtr;
  }

  headValue() {
    if (this.head === null) return undefined;
    return this.head.value;
  }

  tail() {
    if (this.head === null) return undefined;
    
    let currNode = this.head;
    while(currNode.nextNode !== null) {
      currNode = currNode.nextNode;
    }
    return currNode.value;
  }

  at(index) {
    if (index < 0) return undefined;

    let i = 0;
    let currNode = this.head;
    while(i < index && currNode !== null) {
      currNode = currNode.nextNode;
      i++;
    }
    return currNode === null ? undefined : currNode.value;
  }

  pop() {
    if(this.head === null) return undefined;

    const popped = this.head;
    this.head = this.head.nextNode;
    return popped.value;
  }

  contains(value) {
    let currNode = this.head;

    while(currNode !== null) {
      if(currNode.value === value) return true;
      currNode = currNode.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let i = 0;
    let currNode = this.head;
    while(currNode !== null) {
      if(currNode.value === value) return i;
      
      currNode = currNode.nextNode;
      i++;
    }
    return -1;
  }

  toString() {
    if (this.head === null) return "";

    let storedStr = "";
    let currNode = this.head;
    while(currNode !== null) {
      storedStr+=`( ${currNode.value} ) -> `
      currNode = currNode.nextNode;
    }
    return storedStr + "null";
  }

  insertAt(index, ...values) {
    if(index < 0 || index > this.size()) throw new RangeError("Index is out of range");
    if (values.length === 0) return;

    let prevNode = null;
    let currNode = this.head;
    let i = 0;
    while(currNode !== null && i < index) {
      prevNode = currNode;
      currNode = currNode.nextNode;
      i++;
    }
    
    for(const value of values) {
      const newNode = new Node(value);
      if(prevNode === null) {
        this.head = newNode;
      } else {
        prevNode.nextNode = newNode;
      }  
    prevNode = newNode;
    }
    prevNode.nextNode = currNode;
  }

  removeAt(index) {
    if(index < 0 || index >= this.size()) throw new RangeError("Index is out of range");

    let prevNode = null;
    let currNode = this.head;
    for(let i = 0; i < index; i++) {
      prevNode = currNode;
      currNode = currNode.nextNode;
    }

    if(prevNode === null) {
      this.head = currNode.nextNode;
    } else {
      prevNode.nextNode = currNode.nextNode;
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}