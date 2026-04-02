// 用 js 的 push(入队) 和 shift(出队) 方法来模拟队列的操作
// 可以简单封装一个队列类,来模拟队列的操作,符合语义化
export default class Queue {
  items = [];

  enqueue(item) {
    this.items.push(item); // 入队
  }
  dequeue() {
    return this.items.shift(); // 出队
  }
  peek() {
    return this.items[0]; // 查看队首元素
  }
  isEmpty() {
    return this.items.length === 0; // 判断队列是否为空
  }
  get size() {
    return this.items.length; // 返回队列中的元素个数
  }
}
