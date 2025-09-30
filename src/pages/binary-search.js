import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const BinarySearch = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Binary Search</h1>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 A divide-and-conquer search algorithm.</li>
          <li>🔹 Works on a sorted array by repeatedly dividing the search space in half.</li>
          <li>🔹 Faster than Linear Search, achieving O(log n) time complexity.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Algorithm Steps">
        <ol>
          <li>🔹 Find the middle element of the array.</li>
          <li>🔹 If the middle element matches the target, return its index.</li>
          <li>🔹 If the target is smaller, search the left half.</li>
          <li>🔹 If the target is larger, search the right half.</li>
          <li>🔹 Repeat until the element is found or the search space is exhausted.</li>
        </ol>
      </LearningSection>

      <LearningSection title="3️⃣ Iterative Binary Search (Without Recursion)">
        <CodeBlock
          code={`def binary_search(arr, target): 
    low, high = 0, len(arr) - 1 
    while low <= high: 
        mid = (low + high) // 2 
        if arr[mid] == target: 
            return mid  # Target found, return index 
        elif arr[mid] < target: 
            low = mid + 1  # Search right half 
        else: 
            high = mid - 1  # Search left half 
    return -1  # Target not found 
 
arr = [2, 3, 4, 10, 18] 
target = 10 
print(binary_search(arr, target))  # Output: 3 (Index of 10)`}
        />
        <p>✅ Efficient with O(log n) time complexity.</p>
        <p>✅ No extra space required (O(1) space complexity).</p>
        <p>❌ May require sorting beforehand (O(n log n) if sorting is needed).</p>
      </LearningSection>

      <LearningSection title="4️⃣ Recursive Binary Search">
        <CodeBlock
          code={`def recursive_binary_search(arr, low, high, target): 
    if low > high: 
        return -1  # Target not found 
    mid = (low + high) // 2 
    if arr[mid] == target: 
        return mid  # Target found 
    elif arr[mid] < target: 
        return recursive_binary_search(arr, mid + 1, high, target)  # Search right half 
    else: 
        return recursive_binary_search(arr, low, mid - 1, target)  # Search left half 
 
arr = [2, 3, 4, 10, 18] 
target = 10 
print(recursive_binary_search(arr, 0, len(arr) - 1, target))  # Output: 3 (Index of 10)`}
        />
        <p>✅ Uses recursion for a more intuitive approach.</p>
        <p>❌ Uses extra space due to recursive function calls (O(log n) space complexity).</p>
      </LearningSection>

      <LearningSection title="5️⃣ Time & Space Complexity">
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
              <td>O(1) (Target found at mid)</td>
              <td>O(1) (Iterative)</td>
            </tr>
            <tr>
              <td>Worst Case</td>
              <td>O(log n)</td>
              <td>O(1)</td>
            </tr>
            <tr>
              <td>Avg Case</td>
              <td>O(log n)</td>
              <td>O(1)</td>
            </tr>
          </tbody>
        </table>
        <p>✅ Much faster than Linear Search (O(n)).</p>
        <p>✅ Efficient for large datasets.</p>
      </LearningSection>

      <LearningSection title="6️⃣ Key Properties">
        <ul>
          <li>✅ Only works on sorted arrays.</li>
          <li>✅ Divide and conquer approach.</li>
          <li>✅ Faster than Linear Search (O(log n) vs. O(n)).</li>
          <li>✅ Iterative version uses O(1) space.</li>
          <li>❌ Recursive version uses O(log n) space due to call stack.</li>
        </ul>
      </LearningSection>

      <LearningSection title="7️⃣ Dry Run Example">
        <p><strong>Input:</strong> [1, 3, 5, 7, 9, 11], Target: 7</p>
        <table className="dry-run-table">
          <thead>
            <tr>
              <th>Step</th>
              <th>Low</th>
              <th>High</th>
              <th>Mid</th>
              <th>Mid Value</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1st</td>
              <td>0</td>
              <td>5</td>
              <td>2</td>
              <td>5</td>
              <td>Search Right</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td>3</td>
              <td>5</td>
              <td>4</td>
              <td>9</td>
              <td>Search Left</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>7</td>
              <td>Found</td>
            </tr>
          </tbody>
        </table>
      </LearningSection>
    </div>
  );
};

export default BinarySearch;
