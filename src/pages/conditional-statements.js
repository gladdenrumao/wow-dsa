import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const ConditionalStatements = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Conditional Statements</h1>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 Conditional statements allow programs to make decisions.</li>
          <li>🔹 Execute different code blocks based on conditions.</li>
          <li>✅ <code>if</code> statement executes code when condition is True.</li>
          <li>✅ <code>elif</code> (else if) checks additional conditions.</li>
          <li>✅ <code>else</code> executes when all conditions are False.</li>
          <li>✅ Indentation is crucial in Python (use 4 spaces).</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ if Statement">
        <p>🧠 Executes a block of code if the condition is True.</p>
        
        <CodeBlock
          code={`# Simple if statement
age = 18

if age >= 18:
    print("You are an adult")
    print("You can vote")

# Output: You are an adult
#         You can vote`}
        />

        <h3>if with Multiple Conditions</h3>
        <CodeBlock
          code={`score = 85

if score >= 80:
    print("Excellent!")

# Using logical operators
temperature = 25
if temperature > 20 and temperature < 30:
    print("Perfect weather!")

# Output: Excellent!
#         Perfect weather!`}
        />
        <p>✅ Code inside <code>if</code> block must be indented.</p>
      </LearningSection>

      <LearningSection title="3️⃣ if-else Statement">
        <p>🧠 Executes one block if condition is True, another if False.</p>
        
        <CodeBlock
          code={`# Simple if-else
age = 15

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# Output: You are a minor`}
        />

        <h3>Even or Odd</h3>
        <CodeBlock
          code={`num = 7

if num % 2 == 0:
    print(str(num), "is even")
else:
    print(str(num), "is odd")

# Output: 7 is odd`}
        />
        <p>✅ <code>else</code> doesn't need a condition.</p>
      </LearningSection>

      <LearningSection title="4️⃣ if-elif-else Statement">
        <p>🧠 Check multiple conditions in sequence.</p>
        
        <CodeBlock
          code={`# Grade calculator
marks = 75

if marks >= 90:
    grade = 'A+'
elif marks >= 80:
    grade = 'A'
elif marks >= 70:
    grade = 'B'
elif marks >= 60:
    grade = 'C'
elif marks >= 50:
    grade = 'D'
else:
    grade = 'F'

print("Grade:", grade)
# Output: Grade: B`}
        />

        <h3>Day of Week</h3>
        <CodeBlock
          code={`day = 3

if day == 1:
    print("Monday")
elif day == 2:
    print("Tuesday")
elif day == 3:
    print("Wednesday")
elif day == 4:
    print("Thursday")
elif day == 5:
    print("Friday")
elif day == 6:
    print("Saturday")
elif day == 7:
    print("Sunday")
else:
    print("Invalid day")

# Output: Wednesday`}
        />
        <p>✅ Only the first matching condition executes.</p>
        <p>✅ Use <code>elif</code> for multiple conditions, not multiple <code>if</code>.</p>
      </LearningSection>

      <LearningSection title="5️⃣ Nested if Statements">
        <p>🧠 if statements inside other if statements.</p>
        
        <CodeBlock
          code={`# Eligibility checker
age = 20
has_license = True

if age >= 18:
    print("Age requirement met")
    if has_license:
        print("You can drive!")
    else:
        print("You need a license")
else:
    print("You are too young to drive")

# Output: Age requirement met
#         You can drive!`}
        />

        <h3>Login System</h3>
        <CodeBlock
          code={`username = "admin"
password = "pass123"
is_active = True

if username == "admin":
    if password == "pass123":
        if is_active:
            print("Login successful!")
        else:
            print("Account is deactivated")
    else:
        print("Incorrect password")
else:
    print("User not found")

# Output: Login successful!`}
        />
        <p>✅ Keep nesting to a minimum for better readability.</p>
        <p>✅ Consider using logical operators instead of deep nesting.</p>
      </LearningSection>

      <LearningSection title="6️⃣ Ternary Operator (Conditional Expression)">
        <p>🧠 Shorthand for simple if-else statements.</p>
        
        <CodeBlock
          code={`# Syntax: value_if_true if condition else value_if_false

# Example 1: Simple comparison
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)  # Output: Adult

# Example 2: Max of two numbers
a = 10
b = 20
maximum = a if a > b else b
print("Maximum:", maximum)  # Output: Maximum: 20

# Example 3: Even or odd
num = 7
result = "Even" if num % 2 == 0 else "Odd"
print(result)  # Output: Odd`}
        />
        <p>✅ Use for simple conditions only.</p>
        <p>❌ Avoid for complex logic - use regular if-else for clarity.</p>
      </LearningSection>

      <LearningSection title="7️⃣ Short-Circuit Evaluation">
        <p>🧠 Python stops evaluating as soon as result is determined.</p>
        
        <CodeBlock
          code={`# AND operator - stops at first False
x = 5
if x > 0 and x < 10:
    print("x is between 0 and 10")

# OR operator - stops at first True
age = 25
if age < 18 or age > 60:
    print("Discounted ticket")
else:
    print("Regular price")

# Output: x is between 0 and 10
#         Regular price`}
        />

        <h3>Safe Division Check</h3>
        <CodeBlock
          code={`# Prevent division by zero using short-circuit
divisor = 0
if divisor != 0 and 10 / divisor > 1:
    print("Valid division")
else:
    print("Cannot divide by zero")

# Output: Cannot divide by zero
# (second condition never evaluated)`}
        />
        <p>✅ Order conditions carefully for efficiency and safety.</p>
      </LearningSection>

      <LearningSection title="8️⃣ match-case Statement (Python 3.10+)">
        <p>🧠 Structural pattern matching (similar to switch in other languages).</p>
        
        <CodeBlock
          code={`# Simple match-case
day = 3

match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case 4:
        print("Thursday")
    case 5:
        print("Friday")
    case 6 | 7:  # Multiple values
        print("Weekend!")
    case _:  # Default case
        print("Invalid day")

# Output: Wednesday`}
        />

        <h3>HTTP Status Code Handler</h3>
        <CodeBlock
          code={`status_code = 404

match status_code:
    case 200:
        print("OK")
    case 201:
        print("Created")
    case 400:
        print("Bad Request")
    case 404:
        print("Not Found")
    case 500:
        print("Internal Server Error")
    case _:
        print("Unknown status code")

# Output: Not Found`}
        />
        <p>✅ Available in Python 3.10 and later.</p>
        <p>✅ More readable than long if-elif chains for simple cases.</p>
      </LearningSection>

      <LearningSection title="9️⃣ Truthy and Falsy Values">
        <p>🧠 Some values are automatically considered True or False in conditions.</p>
        
        <CodeBlock
          code={`# Falsy values: False, 0, 0.0, "", [], {}, (), None

# Empty string
text = ""
if text:
    print("Text is not empty")
else:
    print("Text is empty")
# Output: Text is empty

# Empty list
numbers = []
if numbers:
    print("List has items")
else:
    print("List is empty")
# Output: List is empty

# Zero
count = 0
if count:
    print("Count is non-zero")
else:
    print("Count is zero")
# Output: Count is zero

# None
result = None
if result:
    print("Result exists")
else:
    print("Result is None")
# Output: Result is None`}
        />
        
        <h3>Explicit Check vs Truthy Check</h3>
        <CodeBlock
          code={`# Truthy check
items = [1, 2, 3]
if items:
    print("Has items")

# Explicit check (more clear)
if len(items) > 0:
    print("Has items")

# Both produce: Has items`}
        />
        <p>✅ Use truthy/falsy for existence checks.</p>
        <p>✅ Use explicit comparisons for specific value checks.</p>
      </LearningSection>

      <LearningSection title="🔟 Best Practices">
        <ul>
          <li>✅ Use proper indentation (4 spaces in Python).</li>
          <li>✅ Keep conditions simple and readable.</li>
          <li>✅ Use <code>elif</code> instead of multiple <code>if</code> when conditions are mutually exclusive.</li>
          <li>✅ Use logical operators (<code>and</code>, <code>or</code>) to combine conditions.</li>
          <li>✅ Use ternary operator for simple one-line conditions.</li>
          <li>✅ Avoid deep nesting - refactor complex conditions.</li>
          <li>❌ Don't compare boolean values with <code>== True</code> or <code>== False</code>.</li>
          <li>❌ Don't use multiple separate <code>if</code> statements when <code>elif</code> is appropriate.</li>
        </ul>
      </LearningSection>

      <LearningSection title="1️⃣1️⃣ Practice Examples">
        <h3>Example 1: BMI Calculator</h3>
        <CodeBlock
          code={`weight = float(input("Enter weight (kg): "))
height = float(input("Enter height (m): "))

bmi = weight / (height ** 2)

if bmi < 18.5:
    category = "Underweight"
elif bmi < 25:
    category = "Normal weight"
elif bmi < 30:
    category = "Overweight"
else:
    category = "Obese"

print("BMI:", round(bmi, 2))
print("Category:", category)

# Input: 70, 1.75
# Output: BMI: 22.86
#         Category: Normal weight`}
        />

        <h3>Example 2: Password Strength Checker</h3>
        <CodeBlock
          code={`password = input("Enter password: ")

length = len(password)
has_digit = any(char.isdigit() for char in password)
has_upper = any(char.isupper() for char in password)
has_lower = any(char.islower() for char in password)

if length < 6:
    strength = "Weak"
elif length >= 6 and length < 10:
    if has_digit and has_upper and has_lower:
        strength = "Medium"
    else:
        strength = "Weak"
elif length >= 10:
    if has_digit and has_upper and has_lower:
        strength = "Strong"
    else:
        strength = "Medium"

print("Password strength:", strength)

# Input: Pass123
# Output: Password strength: Weak`}
        />

        <h3>Example 3: Ticket Price Calculator</h3>
        <CodeBlock
          code={`age = int(input("Enter age: "))
is_student = input("Are you a student? (yes/no): ").lower() == "yes"
day = input("Enter day (weekday/weekend): ").lower()

base_price = 100

if age < 5:
    price = 0
    print("Free entry for children under 5")
elif age < 18:
    price = base_price * 0.5
    print("50% discount for minors")
elif age >= 60:
    price = base_price * 0.7
    print("30% discount for seniors")
elif is_student:
    price = base_price * 0.8
    print("20% discount for students")
else:
    price = base_price
    print("Regular price")

if day == "weekend":
    price *= 1.2
    print("20% weekend surcharge applied")

print("Total price: $" + str(round(price, 2)))

# Input: 22, yes, weekday
# Output: 20% discount for students
#         Total price: $80.0`}
        />

        <h3>Example 4: Triangle Type Checker</h3>
        <CodeBlock
          code={`a = float(input("Enter side 1: "))
b = float(input("Enter side 2: "))
c = float(input("Enter side 3: "))

# Check if valid triangle
if a + b > c and b + c > a and a + c > b:
    print("Valid triangle")
    
    # Check triangle type
    if a == b == c:
        print("Equilateral triangle")
    elif a == b or b == c or a == c:
        print("Isosceles triangle")
    else:
        print("Scalene triangle")
    
    # Check if right-angled
    sides = sorted([a, b, c])
    if abs(sides[0]**2 + sides[1]**2 - sides[2]**2) < 0.01:
        print("Right-angled triangle")
else:
    print("Not a valid triangle")

# Input: 3, 4, 5
# Output: Valid triangle
#         Scalene triangle
#         Right-angled triangle`}
        />
      </LearningSection>
    </div>
  );
};

export default ConditionalStatements;
