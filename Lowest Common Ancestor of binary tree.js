/* Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.*/

var lowestCommonAncestor = function(root, p, q) {
    if(root === null)
        return null;
    if(root.val === p || root.val === q){
        return root;
    }
    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);
    if(left === null && right === null)
      return null;
    return left !== null && right !== null? root : left !== null ? left : root;
};