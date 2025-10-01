import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const Operators = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Operators</h1>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 Operators are symbols that perform operations on variables and values.</li>
          <li>🔹 Python supports multiple types of operators for different operations.</li>
          <li>✅ Arithmetic operators for mathematical calculations.</li>
          <li>✅ Comparison operators for comparing values.</li>
          <li>✅ Logical operators for combining conditions.</li>
          <li>✅ Assignment operators for assigning values.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Arithmetic Operators">
        <p>🧠 Used for mathematical operations.</p>
        
        <CodeBlock
          code={`a = 10
b = 3

# Addition
print(a + b)  # Output: 13

# Subtraction
print(a - b)  # Output: 7

# Multiplication
print(a * b)  # Output: 30

# Division (always returns float)
print(a / b)  # Output: 3.3333333333333335

# Floor Division (returns integer)
print(a // b)  # Output: 3

# Modulus (remainder)
print(a % b)  # Output: 1

# Exponentiation (power)
print(a ** b)  # Output: 1000 (10^3)`}
        />
        
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Operator</th>
              <th>Name</th>
              <th>Example</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>+</code></td>
              <td>Addition</td>
              <td>5 + 3</td>
              <td>8</td>
            </tr>
            <tr>
              <td><code>-</code></td>
              <td>Subtraction</td>
              <td>5 - 3</td>
              <td>2</td>
            </tr>
            <tr>
              <td><code>*</code></td>
              <td>Multiplication</td>
              <td>5 * 3</td>
              <td>15</td>
            </tr>
            <tr>
              <td><code>/</code></td>
              <td>Division</td>
              <td>5 / 2</td>
              <td>2.5</td>
            </tr>
            <tr>
              <td><code>//</code></td>
              <td>Floor Division</td>
              <td>5 // 2</td>
              <td>2</td>
            </tr>
            <tr>
              <td><code>%</code></td>
              <td>Modulus</td>
              <td>5 % 2</td>
              <td>1</td>
            </tr>
            <tr>
              <td><code>**</code></td>
              <td>Exponentiation</td>
              <td>5 ** 2</td>
              <td>25</td>
            </tr>
          </tbody>
        </table>
        <p>✅ Use <code>//</code> for integer division, <code>/</code> for float division.</p>
      </LearningSection>

      <LearningSection title="3️⃣ Comparison Operators">
        <p>🧠 Used to compare two values, returns True or False.</p>
        
        <CodeBlock
          code={`a = 10
b = 5

# Equal to
print(a == b)  # Output: False

# Not equal to
print(a != b)  # Output: True

# Greater than
print(a > b)  # Output: True

# Less than
print(a < b)  # Output: False

# Greater than or equal to
print(a >= 10)  # Output: True

# Less than or equal to
print(b <= 5)  # Output: True`}
        />
        
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Operator</th>
              <th>Name</th>
              <th>Example</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>==</code></td>
              <td>Equal to</td>
              <td>5 == 5</td>
              <td>True</td>
            </tr>
            <tr>
              <td><code>!=</code></td>
              <td>Not equal to</td>
              <td>5 != 3</td>
              <td>True</td>
            </tr>
            <tr>
              <td><code>&gt;</code></td>
              <td>Greater than</td>
              <td>5 &gt; 3</td>
              <td>True</td>
            </tr>
            <tr>
              <td><code>&lt;</code></td>
              <td>Less than</td>
              <td>5 &lt; 3</td>
              <td>False</td>
            </tr>
            <tr>
              <td><code>&gt;=</code></td>
              <td>Greater than or equal to</td>
              <td>5 &gt;= 5</td>
              <td>True</td>
            </tr>
            <tr>
              <td><code>&lt;=</code></td>
              <td>Less than or equal to</td>
              <td>5 &lt;= 3</td>
              <td>False</td>
            </tr>
          </tbody>
        </table>
        <p>✅ Use <code>==</code> for comparison, <code>=</code> for assignment.</p>
      </LearningSection>

      <LearningSection title="4️⃣ Logical Operators">
        <p>🧠 Used to combine conditional statements.</p>
        
        <CodeBlock
          code={`a = 10
b = 5
c = 3

# AND - Both conditions must be True
print(a > b and b > c)  # Output: True
print(a > b and b < c)  # Output: False

# OR - At least one condition must be True
print(a > b or b < c)  # Output: True
print(a < b or b < c)  # Output: False

# NOT - Reverses the result
print(not(a > b))  # Output: False
print(not(a < b))  # Output: True`}
        />
        
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Operator</th>
              <th>Description</th>
              <th>Example</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>and</code></td>
              <td>Returns True if both are True</td>
              <td>True and False</td>
              <td>False</td>
            </tr>
            <tr>
              <td><code>or</code></td>
              <td>Returns True if at least one is True</td>
              <td>True or False</td>
              <td>True</td>
            </tr>
            <tr>
              <td><code>not</code></td>
              <td>Reverses the boolean value</td>
              <td>not True</td>
              <td>False</td>
            </tr>
          </tbody>
        </table>
        <p>✅ Use logical operators to combine multiple conditions.</p>
      </LearningSection>

      <LearningSection title="5️⃣ Assignment Operators">
        <p>🧠 Used to assign values to variables.</p>
        
        <CodeBlock
          code={`# Simple assignment
x = 10
print(x)  # Output: 10

# Add and assign
x += 5  # Same as: x = x + 5
print(x)  # Output: 15

# Subtract and assign
x -= 3  # Same as: x = x - 3
print(x)  # Output: 12

# Multiply and assign
x *= 2  # Same as: x = x * 2
print(x)  # Output: 24

# Divide and assign
x /= 4  # Same as: x = x / 4
print(x)  # Output: 6.0

# Floor divide and assign
x //= 2  # Same as: x = x // 2
print(x)  # Output: 3.0

# Modulus and assign
x %= 2  # Same as: x = x % 2
print(x)  # Output: 1.0

# Exponent and assign
x = 2
x **= 3  # Same as: x = x ** 3
print(x)  # Output: 8`}
        />
        
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Operator</th>
              <th>Example</th>
              <th>Equivalent To</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>=</code></td>
              <td>x = 5</td>
              <td>x = 5</td>
            </tr>
            <tr>
              <td><code>+=</code></td>
              <td>x += 3</td>
              <td>x = x + 3</td>
            </tr>
            <tr>
              <td><code>-=</code></td>
              <td>x -= 3</td>
              <td>x = x - 3</td>
            </tr>
            <tr>
              <td><code>*=</code></td>
              <td>x *= 3</td>
              <td>x = x * 3</td>
            </tr>
            <tr>
              <td><code>/=</code></td>
              <td>x /= 3</td>
              <td>x = x / 3</td>
            </tr>
            <tr>
              <td><code>//=</code></td>
              <td>x //= 3</td>
              <td>x = x // 3</td>
            </tr>
            <tr>
              <td><code>%=</code></td>
              <td>x %= 3</td>
              <td>x = x % 3</td>
            </tr>
            <tr>
              <td><code>**=</code></td>
              <td>x **= 3</td>
              <td>x = x ** 3</td>
            </tr>
          </tbody>
        </table>
        <p>✅ Compound assignment operators make code more concise.</p>
      </LearningSection>

      <LearningSection title="6️⃣ Identity Operators">
        <p>🧠 Used to check if two variables point to the same object in memory.</p>
        
        <CodeBlock
          code={`a = [1, 2, 3]
b = [1, 2, 3]
c = a

# is operator - checks if objects are same
print(a is c)  # Output: True (same object)
print(a is b)  # Output: False (different objects)

# is not operator
print(a is not b)  # Output: True

# == vs is
print(a == b)  # Output: True (same values)
print(a is b)  # Output: False (different objects)`}
        />
        <p>✅ Use <code>is</code> for checking object identity.</p>
        <p>✅ Use <code>==</code> for checking value equality.</p>
      </LearningSection>

      <LearningSection title="7️⃣ Membership Operators">
        <p>🧠 Used to test if a value exists in a sequence.</p>
        
        <CodeBlock
          code={`numbers = [1, 2, 3, 4, 5]
text = "Hello World"

# in operator
print(3 in numbers)  # Output: True
print(10 in numbers)  # Output: False
print("Hello" in text)  # Output: True

# not in operator
print(10 not in numbers)  # Output: True
print("Python" not in text)  # Output: True`}
        />
        <p>✅ Works with lists, tuples, strings, sets, and dictionaries.</p>
      </LearningSection>

      <LearningSection title="8️⃣ Bitwise Operators">
        <p>🧠 Used to perform bit-level operations on integers.</p>
        
        <CodeBlock
          code={`a = 10  # Binary: 1010
b = 4   # Binary: 0100

# AND
print(a & b)  # Output: 0 (Binary: 0000)

# OR
print(a | b)  # Output: 14 (Binary: 1110)

# XOR
print(a ^ b)  # Output: 14 (Binary: 1110)

# NOT
print(~a)  # Output: -11 (Binary: inverts all bits)

# Left Shift
print(a << 1)  # Output: 20 (Binary: 10100)

# Right Shift
print(a >> 1)  # Output: 5 (Binary: 0101)`}
        />
        
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Operator</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>&amp;</code></td>
              <td>AND</td>
              <td>Sets bit to 1 if both bits are 1</td>
            </tr>
            <tr>
              <td><code>|</code></td>
              <td>OR</td>
              <td>Sets bit to 1 if at least one bit is 1</td>
            </tr>
            <tr>
              <td><code>^</code></td>
              <td>XOR</td>
              <td>Sets bit to 1 if only one bit is 1</td>
            </tr>
            <tr>
              <td><code>~</code></td>
              <td>NOT</td>
              <td>Inverts all bits</td>
            </tr>
            <tr>
              <td><code>&lt;&lt;</code></td>
              <td>Left Shift</td>
              <td>Shifts bits left</td>
            </tr>
            <tr>
              <td><code>&gt;&gt;</code></td>
              <td>Right Shift</td>
              <td>Shifts bits right</td>
            </tr>
          </tbody>
        </table>
        <p>✅ Useful for low-level programming and optimization.</p>
      </LearningSection>

      <LearningSection title="9️⃣ Operator Precedence">
        <p>🧠 Order in which operators are evaluated in expressions.</p>
        
        <CodeBlock
          code={`# Example 1: Without parentheses
result = 10 + 5 * 2
print(result)  # Output: 20 (multiplication first)

# Example 2: With parentheses
result = (10 + 5) * 2
print(result)  # Output: 30 (addition first)

# Example 3: Multiple operators
result = 10 + 5 * 2 - 3 / 3
print(result)  # Output: 19.0

# Example 4: Exponentiation has highest precedence
result = 2 ** 3 ** 2
print(result)  # Output: 512 (evaluated as 2 ** (3 ** 2))`}
        />
        
        <h3>Precedence Order (Highest to Lowest)</h3>
        <ul>
          <li>1. <code>()</code> - Parentheses</li>
          <li>2. <code>**</code> - Exponentiation</li>
          <li>3. <code>~, +, -</code> - Unary operators</li>
          <li>4. <code>*, /, //, %</code> - Multiplication, Division</li>
          <li>5. <code>+, -</code> - Addition, Subtraction</li>
          <li>6. <code>&lt;&lt;, &gt;&gt;</code> - Bitwise shifts</li>
          <li>7. <code>&amp;</code> - Bitwise AND</li>
          <li>8. <code>^</code> - Bitwise XOR</li>
          <li>9. <code>|</code> - Bitwise OR</li>
          <li>10. <code>==, !=, &gt;, &lt;, &gt;=, &lt;=</code> - Comparison</li>
          <li>11. <code>not</code> - Logical NOT</li>
          <li>12. <code>and</code> - Logical AND</li>
          <li>13. <code>or</code> - Logical OR</li>
        </ul>
        <p>✅ Use parentheses to make expressions clear and control precedence.</p>
      </LearningSection>

      <LearningSection title="🔟 Best Practices">
        <ul>
          <li>✅ Use parentheses to make complex expressions more readable.</li>
          <li>✅ Use <code>==</code> for comparison, not <code>=</code> (assignment).</li>
          <li>✅ Use <code>is</code> when comparing with <code>None</code>.</li>
          <li>✅ Use compound assignment operators (<code>+=</code>, <code>-=</code>) for cleaner code.</li>
          <li>✅ Understand operator precedence to avoid bugs.</li>
          <li>❌ Don't confuse <code>=</code> (assignment) with <code>==</code> (comparison).</li>
          <li>❌ Avoid complex expressions without parentheses.</li>
        </ul>
      </LearningSection>

      <LearningSection title="1️⃣1️⃣ Practice Examples">
        <h3>Example 1: Even or Odd Checker</h3>
        <CodeBlock
          code={`num = int(input("Enter a number: "))

if num % 2 == 0:
    print(f"{num} is even")
else:
    print(f"{num} is odd")

# Input: 7
# Output: 7 is odd`}
        />

        <h3>Example 2: Temperature Converter</h3>
        <CodeBlock
          code={`# Fahrenheit to Celsius
fahrenheit = float(input("Enter temperature in Fahrenheit: "))
celsius = (fahrenheit - 32) * 5 / 9
print(f"{fahrenheit}°F = {celsius:.2f}°C")

# Input: 98.6
# Output: 98.6°F = 37.00°C`}
        />

        <h3>Example 3: Leap Year Checker</h3>
        <CodeBlock
          code={`year = int(input("Enter a year: "))

# A year is a leap year if:
# - Divisible by 4 AND not divisible by 100
# - OR divisible by 400
is_leap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

if is_leap:
    print(f"{year} is a leap year")
else:
    print(f"{year} is not a leap year")

# Input: 2024
# Output: 2024 is a leap year`}
        />

        <h3>Example 4: Simple Calculator</h3>
        <CodeBlock
          code={`a = float(input("Enter first number: "))
b = float(input("Enter second number: "))
op = input("Enter operator (+, -, *, /, %, **): ")

if op == '+':
    result = a + b
elif op == '-':
    result = a - b
elif op == '*':
    result = a * b
elif op == '/':
    result = a / b if b != 0 else "Error: Division by zero"
elif op == '%':
    result = a % b if b != 0 else "Error: Division by zero"
elif op == '**':
    result = a ** b
else:
    result = "Invalid operator"

print(f"Result: {result}")

# Input: 10, 3, **
# Output: Result: 1000.0`}
        />
      </LearningSection>
    </div>
  );
};

export default Operators;
