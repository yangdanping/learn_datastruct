import Queue from './index.js';

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.items); // [1, 2, 3]

console.log('队首元素是:', queue.peek()); // 1

const first1 = queue.dequeue();
console.log(first1); // 1
const first2 = queue.dequeue();
console.log(first2); // 2
const first3 = queue.dequeue();
console.log(first3); // 3
