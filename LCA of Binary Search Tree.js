/*Given a binary search tree, find the lowest common ancestor (LCA) of two given nodes in the tree.*/


function lca(root, n1, n2){
    if(root === null)
        return null;
    if(root.val < Math.min(n1.val,n2.val)){
        return lca(root.right, n1, n2);
    }
    if(root.val > Math.max(n1.val,n2.val)){
        return lca(root.left, n1, n2);
    }
    return root;
}