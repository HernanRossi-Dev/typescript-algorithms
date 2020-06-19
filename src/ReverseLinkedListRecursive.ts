class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head
  let tail: ListNode | null = head.next

  while (tail && tail.next) {
    tail = tail.next
  }
  const newList = recurse(head)

  return tail
}

function recurse(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null
  }

  let swapNode = recurse(head.next)
  head.next = null
  if (swapNode !== null) {
    swapNode.next = head

  }
  return head
}