import { Node, LinkedList } from '../index.js';

const reverseList = (head) => {
  // 如果使用的是递归，那么递归必须有结束条件
  if (!head || !head.next) return head;
  const newHead = reverseList(head.next); // 反转 next 节点
  head.next.next = head;
  head.next = null;
  return newHead;
};

// 测试
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
