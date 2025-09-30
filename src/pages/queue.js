import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const Queue = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">🚶 Queue</h1>

      <LearningSection title="1️⃣ Introduction to Queue">
        <ul>
          <li>🔹 A linear data structure that follows <strong>FIFO (First In First Out)</strong> principle.</li>
          <li>🔹 Elements are added at the <strong>rear</strong> and removed from the <strong>front</strong>.</li>
          <li>🔹 Examples: Ticket counter, print queue, call center line, etc.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Queue Operations">
        <ul>
          <li>🔸 <strong>Enqueue:</strong> Add element to the rear.</li>
          <li>🔸 <strong>Dequeue:</strong> Remove and return the front element.</li>
          <li>🔸 <strong>Peek/Front:</strong> View the front without removing.</li>
          <li>🔸 <strong>isEmpty:</strong> Check if the queue is empty.</li>
          
        </ul>
      </LearningSection>

      <LearningSection title="3️⃣ Queue Using Array (Fixed Size)">
        <p>Uses a list with capacity limit to simulate queue behavior.</p>
        <CodeBlock
          code={`class Queue:
    def __init__(self, capacity):
        self.queue = []
        self.capacity = capacity

    def enqueue(self, data):
        if len(self.queue) >= self.capacity:
            print("Overflow: Queue is full")
        else:
            self.queue.append(data)

    def dequeue(self):
        if self.is_empty():
            print("Underflow: Queue is empty")
            return None
        return self.queue.pop(0)

    def peek(self):
        if self.is_empty():
            print("Queue is empty")
            return None
        return self.queue[0]

    def is_empty(self):
        return len(self.queue) == 0

    def display(self):
        print("Queue:", self.queue)`}
        />
      </LearningSection>

      <LearningSection title="4️⃣ Queue Using Linked List">
        <p>More efficient for dynamic queues, avoids shifting in array.</p>
        <CodeBlock
          code={`class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class QueueLL:
    def __init__(self):
        self.front = None
        self.rear = None

    def enqueue(self, data):
        new_node = Node(data)
        if self.rear is None:
            self.front = self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node

    def dequeue(self):
        if self.front is None:
            print("Underflow: Queue is empty")
            return None
        removed = self.front.data
        self.front = self.front.next
        if self.front is None:
            self.rear = None
        return removed

    def peek(self):
        if self.front is None:
            print("Queue is empty")
            return None
        return self.front.data

    def is_empty(self):
        return self.front is None

    def display(self):
        current = self.front
        print("Front →", end=' ')
        while current:
            print(current.data, end=' → ')
            current = current.next
        print("None")`}
        />
      </LearningSection>

      <LearningSection title="5️⃣ Sample Run (Array Queue)">
        <CodeBlock
          code={`q = Queue(3)
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)     # Overflow
q.display()

print(q.dequeue()) # 10
print(q.dequeue()) # 20
print(q.dequeue()) # 30
print(q.dequeue()) # Underflow`}
        />
      </LearningSection>
    </div>
  );
};

export default Queue;
