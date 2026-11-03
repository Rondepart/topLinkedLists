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
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}