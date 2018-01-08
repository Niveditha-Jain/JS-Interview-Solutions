/*Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).*/

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
var zigzag = function(root, lists, level){
    if(root === null)
        return;
    var list;
    if(lists.length === level){
        list = [];
        lists.push(list)
    }
    list = lists[level];
    if(level % 2 === 0){
        list.push(root.val);
    }else{
        list.unshift( root.val);
    }
    zigzag(root.left, lists, level+1);
    zigzag(root.right, lists, level+1);
}
var zigzagLevelOrder = function(root) {
    var lists = [];
    zigzag(root, lists, 0);
    return lists;
};

