import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const Trees = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Trees</h1>

      <LearningSection title="1️⃣ Introduction to Trees">
        <ul>
          <li>🌳 A Tree is a hierarchical data structure made of nodes connected by edges.</li>
          <li>🌳 Topmost node: <strong>Root</strong>.</li>
          <li>🌳 Nodes with no children: <strong>Leaves</strong>.</li>
          <li>🌳 Each node (except root) has one parent.</li>
          <li>🌳 A tree with N nodes has exactly (N - 1) edges.</li>
        </ul>
        <p><strong>Key Terminology:</strong></p>
        <ul>
          <li>🔹 <strong>Node</strong>: Element in a tree.</li>
          <li>🔹 <strong>Edge</strong>: Link between nodes.</li>
          <li>🔹 <strong>Root</strong>: Starting point.</li>
          <li>🔹 <strong>Leaf</strong>: Node with no children.</li>
          <li>🔹 <strong>Height</strong>: Longest path from root to leaf.</li>
          <li>🔹 <strong>Depth</strong>: Distance from root to node.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Binary Tree Types">
        <ul>
          <li>🔹 <strong>Full Binary Tree</strong>: Each node has 0 or 2 children.</li>
          <li>🔹 <strong>Perfect Binary Tree</strong>: All internal nodes have 2 children and leaves are at same level.</li>
          <li>🔹 <strong>Complete Binary Tree</strong>: All levels filled, last level filled left to right.</li>
          <li>🔹 <strong>Skewed Tree</strong>: All nodes have only one child.</li>
        </ul>
      </LearningSection>

      <LearningSection title="3️⃣ DFS Traversals">
        <p><strong>Inorder Traversal</strong> (Left, Root, Right)</p>
        <CodeBlock
          code={`def inorder(node):
    if node is None:
        return
    inorder(node.left)
    print(node.val)
    inorder(node.right)`}
        />

        <p><strong>Preorder Traversal</strong> (Root, Left, Right)</p>
        <CodeBlock
          code={`def preorder(node):
    if node is None:
        return
    print(node.val)
    preorder(node.left)
    preorder(node.right)`}
        />

        <p><strong>Postorder Traversal</strong> (Left, Right, Root)</p>
        <CodeBlock
          code={`def postorder(node):
    if node is None:
        return
    postorder(node.left)
    postorder(node.right)
    print(node.val)`}
        />
      </LearningSection>

      <LearningSection title="4️⃣ BFS Traversal (Level Order)">
        <CodeBlock
          code={`from collections import deque

def levelOrder(root):
    if not root:
        return
    queue = deque([root])

    while queue:
        node = queue.popleft()
        print(node.val)
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)`}
        />
      </LearningSection>

      <LearningSection title="5️⃣ Summary">
        <ul>
          <li>✅ Trees are non-linear, hierarchical structures.</li>
          <li>✅ Binary Trees form the foundation of many DSA problems.</li>
          <li>✅ DFS and BFS are key traversal techniques.</li>
          <li>✅ Mastery of traversal logic is essential for tree-based problems.</li>
        </ul>
      </LearningSection>

      <LearningSection title="6️⃣ Practice Question - Sum of Leaf Nodes">
        <p><strong>Problem:</strong> Write a function to find the sum of all leaf nodes in a binary tree.</p>
        <p><strong>Example:</strong></p>
        <pre>
        <img src="/tree1.png" alt="Tree Example"/>
{`
Leaf Nodes: 2, 7, 20 → Sum = 29
`}
        </pre>
        <CodeBlock
          code={`def sum_of_leaf_nodes(root):
    if root is None:
        return 0
    if root.left is None and root.right is None:
        return root.val
    return sum_of_leaf_nodes(root.left) + sum_of_leaf_nodes(root.right)`}
        />
      </LearningSection>
    </div>
  );
};

export default Trees;
