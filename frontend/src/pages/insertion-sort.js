import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const InsertionSort = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Insertion Sort</h1>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 A comparison-based, in-place sorting algorithm.</li>
          <li>🔹 Builds the sorted array one element at a time by inserting each element into its correct position.</li>
          <li>🔹 Efficient for small and nearly sorted datasets.</li>
          <li>🔹 Best case is O(n) if the array is already sorted.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Algorithm Steps">
        <ol>
          <li>🔹 Start from the second element (index 1), treating the first as sorted.</li>
          <li>🔹 Compare it with the previous elements in the sorted part.</li>
          <li>🔹 Shift larger elements one position to the right.</li>
          <li>🔹 Insert the current element into its correct position.</li>
          <li>🔹 Repeat for all elements until the array is fully sorted.</li>
        </ol>
      </LearningSection>

      <LearningSection title="3️⃣ Standard Insertion Sort">
        <CodeBlock
          code={`def insertion_sort(arr): 
    n = len(arr) 
    for i in range(1, n):   
        key = arr[i]  # Current element to insert 
        j = i - 1   
        while j >= 0 and arr[j] > key:   
            arr[j + 1] = arr[j]  # Shift larger elements to the right 
            j -= 1 
        arr[j + 1] = key  # Insert element at the correct position 
 
arr = [5, 3, 8, 4, 2] 
insertion_sort(arr) 
print(arr)  # Output: [2, 3, 4, 5, 8]`}
        />
        <p>✅ Best Case (Already Sorted Array): <strong>O(n)</strong> (Only one comparison per element).</p>
        <p>❌ Worst Case (Reverse Sorted Array): <strong>O(n²)</strong> (Each element must be shifted).</p>
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
              <td>O(n) (Already Sorted)</td>
              <td>O(1) (In-place)</td>
            </tr>
            <tr>
              <td>Worst Case</td>
              <td>O(n²) (Reverse Sorted)</td>
              <td>O(1) (In-place)</td>
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
          <li>✅ Stable Sort (Preserves order of duplicate elements).</li>
          <li>✅ In-Place Sort (No extra memory used).</li>
          <li>✅ Efficient for nearly sorted arrays (O(n) best case).</li>
          <li>✅ Performs better than Bubble and Selection Sort for small datasets.</li>
          <li>❌ Not efficient for large datasets.</li>
        </ul>
      </LearningSection>

      <LearningSection title="6️⃣ Dry Run Example">
        <p><strong>Input:</strong> [4, 2, 6, 1]</p>
        <table className="dry-run-table">
          <thead>
            <tr>
              <th>Pass</th>
              <th>Element Inserted</th>
              <th>Shifted Elements</th>
              <th>Array After Pass</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1st</td>
              <td>2</td>
              <td>4 →</td>
              <td>[2, 4, 6, 1]</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td>6</td>
              <td>No shift</td>
              <td>[2, 4, 6, 1]</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td>1</td>
              <td>6 →, 4 →, 2 →</td>
              <td>[1, 2, 4, 6]</td>
            </tr>
          </tbody>
        </table>
        <p>✅ Sorted Array: [1, 2, 4, 6]</p>
      </LearningSection>
    </div>
  );
};

export default InsertionSort;
