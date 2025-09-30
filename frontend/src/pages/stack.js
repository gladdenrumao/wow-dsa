import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const Stack = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">🗃️ Stack</h1>

      <LearningSection title="1️⃣ Introduction to Stack">
        <ul>
          <li>🔹 A linear data structure that follows the <strong>LIFO (Last In First Out)</strong> principle.</li>
          <li>🔹 Operations are done at one end — the top.</li>
          <li>🔹 Think of a stack of books — the last one placed is removed first.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Stack Operations">
        <ul>
          <li>🔸 <strong>Push:</strong> Add an element to the top of the stack.</li>
          <li>🔸 <strong>Pop:</strong> Remove and return the top element.</li>
          <li>🔸 <strong>Peek:</strong> View the top element without removing.</li>
          <li>🔸 <strong>isEmpty:</strong> Check if the stack is empty.</li>
        </ul>
      </LearningSection>

      <LearningSection title="3️⃣ Stack Using Array (with Fixed Size)">
        <p>Below is an implementation that handles overflow and underflow:</p>
        <CodeBlock
          code={`class Stack:
    def __init__(self, capacity):
        self.stack = []
        self.capacity = capacity

    def push(self, data):
        if len(self.stack) >= self.capacity:
            print("Overflow: Stack is full")
        else:
            self.stack.append(data)

    def pop(self):
        if self.is_empty():
            print("Underflow: Stack is empty")
            return None
        return self.stack.pop()

    def peek(self):
        if self.is_empty():
            print("Stack is empty")
            return None
        return self.stack[-1]

    def is_empty(self):
        return len(self.stack) == 0

    def display(self):
        print("Stack:", self.stack)`}
        />
      </LearningSection>

      <LearningSection title="4️⃣ Stack Using Linked List (with Edge Case Handling)">
        <p>Dynamic memory, no overflow unless memory exhausted. Still handle underflow:</p>
        <CodeBlock
          code={`class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class StackLL:
    def __init__(self):
        self.top = None

    def push(self, data):
        new_node = Node(data)
        new_node.next = self.top
        self.top = new_node

    def pop(self):
        if self.is_empty():
            print("Underflow: Stack is empty")
            return None
        popped = self.top.data
        self.top = self.top.next
        return popped

    def peek(self):
        if self.is_empty():
            print("Stack is empty")
            return None
        return self.top.data

    def is_empty(self):
        return self.top is None

    def display(self):
        current = self.top
        print("Stack top ↓")
        while current:
            print(current.data)
            current = current.next
        print("None")`}
        />
      </LearningSection>

      <LearningSection title="5️⃣ Sample Run with Edge Cases">
        <CodeBlock
          code={`s = Stack(3)
s.push(10)
s.push(20)
s.push(30)
s.push(40)      # Overflow
s.display()

print(s.pop())  # 30
print(s.pop())  # 20
print(s.pop())  # 10
print(s.pop())  # Underflow`}
        />
      </LearningSection>
    </div>
  );
};

export default Stack;
