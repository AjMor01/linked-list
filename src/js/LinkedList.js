import ListNode from './ListNode.js'

class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    add(value) {
    // Prepend. Create new node to be at head
    const newNode = new ListNode(value, this.head);
    this.head = newNode;
    
    // Make new node the Tail if !this.tail
        if (!this.tail) {
            this.tail = null;
        }
    console.log(this)
    return this
    }

    append(value) {
        const newNode = new ListNode(value) 
    
    // If there is no head (list is empty), sets both head and tail to point to the new node.
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;

          return this;
      }

    // If the list is not empty:
    // 1º Update the next link of the current tail node, to point to the new node. 
    // 2º Update tail link to point to the new node. 
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
    }
}
