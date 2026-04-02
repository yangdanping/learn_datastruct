import { Node, LinkedList } from '../index.js';

const reverseList = (head) => {
  // 什么情况下无需处理 -> 空表返回 null；仅一个结点反转前后相同，直接返回 head
  if (!head || !head.next) return head;

  // 数组模拟栈结构
  const stack = [];
  let current = head;
  while (current) {
    stack.push(current);
    current = current.next;
  }
  //从上面组装的栈结构中取出元素,放到一个新的链表中
  const newHead = stack.pop();
  let newHeadCurrent = newHead;
  while (stack.length) {
    const node = stack.pop();
    newHeadCurrent.next = node;
    newHeadCurrent = newHeadCurrent.next;
  }
  newHeadCurrent.next = null;
  return newHead;
};

// 测试
// const ll = new LinkedList();
// ll.append(1);
// ll.append(2);
// ll.append(3);
// ll.append(4);
// ll.append(5);
// console.log(reverseList(ll.head));
// --- 前置判断：应直接返回，不会走下面栈逻辑 ---
console.log('空表 reverseList(null) =>', reverseList(null)); // 期望 null

const only = new Node(42);
const backOnly = reverseList(only);
console.log('单结点 value =>', backOnly?.value, '| 同一引用 =>', backOnly === only); // 期望 42, true

// --- 多结点：走完整反转 ---
const node1 = new Node(1);
node1.next = new Node(2);
node1.next.next = new Node(3);

console.log('三结点反转后依次输出:');
const newHead = reverseList(node1);
let current = newHead;
while (current) {
  console.log(current.value);
  current = current.next;
}
