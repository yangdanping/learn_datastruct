// 链表是一对一手拉手,但树可以是一对多,树同样有节点(TreeNode)
// 可理解为家族关系

// 🌟首先定义多叉树节点
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

// Tree 是“树”的统称，通常指多叉树:多个子节点的树
class Tree {
  root = null;

  // 插入：按层从左到右找第一个还能挂子节点的位置，把新节点挂上去（每节点最多 2 个子节点）
  insert(value) {
    // 空树：新节点直接当根
    if (!this.root) {
      this.root = new TreeNode(value);
      return;
    }
    // 用队列做「按层遍历」，先处理同一层的节点，再处理下一层
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      // 当前节点子节点还没满 2 个，就挂在这里
      if (node.children.length < 2) {
        const newNode = new TreeNode(value);
        node.children.push(newNode);
        return;
      }
      // 已经满 2 个子节点了，把这两个子节点放进队列，后面再检查它们
      queue.push(...node.children);
    }
  }
}

const tree = new Tree();
tree.insert('root');
tree.insert('n1');
tree.insert('n2');
console.log('tree ->', JSON.stringify(tree));

const resTree = {
  root: {
    data: 'root',
    children: [
      { data: 'n1', children: [] },
      { data: 'n2', children: [] },
    ],
  },
};

// // // 不分装Tree,只用 TreeNode 类的玩法: 直接操作节点
// const root = new TreeNode('root');
// const n1 = new TreeNode('n1');
// const n2 = new TreeNode('n2');

// root.children.push(n1);
// root.children.push(n2);

// console.log('root ->', JSON.stringify(root));

// // 打印如下(作为前端很常见,只是没把它当做树)
// // 平常面试时,可以说在做权限管理/通讯录这些场景时,做查找用到二叉搜索树,接入了一些优先级的概念来去实现
// const resTree = {
//   data: 'root',
//   children: [
//     { data: 'n1', children: [] },
//     { data: 'n2', children: [] },
//   ],
// };
