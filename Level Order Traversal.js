/*Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderTraversal = function(root, lists, level){
    if(root === null)
        return;
    var list;
    if(lists.length === level){
        list = [];
        lists.push(list)
    }
    list = lists[level];
    list.push(root.val);
    levelOrderTraversal(root.left, lists, level+1);
    levelOrderTraversal(root.right, lists, level+1);
}
var levelOrder = function(root) {
    var lists = [];
    levelOrderTraversal(root, lists, 0);
    return lists;
};