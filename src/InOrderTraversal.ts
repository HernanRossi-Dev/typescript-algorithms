import { TreeNode } from './TreeNode'

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return []
  let result: number[] = inorderTraversal(root.left)
  result.push(root.val)
  const rightArray = inorderTraversal(root.right)
  result = result.concat(rightArray)
  return result
};