import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const InputOutput = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Input and Output</h1>

      <div style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '0.5rem', border: '2px solid #3b82f6' }}>
        <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#1e40af' }}>📚 Lecture Notes</h2>
        <p style={{ margin: 0 }}>
          <a href="/pspnotes/RU - Lecture 2 PPT.pptx.pdf" download style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: '500' }}>
            📥 Download Lecture 2 PDF
          </a>
        </p>
      </div>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 Input/Output (I/O) is the foundation of interactive programs.</li>
          <li>🔹 <strong>Input:</strong> Taking data from the user via keyboard or files.</li>
          <li>🔹 <strong>Output:</strong> Displaying results to the console or writing to files.</li>
          <li>✅ Python uses <code>input()</code> for taking user input and <code>print()</code> for displaying output.</li>
          <li>✅ All input from <code>input()</code> is received as a string by default.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Basic Output - print() Function">
        <p>🧠 The <code>print()</code> function displays output to the console.</p>
        
        <h3>Simple Print</h3>
        <CodeBlock
          code={`print("Hello, World!")  # Output: Hello, World!
print(42)  # Output: 42
print(3.14159)  # Output: 3.14159`}
        />

        <h3>Multiple Values</h3>
        <CodeBlock
          code={`name = "Alice"
age = 25
print("Name:", name, "Age:", age)  # Output: Name: Alice Age: 25`}
        />

        <h3>Custom Separator and End</h3>
        <CodeBlock
          code={`print("apple", "banana", "cherry", sep=", ")  
# Output: apple, banana, cherry

print("Hello", end=" ")
print("World!")
# Output: Hello World!`}
        />
        <p>✅ <code>sep</code> changes the separator between values (default is space).</p>
        <p>✅ <code>end</code> changes what&apos;s printed at the end (default is newline).</p>
      </LearningSection>

      <LearningSection title="3️⃣ Basic Input - input() Function">
        <p>🧠 The <code>input()</code> function reads a line from the user as a <strong>string</strong>.</p>
        
        <h3>Simple Input</h3>
        <CodeBlock
          code={`name = input("Enter your name: ")
print("Hello,", name)

# User enters: John
# Output: Hello, John`}
        />

        <h3>Input Without Prompt</h3>
        <CodeBlock
          code={`data = input()  # Waits for user input
print("You entered:", data)`}
        />
        <p>✅ Always returns a string, even if the user enters numbers.</p>
      </LearningSection>

      <LearningSection title="4️⃣ Reading Different Data Types">
        <p>🧠 Convert input strings to required data types using type casting.</p>
        
        <h3>Reading an Integer</h3>
        <CodeBlock
          code={`age = int(input("Enter your age: "))
print("Next year you will be", age + 1)

# User enters: 25
# Output: Next year you will be 26`}
        />

        <h3>Reading a Float</h3>
        <CodeBlock
          code={`price = float(input("Enter price: "))
tax = price * 0.1
print("Price with tax:", price + tax)

# User enters: 100.50
# Output: Price with tax: 110.55`}
        />

        <h3>Reading Multiple Values in One Line</h3>
        <CodeBlock
          code={`# Method 1: Using split()
x, y = input("Enter two numbers: ").split()
x, y = int(x), int(y)
print("Sum:", x + y)

# Method 2: Using map() for conversion
a, b = map(int, input("Enter two numbers: ").split())
print("Product:", a * b)

# User enters: 5 10
# Output: Sum: 15
# Output: Product: 50`}
        />
        <p>✅ <code>split()</code> breaks input by spaces (default separator).</p>
        <p>✅ <code>map()</code> applies a function to all elements efficiently.</p>
      </LearningSection>

      <LearningSection title="5️⃣ Handling Multiple Inputs">
        <h3>Reading a List of Integers</h3>
        <CodeBlock
          code={`# Read a list of integers
numbers = list(map(int, input("Enter numbers: ").split()))
print("You entered:", numbers)
print("Sum:", sum(numbers))

# User enters: 1 2 3 4 5
# Output: You entered: [1, 2, 3, 4, 5]
# Output: Sum: 15`}
        />

        <h3>Reading Multiple Lines</h3>
        <CodeBlock
          code={`n = int(input("How many lines? "))
lines = []
for i in range(n):
    line = input()
    lines.append(line)

print("You entered:", lines)

# User enters:
# 3
# Apple
# Banana
# Cherry
# Output: You entered: ['Apple', 'Banana', 'Cherry']`}
        />

        <h3>Reading with Custom Separator</h3>
        <CodeBlock
          code={`# Reading comma-separated values
data = input("Enter items (comma-separated): ").split(',')
data = [item.strip() for item in data]  # Remove extra spaces
print("Items:", data)

# User enters: apple, banana, cherry
# Output: Items: ['apple', 'banana', 'cherry']`}
        />
      </LearningSection>

      <LearningSection title="6️⃣ Formatted Output">
        <p>🧠 Python provides multiple ways to format output strings.</p>
        
        <h3>Using f-strings (Recommended - Python 3.6+)</h3>
        <CodeBlock
          code={`name = "Alice"
age = 25
score = 95.678

print(f"Name: {name}, Age: {age}, Score: {score:.2f}")
# Output: Name: Alice, Age: 25, Score: 95.68`}
        />
        <p>✅ <code>:.2f</code> formats float to 2 decimal places.</p>

        <h3>Using format() Method</h3>
        <CodeBlock
          code={`print("Name: {}, Age: {}, Score: {:.2f}".format(name, age, score))
# Output: Name: Alice, Age: 25, Score: 95.68

# Named placeholders
print("Name: {n}, Age: {a}".format(n=name, a=age))
# Output: Name: Alice, Age: 25`}
        />

        <h3>Using % Formatting (Old Style)</h3>
        <CodeBlock
          code={`print("Name: %s, Age: %d, Score: %.2f" % (name, age, score))
# Output: Name: Alice, Age: 25, Score: 95.68`}
        />
        <p>✅ f-strings are the most readable and recommended approach.</p>
      </LearningSection>

      <LearningSection title="7️⃣ File Input/Output">
        <p>🧠 Read from and write to files for persistent data storage.</p>
        
        <h3>Writing to a File</h3>
        <CodeBlock
          code={`# Writing to a file
with open("output.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("This is line 2\\n")

# File modes:
# 'w' - Write (overwrites existing content)
# 'a' - Append (adds to existing content)
# 'r' - Read (default mode)`}
        />

        <h3>Reading from a File</h3>
        <CodeBlock
          code={`# Reading entire file
with open("input.txt", "r") as file:
    content = file.read()
    print(content)

# Reading line by line
with open("input.txt", "r") as file:
    for line in file:
        print(line.strip())  # strip() removes newline

# Reading all lines as a list
with open("input.txt", "r") as file:
    lines = file.readlines()
    print(lines)`}
        />

        <h3>Reading Numbers from a File</h3>
        <CodeBlock
          code={`with open("numbers.txt", "r") as file:
    numbers = [int(line.strip()) for line in file]
    print("Numbers:", numbers)
    print("Sum:", sum(numbers))`}
        />
        <p>✅ <code>with</code> statement automatically closes the file after use.</p>
        <p>✅ Always use <code>with</code> to avoid file handle leaks.</p>
      </LearningSection>

      <LearningSection title="8️⃣ Common Input Patterns">
        <h3>Pattern 1: Fixed Number of Test Cases</h3>
        <CodeBlock
          code={`t = int(input())  # Number of test cases
for _ in range(t):
    n = int(input())
    # Process each test case
    print(f"Processing case with n = {n}")`}
        />

        <h3>Pattern 2: Array Input</h3>
        <CodeBlock
          code={`n = int(input())  # Size of array
arr = list(map(int, input().split()))
print("Array:", arr)
print("Maximum:", max(arr))
print("Minimum:", min(arr))`}
        />

        <h3>Pattern 3: Matrix Input</h3>
        <CodeBlock
          code={`rows, cols = map(int, input().split())
matrix = []
for i in range(rows):
    row = list(map(int, input().split()))
    matrix.append(row)

print("Matrix:")
for row in matrix:
    print(row)

# Example input:
# 3 3
# 1 2 3
# 4 5 6
# 7 8 9`}
        />

        <h3>Pattern 4: Read Until EOF (Competitive Programming)</h3>
        <CodeBlock
          code={`try:
    while True:
        line = input()
        # Process line
        print(f"Processed: {line}")
except EOFError:
    pass  # End of input reached`}
        />
      </LearningSection>

      <LearningSection title="9️⃣ Error Handling">
        <p>🧠 Handle invalid inputs gracefully to prevent program crashes.</p>
        
        <CodeBlock
          code={`# Safe integer input
try:
    age = int(input("Enter your age: "))
    print(f"Age: {age}")
except ValueError:
    print("Invalid input! Please enter a number.")

# Multiple attempts
while True:
    try:
        num = int(input("Enter a number: "))
        print(f"You entered: {num}")
        break  # Exit loop on valid input
    except ValueError:
        print("Invalid input! Try again.")`}
        />
        <p>✅ Use <code>try-except</code> to catch and handle input errors.</p>
        <p>✅ <code>ValueError</code> is raised when type conversion fails.</p>
      </LearningSection>

      <LearningSection title="🔟 Comparison Table">
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Use Case</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>input()</code></td>
              <td>Read string from user</td>
              <td>name = input()</td>
            </tr>
            <tr>
              <td><code>int(input())</code></td>
              <td>Read integer from user</td>
              <td>age = int(input())</td>
            </tr>
            <tr>
              <td><code>map(int, ...split())</code></td>
              <td>Read multiple integers</td>
              <td>a, b = map(int, input().split())</td>
            </tr>
            <tr>
              <td><code>print()</code></td>
              <td>Display output</td>
              <td>print(&quot;Hello&quot;)</td>
            </tr>
            <tr>
              <td><code>print(f&quot;...&quot;)</code></td>
              <td>Formatted output</td>
              <td>print(f&quot;Age: {'{age}'}&quot;)</td>
            </tr>
            <tr>
              <td><code>file.read()</code></td>
              <td>Read entire file</td>
              <td>content = file.read()</td>
            </tr>
            <tr>
              <td><code>file.readlines()</code></td>
              <td>Read all lines as list</td>
              <td>lines = file.readlines()</td>
            </tr>
          </tbody>
        </table>
      </LearningSection>

      <LearningSection title="1️⃣1️⃣ Best Practices">
        <ul>
          <li>✅ Always validate user input before processing.</li>
          <li>✅ Use meaningful prompts in <code>input()</code> for better user experience.</li>
          <li>✅ Prefer f-strings for formatted output (cleaner and faster).</li>
          <li>✅ Use <code>with</code> statement when working with files.</li>
          <li>✅ Handle exceptions to prevent crashes from invalid input.</li>
          <li>✅ Use <code>strip()</code> to remove unwanted whitespace from input.</li>
          <li>✅ Use <code>split()</code> to break input into multiple values.</li>
          <li>✅ Convert data types immediately after input for clarity.</li>
          <li>❌ Avoid using <code>eval()</code> on user input (security risk).</li>
          <li>❌ Don&apos;t assume input is always valid - always validate!</li>
        </ul>
      </LearningSection>

      <LearningSection title="1️⃣2️⃣ Practice Examples">
        <h3>Example 1: Calculator</h3>
        <CodeBlock
          code={`num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
operation = input("Enter operation (+, -, *, /): ")

if operation == '+':
    result = num1 + num2
elif operation == '-':
    result = num1 - num2
elif operation == '*':
    result = num1 * num2
elif operation == '/':
    if num2 != 0:
        result = num1 / num2
    else:
        result = "Error: Division by zero"
else:
    result = "Invalid operation"

print(f"Result: {result}")`}
        />

        <h3>Example 2: Sum of Array Elements</h3>
        <CodeBlock
          code={`n = int(input("Enter array size: "))
arr = list(map(int, input("Enter elements: ").split()))

total = sum(arr)
average = total / n

print(f"Sum: {total}")
print(f"Average: {average:.2f}")

# Input:
# 5
# 10 20 30 40 50
# Output:
# Sum: 150
# Average: 30.00`}
        />

        <h3>Example 3: Grade Calculator</h3>
        <CodeBlock
          code={`name = input("Enter student name: ")
marks = list(map(int, input("Enter marks (space-separated): ").split()))

total = sum(marks)
average = total / len(marks)

if average >= 90:
    grade = 'A+'
elif average >= 80:
    grade = 'A'
elif average >= 70:
    grade = 'B'
elif average >= 60:
    grade = 'C'
else:
    grade = 'F'

print(f"\\nStudent: {name}")
print(f"Total Marks: {total}")
print(f"Average: {average:.2f}")
print(f"Grade: {grade}")`}
        />
      </LearningSection>
    </div>
  );
};

export default InputOutput;
