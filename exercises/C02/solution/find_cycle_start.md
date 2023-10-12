To determine if a linked list has a cycle and find the starting node of that cycle, you can use Floyd's Cycle-Finding Algorithm, also known as the "Tortoise and the Hare" technique. This algorithm uses two pointers moving through the list at different speeds.

Here's a step-by-step guide to the algorithm:

1. **Detecting a Cycle:** Use two pointers - a slow-moving one (tortoise) that moves one step at a time, and a fast-moving one (hare) that moves two steps at a time. If there's a cycle, the fast pointer (hare) will eventually catch up to the slow pointer (tortoise).

2. **Finding the Start of the Cycle:** Once the cycle has been detected (i.e., the hare has caught up to the tortoise), reset one of the pointers (usually the hare) to the head of the list. Now, move both the hare and the tortoise one step at a time. When they meet again, the node at which they meet is the start of the cycle.

Here's a Python code implementation of the above:

```python
class ListNode:
    def __init__(self, value=0, next=None):
        self.value = value
        self.next = next

def find_cycle_start(head):
    # Step 1: Detect a cycle using the hare and tortoise pointers
    hare, tortoise = head, head
    has_cycle = False
    
    while hare is not None and hare.next is not None:
        hare = hare.next.next
        tortoise = tortoise.next
        if hare == tortoise:
            has_cycle = True
            break
    
    # If no cycle, return None
    if not has_cycle:
        return None

    # Step 2: Find the start of the cycle
    hare = head
    while hare != tortoise:
        hare = hare.next
        tortoise = tortoise.next
        
    return hare

# Example usage:
# Let's say the list is 1->2->3->4->5->3 (last node pointing back to the 3)
node1 = ListNode(1)
node2 = ListNode(2)
node3 = ListNode(3)
node4 = ListNode(4)
node5 = ListNode(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node3  # This creates the cycle

print(find_cycle_start(node1).value)  # This should print 3
```

Note: Be sure to handle edge cases in real-world scenarios, such as when the linked list is empty or has only one node.