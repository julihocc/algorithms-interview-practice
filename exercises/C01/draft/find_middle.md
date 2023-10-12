Finding the middle of a singly linked list can be achieved efficiently using the "tortoise and hare" (or two-pointer) approach. This involves two pointers: one advances by one node at a time (slow), and the other advances by two nodes at a time (fast). By the time the fast pointer reaches the end of the list, the slow pointer will be pointing at the middle of the list.

Here's the step-by-step approach:

1. Initialize two pointers `slow` and `fast` to the head of the linked list.
2. Traverse the linked list:
    - Move `slow` one step at a time (i.e., `slow = slow.next`).
    - Move `fast` two steps at a time (i.e., `fast = fast.next.next`).
3. When `fast` reaches the end of the list or is `null`, `slow` will be at the middle of the linked list.

If the number of nodes in the linked list is even, then there would be two middle nodes and this method will return the second middle node. If the number of nodes is odd, then there's only one middle node and it will be returned.

Here's the code to find the middle of a singly linked list:

```python
class ListNode:
    def __init__(self, value=0, next=None):
        self.value = value
        self.next = next

def find_middle(head):
    if not head:
        return None
    
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    return slow

# Usage example:
# Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
middle = find_middle(head)
print(middle.value)  # Expected output: 3
```

Note that this approach gives a time complexity of \(O(n)\), where \(n\) is the number of nodes in the linked list.