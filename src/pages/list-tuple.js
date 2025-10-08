import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const ListTuple = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">List & Tuple</h1>

      <div style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '0.5rem', border: '2px solid #3b82f6' }}>
        <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#1e40af' }}>📚 Lecture Notes</h2>
        <p style={{ margin: 0 }}>
          <a href="/pspnotes/RU - Lecture 8 PPT.pptx.pdf" download style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: '500' }}>
            📥 Download Lecture 8 PDF
          </a>
        </p>
      </div>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 Lists and Tuples are ordered sequences that store multiple items.</li>
          <li>🔹 <strong>List:</strong> Mutable (can be modified after creation).</li>
          <li>🔹 <strong>Tuple:</strong> Immutable (cannot be modified after creation).</li>
          <li>✅ Both support indexing, slicing, and iteration.</li>
          <li>✅ Lists use square brackets <code>[]</code>, Tuples use parentheses <code>()</code>.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Lists - Basics">
        <p>🧠 Lists are mutable, ordered collections.</p>
        
        <h3>Creating Lists</h3>
        <CodeBlock
          code={`# Empty list
empty = []
print(empty)  # Output: []

# List with elements
numbers = [1, 2, 3, 4, 5]
print(numbers)  # Output: [1, 2, 3, 4, 5]

# Mixed data types
mixed = [1, "hello", 3.14, True]
print(mixed)  # Output: [1, 'hello', 3.14, True]

# Nested list
matrix = [[1, 2], [3, 4], [5, 6]]
print(matrix)  # Output: [[1, 2], [3, 4], [5, 6]]

# Using list() constructor
from_string = list("hello")
print(from_string)  # Output: ['h', 'e', 'l', 'l', 'o']`}
        />
        <p>✅ Lists can contain elements of different types.</p>
      </LearningSection>

      <LearningSection title="3️⃣ List Indexing and Slicing">
        <p>🧠 Access elements using indices (0-based).</p>
        
        <h3>Indexing</h3>
        <CodeBlock
          code={`fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# Positive indexing (from start)
print(fruits[0])   # Output: apple
print(fruits[2])   # Output: cherry

# Negative indexing (from end)
print(fruits[-1])  # Output: elderberry
print(fruits[-2])  # Output: date`}
        />

        <h3>Slicing</h3>
        <CodeBlock
          code={`numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# [start:stop]
print(numbers[2:5])   # Output: [2, 3, 4]

# [start:stop:step]
print(numbers[0:8:2]) # Output: [0, 2, 4, 6]

# From start to index
print(numbers[:3])    # Output: [0, 1, 2]

# From index to end
print(numbers[7:])    # Output: [7, 8, 9]

# Reverse list
print(numbers[::-1])  # Output: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

# Copy list
copy = numbers[:]
print(copy)           # Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`}
        />
        <p>✅ Slicing creates a new list (doesn&apos;t modify original).</p>
      </LearningSection>

      <LearningSection title="4️⃣ Modifying Lists">
        <p>🧠 Lists are mutable - can be changed after creation.</p>
        
        <h3>Changing Elements</h3>
        <CodeBlock
          code={`fruits = ["apple", "banana", "cherry"]

# Change single element
fruits[1] = "blueberry"
print(fruits)  # Output: ['apple', 'blueberry', 'cherry']

# Change multiple elements
fruits[0:2] = ["avocado", "blackberry"]
print(fruits)  # Output: ['avocado', 'blackberry', 'cherry']`}
        />

        <h3>Adding Elements</h3>
        <CodeBlock
          code={`numbers = [1, 2, 3]

# append() - add at end
numbers.append(4)
print(numbers)  # Output: [1, 2, 3, 4]

# insert() - add at specific position
numbers.insert(1, 1.5)
print(numbers)  # Output: [1, 1.5, 2, 3, 4]

# extend() - add multiple elements
numbers.extend([5, 6, 7])
print(numbers)  # Output: [1, 1.5, 2, 3, 4, 5, 6, 7]`}
        />

        <h3>Removing Elements</h3>
        <CodeBlock
          code={`fruits = ["apple", "banana", "cherry", "date"]

# remove() - remove by value
fruits.remove("banana")
print(fruits)  # Output: ['apple', 'cherry', 'date']

# pop() - remove by index (returns removed element)
removed = fruits.pop(1)
print(removed)  # Output: cherry
print(fruits)   # Output: ['apple', 'date']

# pop() without index - removes last element
last = fruits.pop()
print(last)     # Output: date
print(fruits)   # Output: ['apple']

# del - delete by index or slice
numbers = [1, 2, 3, 4, 5]
del numbers[2]
print(numbers)  # Output: [1, 2, 4, 5]

# clear() - remove all elements
numbers.clear()
print(numbers)  # Output: []`}
        />
        <p>✅ <code>append()</code> is fastest for adding single elements.</p>
        <p>✅ <code>remove()</code> removes first occurrence only.</p>
      </LearningSection>

      <LearningSection title="5️⃣ List Methods">
        <CodeBlock
          code={`numbers = [3, 1, 4, 1, 5, 9, 2, 6]

# sort() - sort in place
numbers.sort()
print(numbers)  # Output: [1, 1, 2, 3, 4, 5, 6, 9]

# sort in descending order
numbers.sort(reverse=True)
print(numbers)  # Output: [9, 6, 5, 4, 3, 2, 1, 1]

# reverse() - reverse in place
numbers.reverse()
print(numbers)  # Output: [1, 1, 2, 3, 4, 5, 6, 9]

# count() - count occurrences
print(numbers.count(1))  # Output: 2

# index() - find first index
print(numbers.index(5))  # Output: 5

# copy() - create shallow copy
copy = numbers.copy()
print(copy)  # Output: [1, 1, 2, 3, 4, 5, 6, 9]`}
        />
        
        <h3>List Functions</h3>
        <CodeBlock
          code={`numbers = [3, 1, 4, 1, 5, 9, 2, 6]

# len() - get length
print(len(numbers))  # Output: 8

# max() - get maximum
print(max(numbers))  # Output: 9

# min() - get minimum
print(min(numbers))  # Output: 1

# sum() - get sum
print(sum(numbers))  # Output: 31

# sorted() - return sorted copy (doesn't modify original)
sorted_nums = sorted(numbers)
print(sorted_nums)  # Output: [1, 1, 2, 3, 4, 5, 6, 9]
print(numbers)      # Output: [3, 1, 4, 1, 5, 9, 2, 6] (unchanged)`}
        />
        <p>✅ <code>sort()</code> modifies list, <code>sorted()</code> returns new list.</p>
      </LearningSection>

      <LearningSection title="6️⃣ List Comprehension">
        <p>🧠 Concise way to create lists.</p>
        
        <CodeBlock
          code={`# Basic list comprehension
squares = [x**2 for x in range(6)]
print(squares)  # Output: [0, 1, 4, 9, 16, 25]

# With condition
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # Output: [0, 2, 4, 6, 8]

# Transform strings
words = ["hello", "world", "python"]
upper = [word.upper() for word in words]
print(upper)  # Output: ['HELLO', 'WORLD', 'PYTHON']

# Nested comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]
print(matrix)  # Output: [[0, 0, 0], [0, 1, 2], [0, 2, 4]]

# if-else in comprehension
labels = ["Even" if x % 2 == 0 else "Odd" for x in range(5)]
print(labels)  # Output: ['Even', 'Odd', 'Even', 'Odd', 'Even']`}
        />
        <p>✅ More concise and often faster than traditional loops.</p>
      </LearningSection>

      <LearningSection title="7️⃣ Tuples - Basics">
        <p>🧠 Tuples are immutable, ordered collections.</p>
        
        <h3>Creating Tuples</h3>
        <CodeBlock
          code={`# Empty tuple
empty = ()
print(empty)  # Output: ()

# Single element tuple (comma required!)
single = (5,)
print(single)  # Output: (5,)

# Multiple elements
coordinates = (10, 20)
print(coordinates)  # Output: (10, 20)

# Without parentheses (tuple packing)
point = 3, 4, 5
print(point)  # Output: (3, 4, 5)

# Mixed types
mixed = (1, "hello", 3.14, True)
print(mixed)  # Output: (1, 'hello', 3.14, True)

# Using tuple() constructor
from_list = tuple([1, 2, 3])
print(from_list)  # Output: (1, 2, 3)`}
        />
        <p>✅ Single element tuple must have comma: <code>(5,)</code> not <code>(5)</code>.</p>
      </LearningSection>

      <LearningSection title="8️⃣ Tuple Operations">
        <p>🧠 Tuples support indexing, slicing, and iteration like lists.</p>
        
        <CodeBlock
          code={`colors = ("red", "green", "blue", "yellow", "purple")

# Indexing
print(colors[0])   # Output: red
print(colors[-1])  # Output: purple

# Slicing
print(colors[1:3]) # Output: ('green', 'blue')

# Iteration
for color in colors:
    print(color)
# Output: red
#         green
#         blue
#         yellow
#         purple

# Tuple methods
print(colors.count("red"))  # Output: 1
print(colors.index("blue")) # Output: 2

# Tuple functions
print(len(colors))  # Output: 5

numbers = (3, 1, 4, 1, 5)
print(max(numbers))  # Output: 5
print(min(numbers))  # Output: 1
print(sum(numbers))  # Output: 14`}
        />
        <p>✅ Tuples are faster than lists for read-only operations.</p>
      </LearningSection>

      <LearningSection title="9️⃣ Tuple Immutability">
        <p>🧠 Tuples cannot be modified after creation.</p>
        
        <CodeBlock
          code={`coordinates = (10, 20, 30)

# ❌ Cannot modify
# coordinates[0] = 15  # TypeError: 'tuple' object does not support item assignment

# ❌ Cannot add
# coordinates.append(40)  # AttributeError: 'tuple' object has no attribute 'append'

# ✅ Can create new tuple
new_coords = coordinates + (40, 50)
print(new_coords)  # Output: (10, 20, 30, 40, 50)

# ✅ Can reassign variable
coordinates = (15, 25, 35)
print(coordinates)  # Output: (15, 25, 35)`}
        />

        <h3>Tuple with Mutable Elements</h3>
        <CodeBlock
          code={`# Tuple containing a list
data = (1, 2, [3, 4])

# ❌ Cannot change tuple elements
# data[0] = 10  # TypeError

# ✅ Can modify mutable elements inside tuple
data[2].append(5)
print(data)  # Output: (1, 2, [3, 4, 5])`}
        />
        <p>✅ Tuple itself is immutable, but it can contain mutable objects.</p>
      </LearningSection>

      <LearningSection title="🔟 List vs Tuple">
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>List</th>
              <th>Tuple</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mutability</td>
              <td>Mutable (can change)</td>
              <td>Immutable (cannot change)</td>
            </tr>
            <tr>
              <td>Syntax</td>
              <td>[1, 2, 3]</td>
              <td>(1, 2, 3)</td>
            </tr>
            <tr>
              <td>Performance</td>
              <td>Slower</td>
              <td>Faster</td>
            </tr>
            <tr>
              <td>Methods</td>
              <td>Many (append, remove, etc.)</td>
              <td>Few (count, index)</td>
            </tr>
            <tr>
              <td>Use Case</td>
              <td>Dynamic collections</td>
              <td>Fixed collections, dict keys</td>
            </tr>
            <tr>
              <td>Memory</td>
              <td>More</td>
              <td>Less</td>
            </tr>
          </tbody>
        </table>
        <p>✅ Use lists when you need to modify data.</p>
        <p>✅ Use tuples for fixed data and better performance.</p>
      </LearningSection>

      <LearningSection title="1️⃣1️⃣ Tuple Unpacking">
        <p>🧠 Assign tuple elements to multiple variables.</p>
        
        <CodeBlock
          code={`# Basic unpacking
point = (10, 20, 30)
x, y, z = point
print(f"x={x}, y={y}, z={z}")  # Output: x=10, y=20, z=30

# Swap variables
a, b = 5, 10
print(f"Before: a={a}, b={b}")
a, b = b, a
print(f"After: a={a}, b={b}")
# Output: Before: a=5, b=10
#         After: a=10, b=5

# Unpacking with *
first, *middle, last = [1, 2, 3, 4, 5]
print(first)   # Output: 1
print(middle)  # Output: [2, 3, 4]
print(last)    # Output: 5

# Function returning tuple
def get_stats():
    return 10, 20, 15  # Returns tuple
    
min_val, max_val, avg = get_stats()
print(f"Min: {min_val}, Max: {max_val}, Avg: {avg}")
# Output: Min: 10, Max: 20, Avg: 15`}
        />
        <p>✅ Unpacking makes code cleaner and more readable.</p>
      </LearningSection>

      <LearningSection title="1️⃣2️⃣ Best Practices">
        <ul>
          <li>✅ Use lists for collections that need to be modified.</li>
          <li>✅ Use tuples for fixed data (coordinates, RGB colors, etc.).</li>
          <li>✅ Use list comprehension for concise list creation.</li>
          <li>✅ Use tuple unpacking for multiple return values.</li>
          <li>✅ Tuples can be used as dictionary keys (lists cannot).</li>
          <li>❌ Don&apos;t modify lists while iterating over them.</li>
          <li>❌ Don&apos;t forget comma for single-element tuples.</li>
        </ul>
      </LearningSection>

      <LearningSection title="1️⃣3️⃣ Practice Examples">
        <h3>Example 1: Remove Duplicates</h3>
        <CodeBlock
          code={`# Remove duplicates from list
numbers = [1, 2, 2, 3, 4, 4, 5]

# Method 1: Using set
unique = list(set(numbers))
print(unique)  # Output: [1, 2, 3, 4, 5]

# Method 2: Preserving order
unique = []
for num in numbers:
    if num not in unique:
        unique.append(num)
print(unique)  # Output: [1, 2, 3, 4, 5]`}
        />

        <h3>Example 2: Matrix Operations</h3>
        <CodeBlock
          code={`# Transpose a matrix
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Method 1: Using zip
transposed = [list(row) for row in zip(*matrix)]
print(transposed)
# Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

# Method 2: Traditional way
rows = len(matrix)
cols = len(matrix[0])
transposed = [[matrix[j][i] for j in range(rows)] for i in range(cols)]
print(transposed)
# Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]`}
        />

        <h3>Example 3: Merge Sorted Lists</h3>
        <CodeBlock
          code={`def merge_sorted_lists(list1, list2):
    merged = []
    i, j = 0, 0
    
    while i < len(list1) and j < len(list2):
        if list1[i] <= list2[j]:
            merged.append(list1[i])
            i += 1
        else:
            merged.append(list2[j])
            j += 1
    
    # Add remaining elements
    merged.extend(list1[i:])
    merged.extend(list2[j:])
    
    return merged

# Test
list1 = [1, 3, 5, 7]
list2 = [2, 4, 6, 8]
result = merge_sorted_lists(list1, list2)
print(result)  # Output: [1, 2, 3, 4, 5, 6, 7, 8]`}
        />

        <h3>Example 4: Tuple as Dictionary Key</h3>
        <CodeBlock
          code={`# Store coordinates with values
locations = {}

# Add locations
locations[(0, 0)] = "Origin"
locations[(1, 2)] = "Point A"
locations[(3, 4)] = "Point B"

# Access by coordinate
print(locations[(0, 0)])  # Output: Origin

# Iterate
for coord, name in locations.items():
    print(f"{coord}: {name}")
# Output: (0, 0): Origin
#         (1, 2): Point A
#         (3, 4): Point B`}
        />
      </LearningSection>
    </div>
  );
};

export default ListTuple;
