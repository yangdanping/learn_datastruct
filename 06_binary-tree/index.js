// 跟多叉树最大的区别，只有两个子节点，那我们就不用数组来表示了，而直接用left 和 right 两个属性来表示
// 哪个更高级？
// 没有高级之分，只有约束不同。二叉树限制更强，所以结构更可控，在算法题和底层结构中更常见，例如：Binary Search Tree / Heap;

// 🌟首先定义二叉树节点
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 二叉树 在这个基础上衍生出来:二叉搜索树、平衡二叉树、满二叉树、完全二叉树
class BinaryTree {
  root = null;

  // 插入：按层从左到右找第一个空位，优先挂左子再挂右子，保持「完全二叉树」的填法
  insert(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
      return;
    }
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      // 核心逻辑：先补左子节点,再补右子节点,两个都有了才继续往下找
      if (!node.left) {
        node.left = new TreeNode(value);
        return;
      }
      if (!node.right) {
        node.right = new TreeNode(value);
        return;
      }
      // 左右都满了，把左右子节点入队，下一轮继续按层找空位
      queue.push(node.left);
      queue.push(node.right);
    }
  }
}

const tree = new BinaryTree();
tree.insert('root');
tree.insert('n1');
tree.insert('n2');
console.log('tree ->', JSON.stringify(tree));

const resTree = {
  root: {
    value: 'root',
    left: { value: 'n1', left: null, right: null },
    right: { value: 'n2', left: null, right: null },
  },
};
