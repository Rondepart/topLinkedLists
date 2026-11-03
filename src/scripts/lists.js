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
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}