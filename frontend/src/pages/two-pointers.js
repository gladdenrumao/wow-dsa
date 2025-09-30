import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const TwoPointers = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Two Pointers Technique</h1>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 A space-efficient and optimized approach for solving problems on sorted arrays, linked lists, and searching problems.</li>
          <li>🔹 Uses two pointers that traverse the data structure simultaneously, often from opposite directions.</li>
          <li>🔹 Reduces time complexity from O(n²) to O(n) in many cases.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Algorithm Variations">
        <h3>🔹 Opposite Direction Two Pointers</h3>
        <ul>
          <li>✅ One pointer starts from the beginning, the other from the end.</li>
          <li>✅ Used for problems like finding pairs with a given sum.</li>
        </ul>

        <h3>🔹 Same Direction Two Pointers (Sliding Window)</h3>
        <ul>
          <li>✅ Both pointers move in the same direction.</li>
          <li>✅ Used in problems like removing duplicates, longest subarray, etc.</li>
        </ul>
      </LearningSection>

      <LearningSection title="3️⃣ Standard Two Pointers Approach">
        <h3>Example: Find if a Pair with a Given Sum Exists in a Sorted Array</h3>
        <CodeBlock
          code={`def has_pair_with_sum(arr, target): 
    left, right = 0, len(arr) - 1 
    while left < right: 
        current_sum = arr[left] + arr[right] 
        if current_sum == target: 
            return True  # Found a pair 
        elif current_sum < target: 
            left += 1  # Move left pointer forward 
        else: 
            right -= 1  # Move right pointer backward 
    return False  # No pair found 
 
arr = [1, 2, 3, 5, 8, 10] 
target = 10 
print(has_pair_with_sum(arr, target))  # Output: True (2 + 8 = 10)`}
        />
        <p>✅ O(n) time complexity instead of O(n²) (Brute Force).</p>
        <p>✅ Works only for sorted arrays.</p>
        <p>❌ Does not work for unsorted arrays (Use Hashing for O(n) solution).</p>
      </LearningSection>

      <LearningSection title="4️⃣ Time & Space Complexity">
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Approach</th>
              <th>Time Complexity</th>
              <th>Space Complexity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Two Pointers (Opposite Direction)</td>
              <td>O(n)</td>
              <td>O(1)</td>
            </tr>
          </tbody>
        </table>
        <p>✅ Works well for problems involving pairs, triplets, subarrays, and subsequences.</p>
        <p>✅ Reduces unnecessary iterations in nested loops.</p>
      </LearningSection>

      <LearningSection title="5️⃣ Key Properties">
        <ul>
          <li>✅ Works on sorted arrays/lists.</li>
          <li>✅ Efficient for subarray and pair problems.</li>
          <li>✅ Reduces complexity from O(n²) to O(n) in many cases.</li>
          <li>✅ Does not require extra space.</li>
        </ul>
      </LearningSection>

      <LearningSection title="6️⃣ Dry Run Example">
        <p><strong>Input:</strong> [1, 2, 3, 5, 8, 10], Target: 10</p>
        <table className="dry-run-table">
          <thead>
            <tr>
              <th>Step</th>
              <th>Left Pointer</th>
              <th>Right Pointer</th>
              <th>Sum</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1st</td>
              <td>1 (Index 0)</td>
              <td>10 (Index 5)</td>
              <td>11</td>
              <td>Move right left</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td>1 (Index 0)</td>
              <td>8 (Index 4)</td>
              <td>9</td>
              <td>Move left right</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td>2 (Index 1)</td>
              <td>8 (Index 4)</td>
              <td>10</td>
              <td>Found pair ✅</td>
            </tr>
          </tbody>
        </table>
        <p>✅ Pair (2, 8) found in O(n) time! 🚀</p>
      </LearningSection>

      <LearningSection title="7️⃣ When to Use the Two Pointers Technique?">
        <ul>
          <li>✅ When the array is sorted and searching for pairs.</li>
          <li>✅ When optimizing for subarrays (sliding window).</li>
          <li>✅ When reducing time complexity in brute force problems.</li>
          <li>❌ Not suitable for unordered problems unless sorting is allowed.</li>
        </ul>
      </LearningSection>
    </div>
  );
};

export default TwoPointers;
