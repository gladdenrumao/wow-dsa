import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const MergeSort = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Merge Sort</h1>

      <LearningSection title="1️⃣ Overview">
        <p>Merge Sort is a divide-and-conquer sorting algorithm that splits an array into halves, sorts each half, and merges them.</p>
        <p>✅ Stable and efficient sorting algorithm.</p>
        <p>✅ Time Complexity: O(n log n) for all cases.</p>
        <p>✅ Best suited for linked lists and external sorting.</p>
      </LearningSection>

      <LearningSection title="2️⃣ Algorithm Steps">
        <ol>
          <li>Find the middle of the array.</li>
          <li>Recursively sort both halves.</li>
          <li>Merge the sorted halves.</li>
        </ol>
      </LearningSection>

      <LearningSection title="Merge Sort Visualization">
        <p>🔹 The animation below demonstrates how Merge Sort works step by step.</p>
        <div className="gif-container">
            <img src="/mergesort.gif" alt="Merge Sort Visualization" className="gif" />
        </div>
      </LearningSection>

      <LearningSection title="3️⃣ Easy Implementation (Using Slicing)">
        <CodeBlock
          code={`def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left_half = merge_sort(arr[:mid])
    right_half = merge_sort(arr[mid:])
    return merge(left_half, right_half)

def merge(left, right):
    sorted_arr = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            sorted_arr.append(left[i])
            i += 1
        else:
            sorted_arr.append(right[j])
            j += 1
    sorted_arr.extend(left[i:])
    sorted_arr.extend(right[j:])
    return sorted_arr

arr = [12, 11, 13, 5, 6, 7]
print(merge_sort(arr))  # Output: [5, 6, 7, 11, 12, 13]`}
        />
      </LearningSection>

      <LearningSection title="4️⃣ In-Place Sorting Implementation">
        <CodeBlock
          code={`def merge(arr, left, mid, right):
    left_half = arr[left:mid+1]
    right_half = arr[mid+1:right+1]
    i = j = 0
    k = left

    while i < len(left_half) and j < len(right_half):
        if left_half[i] <= right_half[j]:
            arr[k] = left_half[i]
            i += 1
        else:
            arr[k] = right_half[j]
            j += 1
        k += 1

    while i < len(left_half):
        arr[k] = left_half[i]
        i += 1
        k += 1

    while j < len(right_half):
        arr[k] = right_half[j]
        j += 1
        k += 1

def merge_sort(arr, left, right):
    if left < right:
        mid = (left + right) // 2
        merge_sort(arr, left, mid)
        merge_sort(arr, mid+1, right)
        merge(arr, left, mid, right)

arr = [12, 11, 13, 5, 6, 7]
merge_sort(arr, 0, len(arr)-1)
print(arr)  # Output: [5, 6, 7, 11, 12, 13]`}
        />
      </LearningSection>

      <LearningSection title="5️⃣ Time & Space Complexity">

        <table className="dry-run-table">
            <thead>
            <tr>
                <th>Step</th>
                <th>State</th>
                <th>Operation</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>0</td>
                <td><span className="highlight-array">[12, 11, 13, 5, 6, 7]</span></td>
                <td>Divide</td>
            </tr>
            <tr>
                <td>1</td>
                <td><span className="highlight-array">[12, 11, 13] & [5, 6, 7]</span></td>
                <td>Divide</td>
            </tr>
            <tr>
                <td>2</td>
                <td><span className="highlight-array">[12] [11, 13] & [5] [6, 7]</span></td>
                <td>Divide</td>
            </tr>
            <tr>
                <td>3</td>
                <td><span className="highlight-array">[12] [11] [13] & [5] [6] [7]</span></td>
                <td>Merge Start</td>
            </tr>
            <tr>
                <td>4</td>
                <td><span className="highlight-array">[11, 12] [13] & [5, 6] [7]</span></td>
                <td>Merge</td>
            </tr>
            <tr>
                <td>5</td>
                <td><span className="highlight-array">[11, 12, 13] & [5, 6, 7]</span></td>
                <td>Merge</td>
            </tr>
            <tr>
                <td>6</td>
                <td><span className="highlight-array">[5, 6, 7, 11, 12, 13]</span></td>
                <td>Sorted</td>
            </tr>
            </tbody>
        </table>
      </LearningSection>
    </div>
  );
};

export default MergeSort;
