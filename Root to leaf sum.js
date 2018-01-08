/*
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNodes = function(root, sum){
    if(root === null)
        return 0;
    sum = sum * 10 + root.val;
    if(!root.left && !root.right)
        return sum;
    return sumNodes(root.left, sum) + sumNodes(root.right,sum);
}
var sumNumbers = function(root) {
    return sumNodes(root, 0);
};