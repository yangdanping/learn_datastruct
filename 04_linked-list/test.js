import { Node, LinkedList } from './index.js';

const ll = new LinkedList();

// 测试 append/print
console.log('='.repeat(20), 'append/print', '='.repeat(20));
ll.append('1');
ll.append('2');
ll.append('3');
ll.append('4');
ll.print();

// // 测试 insert
console.log('='.repeat(20), 'insert 头插', '='.repeat(20));
ll.insert('100', 0); // 头插
ll.print();

// // 测试 insert
console.log('='.repeat(20), 'insert 中间', '='.repeat(20));
ll.insert('200', 1); // 中间插入
ll.print();

// console.log('='.repeat(20), 'insert 尾插', '='.repeat(20));
// ll.insert('300', 6); // 尾插
// ll.print();

// // 测试 remove
// console.log('='.repeat(20), 'remove 头删', '='.repeat(20));
// ll.remove(0);
// ll.remove(0);
// ll.print();

// console.log('='.repeat(20), 'remove 中间删', '='.repeat(20));
// const removed1 = ll.remove(1);
// console.log('remove item', removed1);
// ll.print();

// console.log('='.repeat(20), 'remove 尾删', '='.repeat(20));
// const removed2 = ll.remove(3);
// console.log('remove item', removed2);
// ll.print();

// console.log('='.repeat(20), 'get 获取节点', '='.repeat(20));
// console.log(Array.from({ length: ll.length }, (_, index) => ll.get(index)));

// // 不封装ll,只用 Node 类的玩法: 直接操作节点
// const n1 = new Node(123);
// console.log('1 n1:', n1);

// const n2 = new Node(456);
// n1.next = n2; // 以此类推 123 -> 456 -> 789

// console.log('2 n1:', n1);
// // console.log('2 n2:', n2);

// const n3 = new Node(789);
// n2.next = n3;

// console.log('3 n1:', n1);
