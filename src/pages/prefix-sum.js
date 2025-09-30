import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const PrefixSum = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Prefix Sum</h1>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 A preprocessing technique to compute range sum queries efficiently.</li>
          <li>🔹 Converts O(n) range sum queries into O(1) time after preprocessing.</li>
          <li>🔹 Useful in problems involving cumulative sums, range queries, and subarray sums.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Algorithm Steps">
        <ol>
          <li>🔹 Precompute prefix sums: <code>prefix[i] = prefix[i-1] + arr[i]</code></li>
          <li>🔹 To find the sum of a subarray [L, R]: <code>sum(L, R) = prefix[R] - prefix[L-1]</code></li>
          <li>🔹 Preprocessing Time Complexity: <strong>O(n)</strong></li>
          <li>🔹 Query Answering Time Complexity: <strong>O(1)</strong></li>
          <li>✅ Transforms multiple O(n) queries into O(1) queries.</li>
        </ol>
      </LearningSection>

      <LearningSection title="3️⃣ Standard Prefix Sum Approach">
        <CodeBlock
          code={`def prefix_sum(arr): 
    n = len(arr) 
    prefix = [0] * n 
    prefix[0] = arr[0] 
     
    # Compute prefix sum array 
    for i in range(1, n): 
        prefix[i] = prefix[i - 1] + arr[i] 
     
    return prefix 
 
def range_sum(prefix, L, R): 
    if L == 0: 
        return prefix[R] 
    return prefix[R] - prefix[L - 1] 
 
arr = [3, 2, 7, 1, 8, 4] 
prefix = prefix_sum(arr) 
 
# Example Query: Sum from index 1 to 4 
print(range_sum(prefix, 1, 4))  # Output: 18 (2+7+1+8)`}
        />
        <p>✅ Precomputes prefix sums in O(n), then answers queries in O(1).</p>
        <p>❌ Requires extra O(n) space for prefix sum storage.</p>
      </LearningSection>

      <LearningSection title="4️⃣ Optimized Prefix Sum (In-Place)">
        <CodeBlock
          code={`def inplace_prefix_sum(arr): 
    for i in range(1, len(arr)): 
        arr[i] += arr[i - 1]  # Modify array directly 
    return arr 
 
arr = [3, 2, 7, 1, 8, 4] 
arr = inplace_prefix_sum(arr) 
 
# Query for sum from index 1 to 4 
L, R = 1, 4 
result = arr[R] - (arr[L - 1] if L > 0 else 0) 
print(result)  # Output: 18 (2+7+1+8)`}
        />
        <p>✅ No extra space required (O(1) space complexity).</p>
        <p>❌ Original array gets modified (use only if modifying the input is allowed).</p>
      </LearningSection>

      <LearningSection title="5️⃣ Time & Space Complexity">
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Operation</th>
              <th>Standard Prefix Sum</th>
              <th>Optimized (In-Place)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Preprocessing</td>
              <td>O(n)</td>
              <td>O(n)</td>
            </tr>
            <tr>
              <td>Query Answering</td>
              <td>O(1)</td>
              <td>O(1)</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td>O(n)</td>
              <td>O(1)</td>
            </tr>
          </tbody>
        </table>
        <p>✅ Much faster than naive O(n) query for each range sum.</p>
        <p>✅ Preferred in problems involving multiple range sum queries.</p>
      </LearningSection>

      <LearningSection title="6️⃣ Key Properties">
        <ul>
          <li>✅ Efficient for multiple queries.</li>
          <li>✅ Useful for cumulative frequency and subarray sum problems.</li>
          <li>❌ Not suitable for dynamic updates (Fenwick Tree or Segment Tree is better).</li>
          <li>✅ Can be extended to 2D prefix sum for matrix problems.</li>
        </ul>
      </LearningSection>

      <LearningSection title="7️⃣ Dry Run Example">
        <p><strong>Input Array:</strong> [3, 2, 7, 1, 8, 4]</p>
        <p><strong>Prefix Sum Array:</strong> [3, 5, 12, 13, 21, 25]</p>
        <table className="dry-run-table">
          <thead>
            <tr>
              <th>Query (L, R)</th>
              <th>Formula</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>(1, 4)</td>
              <td>prefix[4] - prefix[0]</td>
              <td>21 - 3 = 18</td>
            </tr>
            <tr>
              <td>(2, 5)</td>
              <td>prefix[5] - prefix[1]</td>
              <td>25 - 5 = 20</td>
            </tr>
          </tbody>
        </table>
        <p>✅ Queries run in O(1) time! 🚀</p>
      </LearningSection>

      <LearningSection title="8️⃣ When to Use Prefix Sum?">
        <ul>
          <li>✅ When multiple range sum queries are required.</li>
          <li>✅ When the array is static (no updates).</li>
          <li>❌ For dynamic updates, use Fenwick Tree or Segment Tree.</li>
        </ul>
      </LearningSection>
    </div>
  );
};

export default PrefixSum;
