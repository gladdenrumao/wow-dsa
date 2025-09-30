import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";


const BubbleSort = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Bubble Sort</h1>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 A simple comparison-based sorting algorithm.</li>
          <li>🔹 Repeatedly swaps adjacent elements if they are in the wrong order.</li>
          <li>🔹 The largest element "bubbles" up to the correct position in each pass.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Algorithm Steps">
        <ol>
          <li>🔹 Iterate through the array.</li>
          <li>🔹 Compare adjacent elements and swap if needed.</li>
          <li>🔹 The largest element moves to the end after each pass.</li>
          <li>🔹 Repeat for remaining elements (total n-1 passes) until the array is sorted.</li>
        </ol>
      </LearningSection>

      <LearningSection title="3️⃣ Standard Bubble Sort (Without Optimization)">
        <CodeBlock
          code={`def bubble_sort(arr): 
    n = len(arr) 
    for i in range(n-1):   
        for j in range(n-i-1):   
            if arr[j] > arr[j+1]:   
                arr[j], arr[j+1] = arr[j+1], arr[j]  # Swap

arr = [5, 3, 8, 4, 2] 
bubble_sort(arr) 
print(arr)  # Output: [2, 3, 4, 5, 8]`}
        />
        <p>❌ Drawback: Always runs in <strong>O(n²)</strong> time, even if the array is already sorted.</p>
      </LearningSection>

      <LearningSection title="4️⃣ Optimized Bubble Sort (Early Exit)">
        <CodeBlock
          code={`def optimized_bubble_sort(arr): 
    n = len(arr) 
    for i in range(n-1): 
        swap_count = 0  
        for j in range(n-i-1):   
            if arr[j] > arr[j+1]:   
                arr[j], arr[j+1] = arr[j+1], arr[j] 
                swap_count += 1  
        if swap_count == 0:  
            break    

arr = [5, 3, 8, 4, 2] 
optimized_bubble_sort(arr) 
print(arr)  # Output: [2, 3, 4, 5, 8]`}
        />
        <p>✅ Advantage:</p>
        <ul>
          <li>✔ Best case (already sorted) → <strong>O(n)</strong></li>
          <li>✔ Worst case (reverse sorted) → <strong>O(n²)</strong></li>
        </ul>
      </LearningSection>

      <LearningSection title="5️⃣ Time & Space Complexity">
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Case</th>
              <th>Standard Bubble Sort</th>
              <th>Optimized Bubble Sort</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best Case</td>
              <td>O(n²)</td>
              <td>O(n)</td>
            </tr>
            <tr>
              <td>Worst Case</td>
              <td>O(n²)</td>
              <td>O(n²)</td>
            </tr>
            <tr>
              <td>Avg Case</td>
              <td>O(n²)</td>
              <td>O(n²)</td>
            </tr>
          </tbody>
        </table>
      </LearningSection>

      <LearningSection title="6️⃣ Key Properties">
        <ul>
          <li>✅ Stable Sort (Preserves order of duplicates)</li>
          <li>✅ In-Place Sort (No extra memory used)</li>
          <li>❌ Not efficient for large datasets</li>
        </ul>
      </LearningSection>

      <LearningSection title="7️⃣ Dry Run Example">
        <p><strong>Input:</strong> [4, 2, 6, 1]</p>
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
              <td>3 swaps</td>
              <td>[2, 4, 1, 6]</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td>2 swaps</td>
              <td>[2, 1, 4, 6]</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td>1 swap</td>
              <td>[1, 2, 4, 6]</td>
            </tr>
          </tbody>
        </table>
        <p>✅ Sorted Array: [1, 2, 4, 6]</p>
      </LearningSection>
    </div>
  );
};

export default BubbleSort;
