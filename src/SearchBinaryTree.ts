import { TreeNode } from './TreeNode'

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null
  if (root.val === val) return root
  const left = searchBST(root.left, val)
  if (left) return left
  return searchBST(root.right, val)
};