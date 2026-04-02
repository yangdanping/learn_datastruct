/*
数组（Array）结构是一种重要的数据结构：
- 几乎是每种编程语言都会提供的一种原生数据结构（语言自带的）；
- 并且我们可以借助于数组结构来实现其他的数据结构，比如栈（Stack）、队列（Queue）、堆（Heap）；
通常数组的内存是连续的，所以数组在知道下标值的情况下，访问效率是非常高的。
*/

let nums = [1, 2, 3, 4, 5];

console.log(nums);

// 插入：在索引位置1处插入元素3，不删除任何元素（第二个参数为0）
nums.splice(1, 0, 3);

console.log('nums after splice add:', nums);

// 删除：从索引位置1处删除1个元素
nums.splice(1, 1);

console.log('nums after splice delete:', nums);

// 查找：通过条件查找第一个匹配的元素值
const two = nums.find((item) => item === 2);

// 查找：通过条件查找第一个匹配元素的索引位置
const twoIndex = nums.findIndex((item) => item === 2);
