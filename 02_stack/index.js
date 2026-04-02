// 栈
// 栈的特点：
// - 栈是一种后进先出（LIFO, Last In First Out）的数据结构.
// - 也是一种非常常见的数据结构，并且在程序中的应用非常广泛。
// - 我们知道数组是一种线性结构，并且可以在数组的任意位置插入和删除数据。
// - 但是有时候，我们为了实现某些功能，必须对这种任意性加以限制。
// - 而栈和队列就是比较常见的受限的线性结构，我们先来学习栈结构。

// - 栈的操作主要包括：
//   1. 入栈（push）：将元素添加到栈顶。
//   2. 出栈（pop）：移除并返回栈顶的元素。
//   3. 查看栈顶元素（peek）：获取栈顶的元素但不移除。
//   4. 判断栈是否为空（isEmpty）：检查栈中是否还有元素。
//   5. 返回栈中的元素个数（size）：返回栈中的元素个数。

// 示例代码：使用 JavaScript 模拟栈的操作

export default class Stack {
  items = []; // 定义一个数组/链表,用于存储元素

  push(item) {
    this.items.push(item); // 入栈
  }
  pop() {
    return this.items.pop(); // 出栈
  }
  peek() {
    return this.items[this.items.length - 1]; // 看一眼栈顶元素,不进行任何操作
  }
  isEmpty() {
    return this.items.length === 0; // 判断栈是否为空
  }
  get size() {
    return this.items.length; // 返回栈中的元素个数
  }
}
// // 堆盘子,顺序是: 1, 2, 3
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack); // [1, 2, 3]

// // 同学们都习惯了一个概念,所有的东西都是从上往下,从左往右

// // 拿盘子,顺序是: 3, 2, 1
// const plate1 = stack.pop();
// console.log(plate1); // 3
// const plate2 = stack.pop();
// console.log(plate2); // 2
// const plate3 = stack.pop();
// console.log(plate3); // 1
