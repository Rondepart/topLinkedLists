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
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}