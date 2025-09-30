import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";


const TimeSpaceComplexity = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Time and Space Complexity</h1>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 Time Complexity: Measures how execution time increases with input size <code>n</code>.</li>
          <li>🔹 Space Complexity: Measures the amount of memory used as <code>n</code> increases.</li>
          <li>✅ Big-O Notation is used to classify algorithm complexity.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ O(1) - Constant Time Complexity">
        <CodeBlock
          code={`def get_first_element(arr): 
    return arr[0]  # Always executes in O(1) time 
 
arr = [5, 10, 15, 20] 
print(get_first_element(arr))  # Output: 5`}
        />
        <p>✅ Execution time does not depend on input size.</p>
        <p>✅ Best possible time complexity.</p>
      </LearningSection>

      <LearningSection title="3️⃣ O(n) - Linear Time Complexity">
        <CodeBlock
          code={`def print_elements(arr): 
    for item in arr: 
        print(item)  # Runs n times 
 
arr = [5, 10, 15, 20] 
print_elements(arr)`}
        />
        <p>✅ Execution time grows linearly with n.</p>
        <p>✅ Common in loops iterating over arrays.</p>
      </LearningSection>

      <LearningSection title="4️⃣ O(n²) - Quadratic Time Complexity">
        <CodeBlock
          code={`def print_pairs(arr): 
    for i in range(len(arr)): 
        for j in range(len(arr)):  # Nested loop 
            print(arr[i], arr[j]) 
 
arr = [1, 2, 3] 
print_pairs(arr)`}
        />
        <p>❌ Inefficient for large inputs due to nested loops.</p>
        <p>✅ Common in brute-force approaches like Bubble Sort.</p>
      </LearningSection>

      <LearningSection title="5️⃣ O(log n) - Logarithmic Time Complexity">
        <CodeBlock
          code={`def binary_search(arr, target): 
    low, high = 0, len(arr) - 1 
    while low <= high: 
        mid = (low + high) // 2 
        if arr[mid] == target: 
            return mid 
        elif arr[mid] < target: 
            low = mid + 1 
        else: 
            high = mid - 1 
    return -1 
 
arr = [1, 3, 5, 7, 9] 
print(binary_search(arr, 5))  # Output: 2`}
        />
        <p>✅ Halves the problem size at each step.</p>
        <p>✅ Efficient for sorted arrays and divide-and-conquer approaches.</p>
      </LearningSection>

      <LearningSection title="6️⃣ O(n log n) - Linearithmic Time Complexity">
        <CodeBlock
          code={`def merge_sort(arr): 
    if len(arr) <= 1: 
        return arr 
    mid = len(arr) // 2 
    left = merge_sort(arr[:mid]) 
    right = merge_sort(arr[mid:]) 
    return merge(left, right) 
 
def merge(left, right): 
    sorted_arr = [] 
    i, j = 0, 0 
    while i < len(left) and j < len(right): 
        if left[i] < right[j]: 
            sorted_arr.append(left[i]) 
            i += 1 
        else: 
            sorted_arr.append(right[j]) 
            j += 1 
    return sorted_arr + left[i:] + right[j:] 
 
arr = [5, 2, 9, 1, 5, 6] 
print(merge_sort(arr))  # Output: [1, 2, 5, 5, 6, 9]`}
        />
        <p>✅ Used in efficient sorting algorithms like Merge Sort and Quick Sort.</p>
      </LearningSection>

      <LearningSection title="7️⃣ O(2ⁿ) - Exponential Time Complexity">
        <CodeBlock
          code={`def fibonacci(n): 
    if n <= 1: 
        return n 
    return fibonacci(n-1) + fibonacci(n-2) 
 
print(fibonacci(5))  # Output: 5`}
        />
        <p>❌ Very inefficient for large <code>n</code>.</p>
        <p>✅ Seen in problems like recursive Fibonacci and the Traveling Salesman Problem (TSP).</p>
      </LearningSection>

      <LearningSection title="8️⃣ Space Complexity Examples">
        <h3>O(1) - Constant Space Complexity</h3>
        <CodeBlock
          code={`def sum_two_numbers(a, b): 
    return a + b  # Uses only 2 variables (O(1) space)`}
        />
        <p>✅ Uses a fixed amount of memory, regardless of input size.</p>

        <h3>O(n) - Linear Space Complexity</h3>
        <CodeBlock
          code={`def create_list(n): 
    return [i for i in range(n)]  # Stores n elements 
 
arr = create_list(5) 
print(arr)  # Output: [0, 1, 2, 3, 4]`}
        />
        <p>✅ Memory usage grows with <code>n</code>.</p>

        <h3>O(n²) - Quadratic Space Complexity</h3>
        <CodeBlock
          code={`def create_matrix(n): 
    return [[0] * n for _ in range(n)]  # Creates an n x n matrix 
 
matrix = create_matrix(3) 
print(matrix)`}
        />
        <p>✅ Seen in graph adjacency matrices and storing all pairs of data.</p>
      </LearningSection>

      <LearningSection title="9️⃣ Comparison Table">
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Complexity</th>
              <th>Example Algorithm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>O(1)</td>
              <td>Accessing array element, Swapping values</td>
            </tr>
            <tr>
              <td>O(n)</td>
              <td>Iterating through an array, Linear Search</td>
            </tr>
            <tr>
              <td>O(n²)</td>
              <td>Bubble Sort, Nested Loops</td>
            </tr>
            <tr>
              <td>O(log n)</td>
              <td>Binary Search</td>
            </tr>
            <tr>
              <td>O(n log n)</td>
              <td>Merge Sort, Quick Sort</td>
            </tr>
            <tr>
              <td>O(2ⁿ)</td>
              <td>Recursive Fibonacci</td>
            </tr>
          </tbody>
        </table>
      </LearningSection>
    </div>
  );
};

export default TimeSpaceComplexity;
