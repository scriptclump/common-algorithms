// Given the root of a binary tree, return the sum of values of its deepest leaves.
 

// Example 1:
//             1
//         2     3
//     4      5      6
// 7                     8

// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
// Example 2:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// 1 <= Node.val <= 100


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// dfs Solution
var deepestLeavesSum = function(root) {
    let deepestLevel = 0, sum = 0;
    const dfs = (node, level) => {
        if(!node) return;
        if(level == deepestLevel)
            sum += node.val;
        else if(level > deepestLevel) {
            deepestLevel = level;
            sum = node.val;
        }
        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }
    dfs(root, 0);
    return sum;
    
};

//BFS Solution
const deepestLeavesSum2 = function (root) {
	let deepestLevel = 0,
		sum = 0;
	const queue = [root, null];
	while (queue.length) {
		const node = queue.shift();
		if (node == null) {
			if (!queue.length) return sum;
			sum = 0;
			deepestLevel++;
			queue.push(null);
			continue;
		}
		sum += node.val;
		if (node.left) queue.push(node.left);
		if (node.right) queue.push(node.right);
	}
};