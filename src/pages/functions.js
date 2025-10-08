import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const Functions = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Functions</h1>

      <div style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '0.5rem', border: '2px solid #3b82f6' }}>
        <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#1e40af' }}>📚 Lecture Notes</h2>
        <p style={{ margin: 0 }}>
          <a href="/pspnotes/RU - Lecture 5 PPT.pdf" download style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: '500' }}>
            📥 Download Lecture 5 PDF
          </a>
        </p>
      </div>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 Functions are reusable blocks of code that perform specific tasks.</li>
          <li>🔹 Help organize code and avoid repetition (DRY principle).</li>
          <li>✅ Defined using <code>def</code> keyword.</li>
          <li>✅ Can accept inputs (parameters) and return outputs.</li>
          <li>✅ Make code more modular, readable, and maintainable.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Defining and Calling Functions">
        <p>🧠 Define a function once, use it multiple times.</p>
        
        <h3>Simple Function</h3>
        <CodeBlock
          code={`# Define a function
def greet():
    print("Hello, World!")

# Call the function
greet()  # Output: Hello, World!
greet()  # Output: Hello, World!`}
        />

        <h3>Function with Parameters</h3>
        <CodeBlock
          code={`def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Output: Hello, Alice!
greet("Bob")    # Output: Hello, Bob!`}
        />
        <p>✅ Function definition ends with a colon (:).</p>
        <p>✅ Function body must be indented (4 spaces).</p>
      </LearningSection>

      <LearningSection title="3️⃣ Function Parameters and Arguments">
        <p>🧠 Parameters are variables in function definition, arguments are actual values passed.</p>
        
        <h3>Multiple Parameters</h3>
        <CodeBlock
          code={`def add(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

add(5, 3)   # Output: 5 + 3 = 8
add(10, 20) # Output: 10 + 20 = 30`}
        />

        <h3>Default Parameters</h3>
        <CodeBlock
          code={`def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")              # Output: Hello, Alice!
greet("Bob", "Hi")          # Output: Hi, Bob!
greet("Charlie", "Hey")     # Output: Hey, Charlie!`}
        />

        <h3>Keyword Arguments</h3>
        <CodeBlock
          code={`def describe_person(name, age, city):
    print(f"{name} is {age} years old and lives in {city}")

# Positional arguments
describe_person("Alice", 25, "New York")

# Keyword arguments (order doesn't matter)
describe_person(age=30, city="London", name="Bob")

# Mix of both
describe_person("Charlie", city="Paris", age=28)

# Output: Alice is 25 years old and lives in New York
#         Bob is 30 years old and lives in London
#         Charlie is 28 years old and lives in Paris`}
        />
        <p>✅ Default parameters must come after non-default parameters.</p>
        <p>✅ Use keyword arguments for clarity with many parameters.</p>
      </LearningSection>

      <LearningSection title="4️⃣ Return Statement">
        <p>🧠 Functions can return values using the <code>return</code> statement.</p>
        
        <CodeBlock
          code={`def add(a, b):
    return a + b

# Store return value
result = add(5, 3)
print(result)  # Output: 8

# Use directly
print(add(10, 20))  # Output: 30`}
        />

        <h3>Multiple Return Values</h3>
        <CodeBlock
          code={`def calculate(a, b):
    sum_val = a + b
    diff = a - b
    product = a * b
    return sum_val, diff, product

# Unpack return values
s, d, p = calculate(10, 5)
print(f"Sum: {s}, Difference: {d}, Product: {p}")
# Output: Sum: 15, Difference: 5, Product: 50`}
        />

        <h3>Early Return</h3>
        <CodeBlock
          code={`def divide(a, b):
    if b == 0:
        return "Error: Division by zero"
    return a / b

print(divide(10, 2))  # Output: 5.0
print(divide(10, 0))  # Output: Error: Division by zero`}
        />
        <p>✅ Function execution stops when <code>return</code> is reached.</p>
        <p>✅ Functions without <code>return</code> statement return <code>None</code>.</p>
      </LearningSection>

      <LearningSection title="5️⃣ Variable Scope">
        <p>🧠 Scope determines where variables can be accessed.</p>
        
        <h3>Local Scope</h3>
        <CodeBlock
          code={`def my_function():
    local_var = 10  # Local variable
    print(local_var)

my_function()  # Output: 10
# print(local_var)  # Error: local_var not defined outside function`}
        />

        <h3>Global Scope</h3>
        <CodeBlock
          code={`global_var = 20  # Global variable

def my_function():
    print(global_var)  # Can access global variable

my_function()  # Output: 20
print(global_var)  # Output: 20`}
        />

        <h3>Modifying Global Variables</h3>
        <CodeBlock
          code={`count = 0

def increment():
    global count  # Declare global to modify
    count += 1

increment()
print(count)  # Output: 1
increment()
print(count)  # Output: 2`}
        />
        <p>✅ Use <code>global</code> keyword to modify global variables inside functions.</p>
        <p>❌ Avoid excessive use of global variables - pass parameters instead.</p>
      </LearningSection>

      <LearningSection title="6️⃣ *args and **kwargs">
        <p>🧠 Accept variable number of arguments.</p>
        
        <h3>*args (Variable Positional Arguments)</h3>
        <CodeBlock
          code={`def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))        # Output: 6
print(sum_all(1, 2, 3, 4, 5))  # Output: 15
print(sum_all(10))             # Output: 10`}
        />

        <h3>**kwargs (Variable Keyword Arguments)</h3>
        <CodeBlock
          code={`def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="New York")
# Output: name: Alice
#         age: 25
#         city: New York`}
        />

        <h3>Combining All Parameter Types</h3>
        <CodeBlock
          code={`def full_function(a, b, *args, default=10, **kwargs):
    print(f"a: {a}, b: {b}")
    print(f"args: {args}")
    print(f"default: {default}")
    print(f"kwargs: {kwargs}")

full_function(1, 2, 3, 4, 5, default=20, x=100, y=200)
# Output: a: 1, b: 2
#         args: (3, 4, 5)
#         default: 20
#         kwargs: {'x': 100, 'y': 200}`}
        />
        <p>✅ <code>*args</code> collects extra positional arguments as tuple.</p>
        <p>✅ <code>**kwargs</code> collects extra keyword arguments as dictionary.</p>
      </LearningSection>

      <LearningSection title="7️⃣ Lambda Functions">
        <p>🧠 Anonymous, small functions defined in one line.</p>
        
        <CodeBlock
          code={`# Regular function
def square(x):
    return x ** 2

# Lambda function
square_lambda = lambda x: x ** 2

print(square(5))         # Output: 25
print(square_lambda(5))  # Output: 25`}
        />

        <h3>Lambda with Multiple Parameters</h3>
        <CodeBlock
          code={`# Addition
add = lambda a, b: a + b
print(add(3, 5))  # Output: 8

# Maximum of two numbers
maximum = lambda a, b: a if a > b else b
print(maximum(10, 20))  # Output: 20`}
        />

        <h3>Lambda with map(), filter(), sorted()</h3>
        <CodeBlock
          code={`# map() - apply function to all elements
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # Output: [1, 4, 9, 16, 25]

# filter() - keep elements that match condition
even = list(filter(lambda x: x % 2 == 0, numbers))
print(even)  # Output: [2, 4]

# sorted() with key
students = [("Alice", 25), ("Bob", 20), ("Charlie", 23)]
sorted_students = sorted(students, key=lambda x: x[1])
print(sorted_students)
# Output: [('Bob', 20), ('Charlie', 23), ('Alice', 25)]`}
        />
        <p>✅ Use lambda for simple, one-line operations.</p>
        <p>❌ Don't use lambda for complex logic - use regular functions.</p>
      </LearningSection>

      <LearningSection title="8️⃣ Recursion">
        <p>🧠 A function that calls itself to solve problems.</p>
        
        <CodeBlock
          code={`# Factorial
def factorial(n):
    if n == 0 or n == 1:  # Base case
        return 1
    return n * factorial(n - 1)  # Recursive call

print(factorial(5))  # Output: 120 (5*4*3*2*1)

# Fibonacci
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(6))  # Output: 8`}
        />
        <p>✅ Always have a base case to stop recursion.</p>
        <p>❌ Be careful of infinite recursion (stack overflow).</p>
      </LearningSection>

      <LearningSection title="9️⃣ Docstrings">
        <p>🧠 Document your functions using docstrings.</p>
        
        <CodeBlock
          code={`def calculate_area(length, width):
    """
    Calculate the area of a rectangle.
    
    Parameters:
    length (float): The length of the rectangle
    width (float): The width of the rectangle
    
    Returns:
    float: The area of the rectangle
    """
    return length * width

# Access docstring
print(calculate_area.__doc__)
# Access using help()
help(calculate_area)`}
        />
        <p>✅ Use triple quotes for docstrings.</p>
        <p>✅ Place docstring right after function definition.</p>
      </LearningSection>

      <LearningSection title="🔟 Best Practices">
        <ul>
          <li>✅ Use descriptive function names (verbs: calculate, get, print).</li>
          <li>✅ Keep functions small and focused on one task.</li>
          <li>✅ Use docstrings to document functions.</li>
          <li>✅ Use default parameters for optional arguments.</li>
          <li>✅ Return values instead of printing when possible.</li>
          <li>✅ Avoid modifying global variables - use parameters and return values.</li>
          <li>❌ Don&apos;t create functions with too many parameters (&gt;5 is too many).</li>
          <li>❌ Don't use mutable default arguments (like lists or dicts).</li>
        </ul>
      </LearningSection>

      <LearningSection title="1️⃣1️⃣ Practice Examples">
        <h3>Example 1: Temperature Converter</h3>
        <CodeBlock
          code={`def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit"""
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius"""
    return (fahrenheit - 32) * 5/9

# Test
print(f"25°C = {celsius_to_fahrenheit(25):.2f}°F")
print(f"77°F = {fahrenheit_to_celsius(77):.2f}°C")

# Output: 25°C = 77.00°F
#         77°F = 25.00°C`}
        />

        <h3>Example 2: Prime Number Checker</h3>
        <CodeBlock
          code={`def is_prime(n):
    """Check if a number is prime"""
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

# Test
for num in range(1, 11):
    if is_prime(num):
        print(f"{num} is prime")

# Output: 2 is prime
#         3 is prime
#         5 is prime
#         7 is prime`}
        />

        <h3>Example 3: List Statistics</h3>
        <CodeBlock
          code={`def calculate_stats(numbers):
    """Calculate min, max, average of a list"""
    if not numbers:
        return None, None, None
    
    minimum = min(numbers)
    maximum = max(numbers)
    average = sum(numbers) / len(numbers)
    
    return minimum, maximum, average

# Test
data = [10, 20, 30, 40, 50]
min_val, max_val, avg = calculate_stats(data)
print(f"Min: {min_val}, Max: {max_val}, Average: {avg}")

# Output: Min: 10, Max: 50, Average: 30.0`}
        />

        <h3>Example 4: Password Validator</h3>
        <CodeBlock
          code={`def validate_password(password):
    """
    Validate password strength.
    Returns: (bool, str) - (is_valid, message)
    """
    if len(password) < 8:
        return False, "Password must be at least 8 characters"
    
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    
    if not has_upper:
        return False, "Password must contain uppercase letter"
    if not has_lower:
        return False, "Password must contain lowercase letter"
    if not has_digit:
        return False, "Password must contain digit"
    
    return True, "Password is strong"

# Test
passwords = ["weak", "StrongPass1", "nodigits", "SHORT1"]
for pwd in passwords:
    is_valid, msg = validate_password(pwd)
    print(f"{pwd}: {msg}")

# Output: weak: Password must be at least 8 characters
#         StrongPass1: Password is strong
#         nodigits: Password must contain digit
#         SHORT1: Password must be at least 8 characters`}
        />
      </LearningSection>
    </div>
  );
};

export default Functions;
