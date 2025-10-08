import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const ForLoop = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">For Loop</h1>

      <div style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '0.5rem', border: '2px solid #3b82f6' }}>
        <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#1e40af' }}>📚 Lecture Notes</h2>
        <p style={{ margin: 0 }}>
          <a href="/pspnotes/RU - Lecture 6 PPT.pdf" download style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: '500' }}>
            📥 Download Lecture 6 PDF
          </a>
        </p>
      </div>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 For loops iterate over sequences (lists, strings, ranges, etc.).</li>
          <li>🔹 Execute a block of code for each element in the sequence.</li>
          <li>✅ Most common loop in Python for known iterations.</li>
          <li>✅ Cleaner and more Pythonic than traditional counter-based loops.</li>
          <li>✅ Works with any iterable object.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Basic For Loop">
        <p>🧠 Iterate over elements in a sequence.</p>
        
        <h3>Iterating Over a List</h3>
        <CodeBlock
          code={`# List of numbers
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(num)

# Output: 1
#         2
#         3
#         4
#         5`}
        />

        <h3>Iterating Over a String</h3>
        <CodeBlock
          code={`# String iteration
text = "Hello"
for char in text:
    print(char)

# Output: H
#         e
#         l
#         l
#         o`}
        />
        <p>✅ For loop automatically gets each element from the sequence.</p>
      </LearningSection>

      <LearningSection title="3️⃣ range() Function">
        <p>🧠 Generate sequences of numbers for iteration.</p>
        
        <h3>range(stop)</h3>
        <CodeBlock
          code={`# range(5) generates: 0, 1, 2, 3, 4
for i in range(5):
    print(i)

# Output: 0
#         1
#         2
#         3
#         4`}
        />

        <h3>range(start, stop)</h3>
        <CodeBlock
          code={`# range(1, 6) generates: 1, 2, 3, 4, 5
for i in range(1, 6):
    print(i)

# Output: 1
#         2
#         3
#         4
#         5`}
        />

        <h3>range(start, stop, step)</h3>
        <CodeBlock
          code={`# Even numbers from 0 to 10
for i in range(0, 11, 2):
    print(i)

# Output: 0
#         2
#         4
#         6
#         8
#         10`}
        />

        <h3>Reverse Range</h3>
        <CodeBlock
          code={`# Count down from 5 to 1
for i in range(5, 0, -1):
    print(i)

# Output: 5
#         4
#         3
#         2
#         1`}
        />
        <p>✅ <code>range()</code> is memory efficient - generates numbers on demand.</p>
        <p>✅ Stop value is exclusive (not included).</p>
      </LearningSection>

      <LearningSection title="4️⃣ enumerate() Function">
        <p>🧠 Get both index and value while iterating.</p>
        
        <CodeBlock
          code={`fruits = ["apple", "banana", "cherry"]

# With enumerate
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Output: 0: apple
#         1: banana
#         2: cherry`}
        />

        <h3>Custom Starting Index</h3>
        <CodeBlock
          code={`# Start counting from 1
for index, fruit in enumerate(fruits, start=1):
    print(f"{index}. {fruit}")

# Output: 1. apple
#         2. banana
#         3. cherry`}
        />
        <p>✅ More Pythonic than using <code>range(len(list))</code>.</p>
      </LearningSection>

      <LearningSection title="5️⃣ Nested For Loops">
        <p>🧠 Loop inside another loop for multi-dimensional data.</p>
        
        <h3>Simple Pattern</h3>
        <CodeBlock
          code={`# Print a pattern
for i in range(3):
    for j in range(3):
        print(f"({i}, {j})", end=" ")
    print()  # New line after inner loop

# Output: (0, 0) (0, 1) (0, 2) 
#         (1, 0) (1, 1) (1, 2) 
#         (2, 0) (2, 1) (2, 2)`}
        />

        <h3>Multiplication Table</h3>
        <CodeBlock
          code={`# 5x5 multiplication table
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i*j:3}", end=" ")
    print()

# Output:   1   2   3   4   5 
#           2   4   6   8  10 
#           3   6   9  12  15 
#           4   8  12  16  20 
#           5  10  15  20  25`}
        />

        <h3>2D List Iteration</h3>
        <CodeBlock
          code={`matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in matrix:
    for element in row:
        print(element, end=" ")
    print()

# Output: 1 2 3 
#         4 5 6 
#         7 8 9`}
        />
        <p>✅ Inner loop completes fully for each iteration of outer loop.</p>
      </LearningSection>

      <LearningSection title="6️⃣ Loop Control Statements">
        <h3>break - Exit Loop Early</h3>
        <CodeBlock
          code={`# Find first even number
numbers = [1, 3, 5, 8, 9, 10]
for num in numbers:
    if num % 2 == 0:
        print(f"First even number: {num}")
        break

# Output: First even number: 8`}
        />

        <h3>continue - Skip Current Iteration</h3>
        <CodeBlock
          code={`# Print only odd numbers
for i in range(10):
    if i % 2 == 0:
        continue  # Skip even numbers
    print(i)

# Output: 1
#         3
#         5
#         7
#         9`}
        />

        <h3>else with For Loop</h3>
        <CodeBlock
          code={`# Search for a number
numbers = [1, 2, 3, 4, 5]
search = 6

for num in numbers:
    if num == search:
        print(f"Found {search}")
        break
else:
    # Executes if loop completes without break
    print(f"{search} not found")

# Output: 6 not found`}
        />
        <p>✅ <code>break</code> exits the loop immediately.</p>
        <p>✅ <code>continue</code> skips to next iteration.</p>
        <p>✅ <code>else</code> runs if loop completes without <code>break</code>.</p>
      </LearningSection>

      <LearningSection title="7️⃣ Iterating Over Different Data Structures">
        <h3>Dictionary Iteration</h3>
        <CodeBlock
          code={`student = {"name": "Alice", "age": 25, "grade": "A"}

# Iterate over keys
for key in student:
    print(key)

# Iterate over values
for value in student.values():
    print(value)

# Iterate over key-value pairs
for key, value in student.items():
    print(f"{key}: {value}")

# Output (items): name: Alice
#                 age: 25
#                 grade: A`}
        />

        <h3>Set Iteration</h3>
        <CodeBlock
          code={`numbers = {1, 2, 3, 4, 5}
for num in numbers:
    print(num)

# Output: 1
#         2
#         3
#         4
#         5`}
        />

        <h3>Tuple Iteration</h3>
        <CodeBlock
          code={`coordinates = (10, 20, 30)
for coord in coordinates:
    print(coord)

# Output: 10
#         20
#         30`}
        />
      </LearningSection>

      <LearningSection title="8️⃣ List Comprehension">
        <p>🧠 Concise way to create lists using for loops.</p>
        
        <CodeBlock
          code={`# Traditional way
squares = []
for i in range(5):
    squares.append(i ** 2)
print(squares)  # Output: [0, 1, 4, 9, 16]

# List comprehension (Pythonic)
squares = [i ** 2 for i in range(5)]
print(squares)  # Output: [0, 1, 4, 9, 16]`}
        />

        <h3>With Condition</h3>
        <CodeBlock
          code={`# Even numbers only
evens = [i for i in range(10) if i % 2 == 0]
print(evens)  # Output: [0, 2, 4, 6, 8]

# Squared odd numbers
odd_squares = [i ** 2 for i in range(10) if i % 2 != 0]
print(odd_squares)  # Output: [1, 9, 25, 49, 81]`}
        />

        <h3>Nested List Comprehension</h3>
        <CodeBlock
          code={`# Flatten a 2D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
print(flattened)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]`}
        />
        <p>✅ More concise and often faster than traditional loops.</p>
        <p>❌ Don't overuse - keep it simple and readable.</p>
      </LearningSection>

      <LearningSection title="9️⃣ zip() Function">
        <p>🧠 Iterate over multiple sequences simultaneously.</p>
        
        <CodeBlock
          code={`names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
cities = ["New York", "London", "Paris"]

for name, age, city in zip(names, ages, cities):
    print(f"{name}, {age}, {city}")

# Output: Alice, 25, New York
#         Bob, 30, London
#         Charlie, 35, Paris`}
        />

        <h3>Creating Dictionary from Lists</h3>
        <CodeBlock
          code={`keys = ["name", "age", "city"]
values = ["Alice", 25, "New York"]

person = dict(zip(keys, values))
print(person)
# Output: {'name': 'Alice', 'age': 25, 'city': 'New York'}`}
        />
        <p>✅ <code>zip()</code> stops when shortest sequence ends.</p>
      </LearningSection>

      <LearningSection title="🔟 Best Practices">
        <ul>
          <li>✅ Use for loops for known iterations, while loops for unknown.</li>
          <li>✅ Use <code>enumerate()</code> when you need both index and value.</li>
          <li>✅ Use <code>zip()</code> to iterate over multiple sequences.</li>
          <li>✅ Use list comprehension for simple transformations.</li>
          <li>✅ Use descriptive variable names in loops.</li>
          <li>✅ Use <code>range()</code> instead of manually managing counters.</li>
          <li>❌ Don't modify list while iterating over it.</li>
          <li>❌ Don't use <code>range(len(list))</code> when you can iterate directly.</li>
        </ul>
      </LearningSection>

      <LearningSection title="1️⃣1️⃣ Practice Examples">
        <h3>Example 1: Sum of List Elements</h3>
        <CodeBlock
          code={`numbers = [10, 20, 30, 40, 50]
total = 0

for num in numbers:
    total += num

print(f"Sum: {total}")  # Output: Sum: 150

# Using built-in sum() (more Pythonic)
total = sum(numbers)
print(f"Sum: {total}")  # Output: Sum: 150`}
        />

        <h3>Example 2: Factorial Calculator</h3>
        <CodeBlock
          code={`n = 5
factorial = 1

for i in range(1, n + 1):
    factorial *= i

print(f"{n}! = {factorial}")  # Output: 5! = 120`}
        />

        <h3>Example 3: Pattern Printing</h3>
        <CodeBlock
          code={`# Print a triangle pattern
n = 5
for i in range(1, n + 1):
    print("* " * i)

# Output: * 
#         * * 
#         * * * 
#         * * * * 
#         * * * * *`}
        />

        <h3>Example 4: Finding Prime Numbers</h3>
        <CodeBlock
          code={`# Find all prime numbers up to n
n = 20
primes = []

for num in range(2, n + 1):
    is_prime = True
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            is_prime = False
            break
    if is_prime:
        primes.append(num)

print(f"Primes up to {n}: {primes}")
# Output: Primes up to 20: [2, 3, 5, 7, 11, 13, 17, 19]`}
        />

        <h3>Example 5: Fibonacci Series</h3>
        <CodeBlock
          code={`# Generate first n Fibonacci numbers
n = 10
fib = [0, 1]

for i in range(2, n):
    next_fib = fib[i-1] + fib[i-2]
    fib.append(next_fib)

print(f"First {n} Fibonacci numbers: {fib}")
# Output: First 10 Fibonacci numbers: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`}
        />

        <h3>Example 6: Character Frequency Counter</h3>
        <CodeBlock
          code={`text = "hello world"
frequency = {}

for char in text:
    if char != ' ':  # Skip spaces
        frequency[char] = frequency.get(char, 0) + 1

for char, count in sorted(frequency.items()):
    print(f"{char}: {count}")

# Output: d: 1
#         e: 1
#         h: 1
#         l: 3
#         o: 2
#         r: 1
#         w: 1`}
        />
      </LearningSection>
    </div>
  );
};

export default ForLoop;
