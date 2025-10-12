import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const Functions = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Functions</h1>

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
    print("Hello, " + name + "!")

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
    print(str(a) + " + " + str(b) + " = " + str(result))

add(5, 3)   # Output: 5 + 3 = 8
add(10, 20) # Output: 10 + 20 = 30`}
        />

        <h3>Default Parameters</h3>
        <CodeBlock
          code={`def greet(name, greeting="Hello"):
    print(greeting + ", " + name + "!")

greet("Alice")              # Output: Hello, Alice!
greet("Bob", "Hi")          # Output: Hi, Bob!
greet("Charlie", "Hey")     # Output: Hey, Charlie!`}
        />

        <h3>Keyword Arguments</h3>
        <CodeBlock
          code={`def describe_person(name, age, city):
    print(name + " is " + str(age) + " years old and lives in " + city)

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
print("Sum: " + str(s) + ", Difference: " + str(d) + ", Product: " + str(p))
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

      <LearningSection title="6️⃣ Best Practices">
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

      <LearningSection title="7️⃣ Practice Examples">
        <h3>Example 1: Temperature Converter</h3>
        <CodeBlock
          code={`def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit"""
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius"""
    return (fahrenheit - 32) * 5/9

# Test
c_temp = celsius_to_fahrenheit(25)
f_temp = fahrenheit_to_celsius(77)
print("25°C = " + str(round(c_temp, 2)) + "°F")
print("77°F = " + str(round(f_temp, 2)) + "°C")

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
        print(str(num) + " is prime")

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
print("Min: " + str(min_val) + ", Max: " + str(max_val) + ", Average: " + str(avg))

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
    print(pwd + ": " + msg)

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
