import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";


const SelectionSort = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Selection Sort</h1>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 A comparison-based sorting algorithm.</li>
          <li>🔹 Repeatedly finds the smallest element and places it in the correct position.</li>
          <li>🔹 Works by selecting the minimum element in each iteration.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Algorithm Steps">
        <ol>
          <li>🔹 Iterate through the array.</li>
          <li>🔹 Find the minimum element from the unsorted part.</li>
          <li>🔹 Swap it with the first element of the unsorted part.</li>
          <li>🔹 Repeat the process for the remaining elements.</li>
        </ol>
      </LearningSection>

      <LearningSection title="3️⃣ Standard Selection Sort Algorithm">
        <CodeBlock
          code={`def selection_sort(arr): 
    n = len(arr) 
    for i in range(n): 
        min_index = i  
        for j in range(i+1, n): 
            if arr[j] < arr[min_index]: 
                min_index = j  
        arr[i], arr[min_index] = arr[min_index], arr[i]  

arr = [64, 25, 12, 22, 11] 
selection_sort(arr) 
print(arr)  # Output: [11, 12, 22, 25, 64]`}
        />
      </LearningSection>

      <LearningSection title="4️⃣ Time & Space Complexity">
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Case</th>
              <th>Time Complexity</th>
              <th>Space Complexity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best Case</td>
              <td>O(n²)</td>
              <td>O(1)</td>
            </tr>
            <tr>
              <td>Worst Case</td>
              <td>O(n²)</td>
              <td>O(1)</td>
            </tr>
            <tr>
              <td>Avg Case</td>
              <td>O(n²)</td>
              <td>O(1)</td>
            </tr>
          </tbody>
        </table>
      </LearningSection>

      <LearningSection title="5️⃣ Key Properties">
        <ul>
          <li>✅ In-Place Sorting Algorithm (Uses no extra memory).</li>
          <li>❌ Not Stable (Swaps may disrupt the order of duplicates).</li>
          <li>✅ Works well for small datasets but inefficient for large inputs.</li>
        </ul>
      </LearningSection>

      <LearningSection title="6️⃣ Dry Run Example">
        <p><strong>Input:</strong> [29, 10, 14, 37, 13]</p>
        <table className="dry-run-table">
          <thead>
            <tr>
              <th>Pass</th>
              <th>Swaps Done</th>
              <th>Array after pass</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1st</td>
              <td>1 swap</td>
              <td>[10, 29, 14, 37, 13]</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td>1 swap</td>
              <td>[10, 13, 14, 37, 29]</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td>0 swaps</td>
              <td>[10, 13, 14, 37, 29]</td>
            </tr>
            <tr>
              <td>4th</td>
              <td>1 swap</td>
              <td>[10, 13, 14, 29, 37]</td>
            </tr>
          </tbody>
        </table>
        <p>✅ Sorted Array: [10, 13, 14, 29, 37]</p>
      </LearningSection>
    </div>
  );
};

export default SelectionSort;
