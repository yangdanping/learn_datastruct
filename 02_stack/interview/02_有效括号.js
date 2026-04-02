import Stack from '../../02_stack.js';

/* 简化版心智模型：
遍历字符串的每个字符。
如果是开括号，压入对应的闭括号。
如果是闭括号，检查栈顶元素是否是匹配的开括号。若匹配，弹出栈顶元素；否则返回 false。
遍历结束后，检查栈是否为空。如果为空，说明所有括号都匹配正确，返回 true；否则返回 false。 */

export const isValid = (s) => {
  const stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    switch (char) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        if (char !== stack.pop()) {
          console.log(stack);
          return false;
        } // 若不匹配，整个括号字符串都无效
        break;
    }
  }
  return stack.isEmpty(); // 若栈为空，说明所有括号都匹配正确，返回 true；否则返回 false。
};

// 测试

// console.log(isValid('()')); // true
// console.log(isValid('()[]{}')); // true
// console.log(isValid('(]')); // false
// console.log(isValid('([)]')); // false
// console.log(isValid('{[]}')); // true
