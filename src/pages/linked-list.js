import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const LinkedList = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">🔗 Linked List</h1>

      <LearningSection title="1️⃣ Basics of Linked List">
        <ul>
          <li>🔹 A linear data structure where each element is a node.</li>
          <li>🔹 Each node contains some data and a reference to the next node.</li>
          <li>🔹 Unlike arrays, memory is not contiguous.</li>
          <li>🔹 Size can grow or shrink dynamically.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Node Structure in Python">
        <p>Each node holds data and a pointer to the next node.</p>
        <CodeBlock
          code={`class Node:
    def __init__(self, data):
        self.data = data  # stores the value
        self.next = None  # points to the next node`}
        />
      </LearningSection>

      <LearningSection title="3️⃣ Traversal">
        <p>Visit each node from head to end, printing data.</p>
        <CodeBlock
          code={`def traverse(self):
    current = self.head
    while current:
        print(current.data, end=' -> ')
        current = current.next
    print('None')  # End of the list`}
        />
      </LearningSection>

      <LearningSection title="4️⃣ Insert at End">
        <p>Adds a new node to the end of the linked list.</p>
        <CodeBlock
          code={`def insert_at_end(self, data):
    new_node = Node(data)
    if not self.head:
        self.head = new_node
        return
    current = self.head
    while current.next:
        current = current.next
    current.next = new_node`}
        />
      </LearningSection>

      <LearningSection title="5️⃣ Insert at Beginning">
        <p>Inserts a node at the start of the list, updating the head pointer.</p>
        <CodeBlock
          code={`def insert_at_beginning(self, data):
    new_node = Node(data)
    new_node.next = self.head
    self.head = new_node`}
        />
      </LearningSection>

      <LearningSection title="6️⃣ Delete from Beginning">
        <p>Removes the first node by pointing head to the second node.</p>
        <CodeBlock
          code={`def delete_from_beginning(self):
    if self.head:
        self.head = self.head.next`}
        />
      </LearningSection>

      <LearningSection title="7️⃣ Delete from End">
        <p>Removes the last node by finding the second last and setting its next to None.</p>
        <CodeBlock
          code={`def delete_from_end(self):
    if not self.head or not self.head.next:
        self.head = None
        return
    current = self.head
    while current.next.next:
        current = current.next
    current.next = None`}
        />
      </LearningSection>

      <LearningSection title="8️⃣ Find Middle Node (Two Pointers)">
        <p>Use slow and fast pointers. Slow moves 1 step, fast moves 2 steps. When fast reaches the end, slow is at the middle.</p>
        <CodeBlock
          code={`def find_middle(self):
    slow = self.head
    fast = self.head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow.data if slow else None`}
        />
      </LearningSection>

      <LearningSection title="9️⃣ Sample Run">
        <CodeBlock
          code={`ll = LinkedList()
ll.insert_at_end(10)
ll.insert_at_end(20)
ll.insert_at_beginning(5)
ll.traverse()              # 5 -> 10 -> 20 -> None

ll.delete_from_beginning()
ll.traverse()              # 10 -> 20 -> None

ll.delete_from_end()
ll.traverse()              # 10 -> None

ll.insert_at_end(30)
ll.insert_at_end(40)
print(ll.find_middle())    # Output: 30`}
        />
      </LearningSection>
    </div>
  );
};

export default LinkedList;
