import Stack from './index.js';
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.items); // [1, 2, 3]

console.log('栈顶元素是:', stack.peek()); // 3

const plate1 = stack.pop();
console.log(plate1); // 3
const plate2 = stack.pop();
console.log(plate2); // 2
const plate3 = stack.pop();
console.log(plate3); // 1
