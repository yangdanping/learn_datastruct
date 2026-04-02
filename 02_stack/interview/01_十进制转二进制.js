import Stack from '../../02_stack.js';
export const decimalToBinary = (decimal) => {
  const stack = new Stack();
  while (decimal > 0) {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
    // console.log('decimal', decimal);
  }

  let binary = '';
  while (!stack.isEmpty()) {
    binary += stack.pop();
  }
  return binary;
};

// 测试

console.log(decimalToBinary(35)); // 1010
