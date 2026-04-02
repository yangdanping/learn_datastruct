class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  print() {
    let current = this.head;
    let res = [];
    while (current) {
      res.push(current.value);
      current = current.next;
    }
    console.log(res.length ? res.join(' -> ') : 'empty list', '\n');
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
    }
    this.size++;
  }

  insert(value, position) {
    if (position < 0 || position > this.size) return false;

    const newNode = new Node(value);
    let current = this.head,
      prev = null,
      index = 0;
    if (position === 0) {
      [newNode.next, this.head] = [this.head, newNode];
    } else {
      while (index++ < position) [prev, current] = [current, current.next];
      [newNode.next, prev.next] = [current, newNode];
    }
    this.size++;
    return true;
  }

  remove(position) {
    if (position < 0 || position >= this.size) return null;
    let current = this.head,
      prev = null,
      index = 0;
    if (position === 0) {
      this.head = current.next;
    } else {
      while (index++ < position) [prev, current] = [current, current.next];
      prev.next = current.next;
    }

    this.size--;
    return current;
  }
}

// 测试

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.print();
ll.insert(1000, 0); // 头插
ll.print();
ll.remove(3);
ll.print();
