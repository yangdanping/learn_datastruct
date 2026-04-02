// js实现链表,至少需要 Node,LinkedList这两个类
// 对象之间相互引用,这对象称为节点

export class Node {
  constructor(value, next = null) {
    this.value = value; // 节点存储的数据
    this.next = next; // 指向下个节点的指针
  }
}

export class LinkedList {
  head = null; // 链表头节点
  size = 0; // 链表长度
  // 手写tips:凡是会改变节点个数的方法（append、insert、remove 等）都要和 size 保持一致(所以要执行 this.size++/--)，以便前置边界判断
  // 获取链表长度
  get length() {
    return this.size;
  }

  // append：在链表末尾「接」一个新节点，就像排队时站到队尾
  append(value) {
    const newNode = new Node(value); // 先造好要接上的那一节
    if (!this.head) {
      // 队里没人：新节点就是整支队伍的起点（头）
      this.head = newNode;
    } else {
      let current = this.head; // 队里有人：从排头一路往后走，找到当前最后一个人
      while (current.next) current = current.next;
      current.next = newNode; // 让最后一个人的「下一位」指向新节点，新节点就挂在队尾了
    }
    this.size++; // 注意长度加 1
  }

  // 链表的特定位置插入一个新的项
  insert(value, position) {
    // 1.越界判断(已做好越界判断,下面current就一定是有值的了)
    if (position < 0 || position > this.size) return false;
    // 2.正式插入(数组需要位移,链表我们只需要改变指针指向即可)
    // 2.1 判断头插
    const newNode = new Node(value); // 根据传入的 value 创建新节点
    let current = this.head, // current 代表当前正在查看的节点，最初指向头节点
      prev = null, // 需要拿到 current 的前一个节点 prev,最初没有任何节点所以是 null
      index = 0; // index 用于记录我们当前走到了第几个节点

    if (position === 0) {
      [newNode.next, this.head] = [this.head, newNode]; // 头插:我们已经创建新节点,所以新节点的next 直接指向原来的 head,原来的 head 指向新节点
    }
    // 2.2 中间插
    else {
      // 2.2.1 寻找插入点
      // 顺着链表往下走，直到走到我们要插入的 position 位置(在 current 走向下一个节点之前，先把当前位置的节点存放到 前一个节点 prev 里,然后 current 就可以安心地走向我当前要找的节点 current.next 了)
      while (index++ < position) [prev, current] = [current, current.next]; // 尾插情况下,current.next指向为 null,此时相当于current插入并替换掉 null 这个位置
      // 2.2.2 正式插入节点（index === position 重新连接指针）
      [newNode.next, prev.next] = [current, newNode]; // 循环结束已到达正确的位置。即，newNode 应该被塞在 prev 节点和 current 节点之间(这里先后无所谓)
    }
    this.size++;
    return true;
  }

  remove(position) {
    // 1.越界判断(注意这里position可以等于size,因为删除最后一个节点)
    if (position < 0 || position >= this.size) return null;
    // 2.正式插入
    // 2.1 判断头删(直接指向下一个即可)
    let current = this.head,
      prev = null,
      index = 0;
    if (position === 0) {
      this.head = current.next; // 删唯一/尾结点时 current.next 已是 null，head 自然变为 null，无需 ?? null
    } else {
      while (index++ < position) [prev, current] = [current, current.next]; // 与 insert 相同：prev 跟到待删结点的前驱，current 为待删结点
      prev.next = current.next; // 删尾结点时 current.next 为 null，prev.next 接到 null 即断尾，与上一行同理
    }
    this.size--;
    return current.value;
  }

  // 按下标取结点数据：合法下标为 [0, size)，从头走 position 步即到目标结点
  get(position) {
    if (position < 0 || position >= this.size) return null;
    let current = this.head,
      index = 0;
    // position 为 0 时不进入循环，current 仍为 head；每轮沿 next 前进一步
    while (index++ < position) current = current.next;
    return current.value;
  }

  // 遍历链表
  print() {
    let current = this.head;
    let res = [];
    while (current) {
      res.push(current.value);
      current = current.next;
    }
    console.log(res.length ? res.join(' -> ') : 'empty list', '\n');
  }
}

// 1.0版本
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null; // 用来拉手,指向下一个节点
//   }
// }

// class LinkedList {
//   head = null;

//   append(value) {
//     const newNode = new Node(value);

//     if (!this.head) {
//       this.head = newNode;
//       return newNode;
//     }
//     // 指针
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode; // 将新节点赋值给当前节点的下一个节点
//   }
//   // 查找
//   search(value) {
//     let current = this.head; //先将头指针定义出来
//     while (current) {
//       if (current.value === value) {
//         return current;
//       }
//       current = current.next;
//     }
//   }

//   // 删除
//   remove(value) {
//     let current = this.head;
//     let prev = null;
//     while (current) {
//       if (current.value === value) {
//         prev.next = current.next; // 将当前节点的前一个节点的next指针指向当前节点的下一个节点
//         return current;
//       }
//       prev = current;
//       current = current.next;
//     }
//   }
// }
