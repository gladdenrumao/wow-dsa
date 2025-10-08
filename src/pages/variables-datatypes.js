import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const VariablesDatatypes = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Variables and Datatypes</h1>

      <div style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '0.5rem', border: '2px solid #3b82f6' }}>
        <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#1e40af' }}>📚 Lecture Notes</h2>
        <p style={{ margin: 0 }}>
          <a href="/pspnotes/RU - Lecture 1 PPT.pdf" download style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: '500' }}>
            📥 Download Lecture 1 PDF
          </a>
        </p>
      </div>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 Variables are containers for storing data values.</li>
          <li>🔹 Python is dynamically typed - no need to declare variable type explicitly.</li>
          <li>🔹 Variable names are case-sensitive (<code>age</code> ≠ <code>Age</code>).</li>
          <li>✅ Python has multiple built-in data types for different kinds of data.</li>
          <li>✅ Use meaningful variable names for better code readability.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Variable Declaration and Assignment">
        <p>🧠 Variables are created when you assign a value to them.</p>
        
        <h3>Basic Assignment</h3>
        <CodeBlock
          code={`# Integer variable
age = 25
print(age)  # Output: 25

# String variable
name = "Alice"
print(name)  # Output: Alice

# Float variable
price = 99.99
print(price)  # Output: 99.99`}
        />

        <h3>Multiple Assignment</h3>
        <CodeBlock
          code={`# Assign same value to multiple variables
x = y = z = 10
print(x, y, z)  # Output: 10 10 10

# Assign different values to multiple variables
a, b, c = 1, 2, 3
print(a, b, c)  # Output: 1 2 3`}
        />

        <h3>Variable Reassignment</h3>
        <CodeBlock
          code={`x = 5
print(x)  # Output: 5

x = 10  # Reassign new value
print(x)  # Output: 10

x = "Hello"  # Change type (dynamic typing)
print(x)  # Output: Hello`}
        />
        <p>✅ Python allows changing variable type dynamically.</p>
      </LearningSection>

      <LearningSection title="3️⃣ Variable Naming Rules">
        <ul>
          <li>✅ Must start with a letter (a-z, A-Z) or underscore (_).</li>
          <li>✅ Can contain letters, numbers, and underscores.</li>
          <li>✅ Cannot start with a number.</li>
          <li>❌ Cannot use Python keywords (if, for, while, etc.).</li>
          <li>❌ Cannot contain spaces or special characters (@, !, $, etc.).</li>
        </ul>

        <h3>Valid vs Invalid Names</h3>
        <CodeBlock
          code={`# Valid names
my_variable = 10
_private = 20
variable123 = 30
myVariable = 40  # CamelCase
MY_CONSTANT = 50  # UPPERCASE for constants

# Invalid names (will cause errors)
# 2variable = 10  # Cannot start with number
# my-variable = 20  # Hyphen not allowed
# my variable = 30  # Space not allowed
# for = 40  # Reserved keyword`}
        />
        <p>✅ Use snake_case for variable names (Python convention).</p>
      </LearningSection>

      <LearningSection title="4️⃣ Basic Data Types">
        <h3>1. Integer (int)</h3>
        <CodeBlock
          code={`# Whole numbers (positive or negative)
age = 25
temperature = -5
big_number = 1000000

print(type(age))  # Output: <class 'int'>
print(age + 10)  # Output: 35`}
        />

        <h3>2. Float (float)</h3>
        <CodeBlock
          code={`# Decimal numbers
price = 19.99
pi = 3.14159
scientific = 1.5e3  # 1.5 * 10^3 = 1500.0

print(type(price))  # Output: <class 'float'>
print(price * 2)  # Output: 39.98`}
        />

        <h3>3. String (str)</h3>
        <CodeBlock
          code={`# Text data enclosed in quotes
name = "Alice"
message = 'Hello, World!'
multiline = """This is a
multi-line
string"""

print(type(name))  # Output: <class 'str'>
print(name + " Smith")  # Output: Alice Smith`}
        />

        <h3>4. Boolean (bool)</h3>
        <CodeBlock
          code={`# True or False values
is_active = True
is_logged_in = False

print(type(is_active))  # Output: <class 'bool'>
print(5 > 3)  # Output: True
print(10 == 5)  # Output: False`}
        />
        <p>✅ Booleans are used for conditional logic and decision making.</p>
      </LearningSection>

      <LearningSection title="5️⃣ Type Checking and Conversion">
        <h3>Type Checking with type()</h3>
        <CodeBlock
          code={`x = 10
y = 3.14
z = "Hello"

print(type(x))  # Output: <class 'int'>
print(type(y))  # Output: <class 'float'>
print(type(z))  # Output: <class 'str'>`}
        />

        <h3>Type Conversion (Type Casting)</h3>
        <CodeBlock
          code={`# String to Integer
age_str = "25"
age_int = int(age_str)
print(age_int + 5)  # Output: 30

# Integer to String
num = 100
num_str = str(num)
print("Number: " + num_str)  # Output: Number: 100

# String to Float
price_str = "19.99"
price_float = float(price_str)
print(price_float * 2)  # Output: 39.98

# Integer to Float
x = 10
x_float = float(x)
print(x_float)  # Output: 10.0

# Float to Integer (truncates decimal)
y = 9.99
y_int = int(y)
print(y_int)  # Output: 9`}
        />
        <p>✅ Always convert types when performing operations between different types.</p>
        <p>❌ Mixing incompatible types without conversion causes errors.</p>
      </LearningSection>

      <LearningSection title="6️⃣ Complex Data Types (Overview)">
        <h3>List</h3>
        <CodeBlock
          code={`# Ordered, mutable collection
numbers = [1, 2, 3, 4, 5]
print(numbers)  # Output: [1, 2, 3, 4, 5]
print(type(numbers))  # Output: <class 'list'>`}
        />

        <h3>Tuple</h3>
        <CodeBlock
          code={`# Ordered, immutable collection
coordinates = (10, 20)
print(coordinates)  # Output: (10, 20)
print(type(coordinates))  # Output: <class 'tuple'>`}
        />

        <h3>Dictionary</h3>
        <CodeBlock
          code={`# Key-value pairs
person = {"name": "Alice", "age": 25}
print(person)  # Output: {'name': 'Alice', 'age': 25}
print(type(person))  # Output: <class 'dict'>`}
        />

        <h3>Set</h3>
        <CodeBlock
          code={`# Unordered collection of unique elements
unique_numbers = {1, 2, 3, 3, 4}
print(unique_numbers)  # Output: {1, 2, 3, 4}
print(type(unique_numbers))  # Output: <class 'set'>`}
        />
        <p>✅ These complex types will be covered in detail in later topics.</p>
      </LearningSection>

      <LearningSection title="7️⃣ None Type">
        <p>🧠 <code>None</code> represents the absence of a value.</p>
        
        <CodeBlock
          code={`# None is a special constant
result = None
print(result)  # Output: None
print(type(result))  # Output: <class 'NoneType'>

# Checking for None
if result is None:
    print("Result is empty")  # Output: Result is empty`}
        />
        <p>✅ Use <code>is</code> operator to check for None, not <code>==</code>.</p>
      </LearningSection>

      <LearningSection title="8️⃣ Constants">
        <p>🧠 Python doesn't have built-in constant types, but convention is to use UPPERCASE names.</p>
        
        <CodeBlock
          code={`# Constants (by convention, not enforced)
PI = 3.14159
MAX_SIZE = 100
API_KEY = "abc123xyz"

# These can still be changed (not recommended)
print(PI)  # Output: 3.14159

# Usage in calculations
radius = 5
area = PI * radius ** 2
print(f"Area: {area}")  # Output: Area: 78.53975`}
        />
        <p>✅ Use UPPERCASE names to indicate constants (convention).</p>
        <p>❌ Don't modify constants after definition.</p>
      </LearningSection>

      <LearningSection title="9️⃣ Comparison Table">
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Data Type</th>
              <th>Example</th>
              <th>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>int</code></td>
              <td>age = 25</td>
              <td>Whole numbers</td>
            </tr>
            <tr>
              <td><code>float</code></td>
              <td>price = 19.99</td>
              <td>Decimal numbers</td>
            </tr>
            <tr>
              <td><code>str</code></td>
              <td>name = &quot;Alice&quot;</td>
              <td>Text data</td>
            </tr>
            <tr>
              <td><code>bool</code></td>
              <td>is_active = True</td>
              <td>True/False values</td>
            </tr>
            <tr>
              <td><code>list</code></td>
              <td>numbers = [1, 2, 3]</td>
              <td>Ordered collection</td>
            </tr>
            <tr>
              <td><code>tuple</code></td>
              <td>point = (10, 20)</td>
              <td>Immutable collection</td>
            </tr>
            <tr>
              <td><code>dict</code></td>
              <td>person = {'{&quot;age&quot;: 25}'}</td>
              <td>Key-value pairs</td>
            </tr>
            <tr>
              <td><code>set</code></td>
              <td>unique = {'{1, 2, 3}'}</td>
              <td>Unique elements</td>
            </tr>
            <tr>
              <td><code>None</code></td>
              <td>result = None</td>
              <td>Absence of value</td>
            </tr>
          </tbody>
        </table>
      </LearningSection>

      <LearningSection title="🔟 Best Practices">
        <ul>
          <li>✅ Use descriptive variable names (<code>student_age</code> not <code>sa</code>).</li>
          <li>✅ Follow snake_case naming convention in Python.</li>
          <li>✅ Use UPPERCASE for constants.</li>
          <li>✅ Initialize variables before use.</li>
          <li>✅ Use <code>type()</code> to check data types when debugging.</li>
          <li>✅ Convert types explicitly when needed.</li>
          <li>❌ Avoid using reserved keywords as variable names.</li>
          <li>❌ Don't use ambiguous names like <code>l</code>, <code>O</code>, or <code>I</code>.</li>
        </ul>
      </LearningSection>

      <LearningSection title="1️⃣1️⃣ Practice Examples">
        <h3>Example 1: Variable Swap</h3>
        <CodeBlock
          code={`# Swap two variables
a = 5
b = 10
print(f"Before swap: a = {a}, b = {b}")

# Python way (elegant)
a, b = b, a
print(f"After swap: a = {a}, b = {b}")

# Output:
# Before swap: a = 5, b = 10
# After swap: a = 10, b = 5`}
        />

        <h3>Example 2: Type Conversion</h3>
        <CodeBlock
          code={`# User inputs (always strings)
num1 = input("Enter first number: ")
num2 = input("Enter second number: ")

# Convert to integers for calculation
num1 = int(num1)
num2 = int(num2)

sum_result = num1 + num2
print(f"Sum: {sum_result}")

# Input: 5, 10
# Output: Sum: 15`}
        />

        <h3>Example 3: Area Calculator</h3>
        <CodeBlock
          code={`# Calculate area of a circle
PI = 3.14159
radius = 7

area = PI * radius ** 2
circumference = 2 * PI * radius

print(f"Radius: {radius}")
print(f"Area: {area:.2f}")
print(f"Circumference: {circumference:.2f}")

# Output:
# Radius: 7
# Area: 153.94
# Circumference: 43.98`}
        />
      </LearningSection>
    </div>
  );
};

export default VariablesDatatypes;
