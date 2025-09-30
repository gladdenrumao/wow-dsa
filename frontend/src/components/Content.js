import React from "react";

const Content = ({ selectedTopic }) => {
  const topicContent = {
    "binary-search": "Binary Search is an efficient searching algorithm...",
    "bubble-sort": "Bubble Sort is a simple sorting algorithm...",
    "selection-sort": "Selection Sort sorts an array by repeatedly finding the minimum...",
    "insertion-sort": "Insertion Sort builds the final sorted array one item at a time...",
    "recursion": "Recursion is a method where a function calls itself to solve subproblems...",
    "time-space-complexity": "Time and Space Complexity help us analyze algorithm efficiency...",
    "prefix-sum": "Prefix Sum is a useful technique for range query problems...",
    "two-pointers": "The Two Pointers technique is useful for solving array problems efficiently...",
  };

  return (
    <section className="content">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {selectedTopic.replace("-", " ").toUpperCase()}
      </h2>
      <p className="text-gray-600 text-lg">{topicContent[selectedTopic]}</p>
    </section>
  );
};

export default Content;
