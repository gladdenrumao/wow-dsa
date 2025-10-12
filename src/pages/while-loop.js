import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const WhileLoop = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">While Loop</h1>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 While loops execute code repeatedly as long as a condition is True.</li>
          <li>🔹 Used when the number of iterations is unknown beforehand.</li>
          <li>✅ Condition checked before each iteration.</li>
          <li>✅ Loop continues until condition becomes False.</li>
          <li>⚠️ Be careful of infinite loops - ensure condition eventually becomes False.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Basic While Loop">
        <p>🧠 Execute code while condition is True.</p>
        
        <CodeBlock
          code={`# Count from 1 to 5
count = 1
while count <= 5:
    print(count)
    count += 1

# Output: 1
#         2
#         3
#         4
#         5`}
        />

        <h3>Sum of Numbers</h3>
        <CodeBlock
          code={`# Sum numbers from 1 to n
n = 5
total = 0
i = 1

while i <= n:
    total += i
    i += 1

print(total)  # 15}
        />
        <p>✅ Condition is checked at the start of each iteration.</p>
        <p>✅ Update the loop variable to avoid infinite loops.</p>
      </LearningSection>

      <LearningSection title="3️⃣ While vs For Loop">
        <p>🧠 Choose the right loop for your use case.</p>
        
        <CodeBlock
          code={`# For loop - known iterations
print("For loop:")
for i in range(1, 6):
    print(i)

# While loop - condition-based
print("\\nWhile loop:")
i = 1
while i <= 5:
    print(i)
    i += 1

# Both produce same output:
# 1
# 2
# 3
# 4
# 5`}
        />
        
        <table className="complexity-table">
          <thead>
            <tr>
              <th>For Loop</th>
              <th>While Loop</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Known number of iterations</td>
              <td>Unknown number of iterations</td>
            </tr>
            <tr>
              <td>Iterating over sequences</td>
              <td>Condition-based looping</td>
            </tr>
            <tr>
              <td>More concise</td>
              <td>More flexible</td>
            </tr>
            <tr>
              <td>for i in range(5)</td>
              <td>while condition</td>
            </tr>
          </tbody>
        </table>
        <p>✅ Use for loops when iterating over sequences.</p>
        <p>✅ Use while loops for condition-based iteration.</p>
      </LearningSection>

      <LearningSection title="4️⃣ Loop Control Statements">
        <h3>break - Exit Loop Early</h3>
        <CodeBlock
          code={`# Find a number
count = 1
while count <= 10:
    if count == 5:
        print(count)
        break
    count += 1

print(count)
# Output: Found 5!
#         Loop ended at 5`}
        />

        <h3>continue - Skip Current Iteration</h3>
        <CodeBlock
          code={`# Print odd numbers only
count = 0
while count < 10:
    count += 1
    if count % 2 == 0:
        continue  # Skip even numbers
    print(count)

# Output: 1
#         3
#         5
#         7
#         9`}
        />

        <h3>else with While Loop</h3>
        <CodeBlock
          code={`# Search for a number
num = 1
search = 6

while num <= 5:
    if num == search:
        print(search)
        break
    num += 1
else:
    # Executes if loop completes without break
    print(search)

# Output: 6 not found in range`}
        />
        <p>✅ <code>break</code> exits the loop immediately.</p>
        <p>✅ <code>continue</code> skips to next iteration.</p>
        <p>✅ <code>else</code> runs if loop completes without <code>break</code>.</p>
      </LearningSection>

      <LearningSection title="5️⃣ Infinite Loops">
        <p>🧠 Loops that never end - use with caution!</p>
        
        {/* <h3>Intentional Infinite Loop</h3>
        <CodeBlock
          code={`# Menu system (intentional infinite loop)
while True:
    print("\\n1. Start")
    print("2. Settings")
    print("3. Exit")
    choice = input("Enter choice: ")
    
    if choice == '1':
        print("Starting...")
    elif choice == '2':
        print("Opening settings...")
    elif choice == '3':
        print("Exiting...")
        break  # Exit the infinite loop
    else:
        print("Invalid choice")`}
        />

        <h3>Avoiding Unintentional Infinite Loops</h3> */}
        <CodeBlock
          code={`# ❌ WRONG - Infinite loop (forgot to update)
# count = 1
# while count <= 5:
#     print(count)


# ✅ CORRECT - Proper update
count = 1
while count <= 5:
    print(count)
    count += 1  # Update the condition variable`}
        />
        <p>⚠️ Always ensure loop condition eventually becomes False.</p>
        <p>✅ Use <code>break</code> to exit intentional infinite loops.</p>
      </LearningSection>

      {/* <LearningSection title="6️⃣ Nested While Loops">
        <p>🧠 While loop inside another while loop.</p>
        
        <CodeBlock
          code={`# Print a pattern
i = 1
while i <= 3:
    j = 1
    while j <= 3:
        print(i,j, end=" ")
        j += 1
    print()  # New line
    i += 1

# Output: (1,1) (1,2) (1,3) 
#         (2,1) (2,2) (2,3) 
#         (3,1) (3,2) (3,3)`}
        />

        <h3>Number Guessing Game</h3>
        <CodeBlock
          code={`import random

secret = random.randint(1, 10)
attempts = 0
max_attempts = 3

while attempts < max_attempts:
    guess = int(input("Guess the number (1-10): "))
    attempts += 1
    
    if guess == secret:
        print(f"Correct! You won in {attempts} attempts!")
        break
    elif guess < secret:
        print("Too low!")
    else:
        print("Too high!")
else:
    print(f"Game over! The number was {secret}")`}
        />
      </LearningSection> */}

      {/* <LearningSection title="7️⃣ Common Patterns">
        <h3>Input Validation</h3>
        <CodeBlock
          code={`# Keep asking until valid input
while True:
    age = input("Enter your age: ")
    if age.isdigit() and int(age) > 0:
        age = int(age)
        print(f"Age accepted: {age}")
        break
    else:
        print("Invalid input. Please enter a positive number.")`}
        />

        <h3>Sum Until Sentinel Value</h3>
        <CodeBlock
          code={`# Sum numbers until user enters 0
total = 0
while True:
    num = int(input("Enter number (0 to stop): "))
    if num == 0:
        break
    total += num

print(f"Total: {total}")`}
        />

        <h3>Reading Until EOF</h3>
        <CodeBlock
          code={`# Read input until no more data
total = 0
try:
    while True:
        line = input()
        total += int(line)
except EOFError:
    print(f"Total: {total}")`}
        />
      </LearningSection> */}

      {/* <LearningSection title="8️⃣ do-while Loop Alternative">
        <p>🧠 Python doesn&apos;t have do-while, but you can simulate it.</p>
        
        <CodeBlock
          code={`# Simulate do-while (execute at least once)
while True:
    # Code to execute
    choice = input("Do you want to continue? (yes/no): ")
    
    # Check condition at the end
    if choice.lower() != 'yes':
        break

print("Loop ended")`}
        />

        <h3>Menu System</h3>
        <CodeBlock
          code={`# Menu shown at least once
while True:
    print("\\nMenu:")
    print("1. Add")
    print("2. Subtract")
    print("3. Exit")
    
    choice = input("Enter choice: ")
    
    if choice == '1':
        print("Addition selected")
    elif choice == '2':
        print("Subtraction selected")
    elif choice == '3':
        print("Goodbye!")
        break
    else:
        print("Invalid choice")`}
        />
      </LearningSection> */}

      <LearningSection title="Best Practices">
        <ul>
          <li>✅ Always ensure the loop condition can become False.</li>
          <li>✅ Update loop variables inside the loop body.</li>
          <li>✅ Use meaningful variable names for loop counters.</li>
          <li>✅ Use <code>break</code> for early exit when condition is met.</li>
          <li>✅ Consider using for loops if iterations are known.</li>
          <li>❌ Avoid infinite loops unless intentional (with proper exit).</li>
          <li>❌ Don&apos;t forget to update the condition variable.</li>
          <li>❌ Don&apos;t make loop conditions too complex.</li>
        </ul>
      </LearningSection>

      <LearningSection title="Practice Examples">
        <h3>Example 1: Factorial Calculator</h3>
        <CodeBlock
          code={`n = int(input("Enter a number: "))
factorial = 1
i = 1

while i <= n:
    factorial *= i
    i += 1

print(factorial)

# Input: 5
# Output: 5! = 120`}
        />

        <h3>Example 2: Reverse a Number</h3>
        <CodeBlock
          code={`num = int(input("Enter a number: "))
reversed_num = 0

while num > 0:
    digit = num % 10
    reversed_num = reversed_num * 10 + digit
    num = num // 10

print(reversed_num)

# Input: 12345
# Output: Reversed: 54321`}
        />

        <h3>Example 3: GCD Calculator</h3>
        <CodeBlock
          code={`# Greatest Common Divisor using Euclidean algorithm
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

while b != 0:
    temp = b
    b = a % b
    a = temp

print(a)

# Input: 48, 18
# Output: GCD: 6`}
        />

        <h3>Example 4: Fibonacci Series Up To n</h3>
        <CodeBlock
          code={`# Print Fibonacci numbers less than n
n = int(input("Enter limit: "))
a, b = 0, 1

print("Fibonacci series:")
while a < n:
    print(a, end=" ")
    a, b = b, a + b

print()  # New line

# Input: 50
# Output: Fibonacci series:
#         0 1 1 2 3 5 8 13 21 34`}
        />

        {/* <h3>Example 5: ATM Simulation</h3>
        <CodeBlock
          code={`balance = 1000

while True:
    print(f"\\nBalance: ${'{balance}'}")
    print("1. Deposit")
    print("2. Withdraw")
    print("3. Exit")
    
    choice = input("Enter choice: ")
    
    if choice == '1':
        amount = float(input("Enter deposit amount: "))
        if amount > 0:
            balance += amount
            print(f"Deposited ${'{amount:.2f}'}")
        else:
            print("Invalid amount")
    elif choice == '2':
        amount = float(input("Enter withdrawal amount: "))
        if 0 < amount <= balance:
            balance -= amount
            print(f"Withdrew ${'{amount:.2f}'}")
        else:
            print("Invalid amount or insufficient funds")
    elif choice == '3':
        print("Thank you for using our ATM!")
        break
    else:
        print("Invalid choice")

# Sample interaction:
# Balance: $1000
# 1. Deposit
# 2. Withdraw  
# 3. Exit
# Enter choice: 1
# Enter deposit amount: 500
# Deposited $500.00`}
        /> */}

        <h3>Example : Digital Root Calculator</h3>
        <CodeBlock
          code={`# Calculate digital root (sum digits until single digit)
num = int(input("Enter a number: "))

while num >= 10:
    digit_sum = 0
    while num > 0:
        digit_sum += num % 10
        num //= 10
    num = digit_sum

print(num)

# Input: 456
# Output: Digital root: 6 (4+5+6=15, 1+5=6)`}
        />
      </LearningSection>
    </div>
  );
};

export default WhileLoop;
