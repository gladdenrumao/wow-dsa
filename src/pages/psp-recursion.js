import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const PSPRecursion = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Recursion</h1>

      <div style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '0.5rem', border: '2px solid #3b82f6' }}>
        <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#1e40af' }}>📚 Lecture Notes</h2>
        <p style={{ margin: 0 }}>
          <a href="/pspnotes/Lecture 10 PPT.pptx.pdf" download style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: '500' }}>
            📥 Download Lecture 10 PDF
          </a>
        </p>
      </div>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 Recursion is when a function calls itself to solve a problem.</li>
          <li>🔹 Breaks down complex problems into simpler subproblems.</li>
          <li>✅ Every recursive function needs a <strong>base case</strong> to stop.</li>
          <li>✅ Every recursive function has a <strong>recursive case</strong> that calls itself.</li>
          <li>✅ Useful for problems with repetitive structure (trees, divide-and-conquer).</li>
          <li>⚠️ Can be memory-intensive due to function call stack.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Basic Structure">
        <p>🧠 All recursive functions follow this pattern.</p>
        
        <CodeBlock
          code={`def recursive_function(parameters):
    # Base case - stops recursion
    if base_condition:
        return base_value
    
    # Recursive case - calls itself
    # Problem gets smaller with each call
    return recursive_function(modified_parameters)`}
        />

        <h3>Simple Example: Countdown</h3>
        <CodeBlock
          code={`def countdown(n):
    # Base case
    if n <= 0:
        print("Done!")
        return
    
    # Recursive case
    print(n)
    countdown(n - 1)

countdown(5)
# Output: 5
#         4
#         3
#         2
#         1
#         Done!`}
        />
        <p>✅ Base case prevents infinite recursion.</p>
        <p>✅ Each recursive call moves closer to base case.</p>
      </LearningSection>

      <LearningSection title="3️⃣ Factorial (Classic Example)">
        <p>🧠 Factorial: n! = n × (n-1) × (n-2) × ... × 1</p>
        
        <CodeBlock
          code={`def factorial(n):
    # Base case
    if n == 0 or n == 1:
        return 1
    
    # Recursive case
    return n * factorial(n - 1)

# Test
print(factorial(5))  # Output: 120 (5×4×3×2×1)
print(factorial(0))  # Output: 1
print(factorial(1))  # Output: 1`}
        />

        <h3>How It Works (Call Stack)</h3>
        <CodeBlock
          code={`# factorial(5) execution:
# factorial(5) = 5 * factorial(4)
# factorial(4) = 4 * factorial(3)
# factorial(3) = 3 * factorial(2)
# factorial(2) = 2 * factorial(1)
# factorial(1) = 1 (base case)

# Unwinding:
# factorial(2) = 2 * 1 = 2
# factorial(3) = 3 * 2 = 6
# factorial(4) = 4 * 6 = 24
# factorial(5) = 5 * 24 = 120`}
        />
        <p>✅ Function calls stack up until base case is reached.</p>
        <p>✅ Then results are computed while unwinding.</p>
      </LearningSection>

      <LearningSection title="4️⃣ Fibonacci Sequence">
        <p>🧠 Fibonacci: F(n) = F(n-1) + F(n-2)</p>
        
        <CodeBlock
          code={`def fibonacci(n):
    # Base cases
    if n == 0:
        return 0
    if n == 1:
        return 1
    
    # Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2)

# Test
for i in range(8):
    print(f"F({i}) = {fibonacci(i)}")

# Output: F(0) = 0
#         F(1) = 1
#         F(2) = 1
#         F(3) = 2
#         F(4) = 3
#         F(5) = 5
#         F(6) = 8
#         F(7) = 13`}
        />
        <p>❌ This implementation is inefficient (exponential time).</p>
        <p>✅ Can be optimized with memoization (covered later).</p>
      </LearningSection>

      <LearningSection title="5️⃣ Sum of Numbers">
        <p>🧠 Calculate sum from 1 to n.</p>
        
        <CodeBlock
          code={`def sum_to_n(n):
    # Base case
    if n == 0:
        return 0
    
    # Recursive case
    return n + sum_to_n(n - 1)

# Test
print(sum_to_n(5))  # Output: 15 (5+4+3+2+1)
print(sum_to_n(10))  # Output: 55

# How it works for sum_to_n(5):
# sum_to_n(5) = 5 + sum_to_n(4)
# sum_to_n(4) = 4 + sum_to_n(3)
# sum_to_n(3) = 3 + sum_to_n(2)
# sum_to_n(2) = 2 + sum_to_n(1)
# sum_to_n(1) = 1 + sum_to_n(0)
# sum_to_n(0) = 0 (base case)
# Returns: 1, 3, 6, 10, 15`}
        />
      </LearningSection>

      <LearningSection title="6️⃣ Power Function">
        <p>🧠 Calculate x raised to power n.</p>
        
        <CodeBlock
          code={`def power(x, n):
    # Base case
    if n == 0:
        return 1
    
    # Recursive case
    return x * power(x, n - 1)

# Test
print(power(2, 5))  # Output: 32 (2^5)
print(power(3, 3))  # Output: 27 (3^3)
print(power(5, 0))  # Output: 1`}
        />

        <h3>Optimized Version (Divide and Conquer)</h3>
        <CodeBlock
          code={`def power_optimized(x, n):
    # Base case
    if n == 0:
        return 1
    
    # If n is even: x^n = (x^(n/2))^2
    if n % 2 == 0:
        half = power_optimized(x, n // 2)
        return half * half
    
    # If n is odd: x^n = x * x^(n-1)
    return x * power_optimized(x, n - 1)

print(power_optimized(2, 10))  # Output: 1024
# Much faster than linear recursion!`}
        />
        <p>✅ Optimized version reduces time complexity from O(n) to O(log n).</p>
      </LearningSection>

      <LearningSection title="7️⃣ String Manipulation">
        <h3>Reverse a String</h3>
        <CodeBlock
          code={`def reverse_string(s):
    # Base case
    if len(s) == 0:
        return ""
    
    # Recursive case: last char + reverse of rest
    return s[-1] + reverse_string(s[:-1])

# Test
print(reverse_string("hello"))  # Output: olleh
print(reverse_string("Python"))  # Output: nohtyP`}
        />

        <h3>Check Palindrome</h3>
        <CodeBlock
          code={`def is_palindrome(s):
    # Base cases
    if len(s) <= 1:
        return True
    
    # Check first and last characters
    if s[0] != s[-1]:
        return False
    
    # Recursive case: check middle part
    return is_palindrome(s[1:-1])

# Test
print(is_palindrome("racecar"))  # Output: True
print(is_palindrome("hello"))    # Output: False
print(is_palindrome("madam"))    # Output: True`}
        />
      </LearningSection>

      <LearningSection title="8️⃣ Sum of Digits">
        <p>🧠 Calculate sum of all digits in a number.</p>
        
        <CodeBlock
          code={`def sum_of_digits(n):
    # Base case
    if n == 0:
        return 0
    
    # Recursive case: last digit + sum of rest
    return (n % 10) + sum_of_digits(n // 10)

# Test
print(sum_of_digits(1234))  # Output: 10 (1+2+3+4)
print(sum_of_digits(999))   # Output: 27 (9+9+9)

# How it works for 1234:
# sum_of_digits(1234) = 4 + sum_of_digits(123)
# sum_of_digits(123) = 3 + sum_of_digits(12)
# sum_of_digits(12) = 2 + sum_of_digits(1)
# sum_of_digits(1) = 1 + sum_of_digits(0)
# sum_of_digits(0) = 0 (base case)
# Returns: 1, 3, 6, 10`}
        />
      </LearningSection>

      <LearningSection title="9️⃣ List Operations">
        <h3>Sum of List</h3>
        <CodeBlock
          code={`def list_sum(lst):
    # Base case
    if not lst:  # Empty list
        return 0
    
    # Recursive case: first element + sum of rest
    return lst[0] + list_sum(lst[1:])

# Test
print(list_sum([1, 2, 3, 4, 5]))  # Output: 15
print(list_sum([10, 20, 30]))     # Output: 60`}
        />

        <h3>Find Maximum</h3>
        <CodeBlock
          code={`def find_max(lst):
    # Base case
    if len(lst) == 1:
        return lst[0]
    
    # Recursive case: compare first with max of rest
    max_rest = find_max(lst[1:])
    return lst[0] if lst[0] > max_rest else max_rest

# Test
print(find_max([3, 7, 2, 9, 1]))  # Output: 9
print(find_max([10, 5, 15, 8]))   # Output: 15`}
        />

        <h3>Flatten Nested List</h3>
        <CodeBlock
          code={`def flatten(lst):
    result = []
    
    for item in lst:
        if isinstance(item, list):
            # Recursive case: flatten nested list
            result.extend(flatten(item))
        else:
            # Base case: add non-list item
            result.append(item)
    
    return result

# Test
nested = [1, [2, 3], [4, [5, 6]], 7]
print(flatten(nested))  # Output: [1, 2, 3, 4, 5, 6, 7]`}
        />
      </LearningSection>

      <LearningSection title="🔟 GCD (Greatest Common Divisor)">
        <p>🧠 Using Euclidean algorithm.</p>
        
        <CodeBlock
          code={`def gcd(a, b):
    # Base case
    if b == 0:
        return a
    
    # Recursive case: GCD(b, a mod b)
    return gcd(b, a % b)

# Test
print(gcd(48, 18))  # Output: 6
print(gcd(100, 35))  # Output: 5
print(gcd(17, 13))  # Output: 1

# How it works for gcd(48, 18):
# gcd(48, 18) = gcd(18, 48 % 18) = gcd(18, 12)
# gcd(18, 12) = gcd(12, 18 % 12) = gcd(12, 6)
# gcd(12, 6) = gcd(6, 12 % 6) = gcd(6, 0)
# gcd(6, 0) = 6 (base case)`}
        />
      </LearningSection>

      <LearningSection title="1️⃣1️⃣ Binary Search (Recursive)">
        <p>🧠 Search in sorted array using divide and conquer.</p>
        
        <CodeBlock
          code={`def binary_search(arr, target, left, right):
    # Base case: not found
    if left > right:
        return -1
    
    # Find middle
    mid = (left + right) // 2
    
    # Base case: found
    if arr[mid] == target:
        return mid
    
    # Recursive cases
    if arr[mid] > target:
        # Search left half
        return binary_search(arr, target, left, mid - 1)
    else:
        # Search right half
        return binary_search(arr, target, mid + 1, right)

# Test
arr = [1, 3, 5, 7, 9, 11, 13, 15]
target = 7
result = binary_search(arr, target, 0, len(arr) - 1)
print(f"Found at index: {result}")  # Output: Found at index: 3`}
        />
        <p>✅ Time complexity: O(log n) - very efficient!</p>
      </LearningSection>

      <LearningSection title="1️⃣2️⃣ Recursion vs Iteration">
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Recursion</th>
              <th>Iteration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Approach</td>
              <td>Function calls itself</td>
              <td>Uses loops</td>
            </tr>
            <tr>
              <td>Code</td>
              <td>Often simpler, elegant</td>
              <td>Can be more verbose</td>
            </tr>
            <tr>
              <td>Memory</td>
              <td>Uses call stack (more memory)</td>
              <td>Uses less memory</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>Generally slower</td>
              <td>Generally faster</td>
            </tr>
            <tr>
              <td>Best For</td>
              <td>Tree/graph traversal, divide-conquer</td>
              <td>Simple iterations</td>
            </tr>
          </tbody>
        </table>
        
        <h3>Factorial - Both Approaches</h3>
        <CodeBlock
          code={`# Recursive
def factorial_recursive(n):
    if n <= 1:
        return 1
    return n * factorial_recursive(n - 1)

# Iterative
def factorial_iterative(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

# Both give same result
print(factorial_recursive(5))  # Output: 120
print(factorial_iterative(5))  # Output: 120`}
        />
      </LearningSection>

      <LearningSection title="1️⃣3️⃣ Avoiding Stack Overflow">
        <p>🧠 Python has a recursion depth limit (usually ~1000).</p>
        
        <CodeBlock
          code={`import sys

# Check current limit
print(sys.getrecursionlimit())  # Output: 1000 (typical)

# ❌ This will cause stack overflow for large n
def bad_recursion(n):
    if n == 0:
        return 0
    return 1 + bad_recursion(n - 1)

# print(bad_recursion(2000))  # RecursionError!

# ✅ Use iteration for deep recursion
def iterative_version(n):
    count = 0
    while n > 0:
        count += 1
        n -= 1
    return count

print(iterative_version(2000))  # Works fine!`}
        />
        <p>⚠️ Be careful with deep recursion.</p>
        <p>✅ Use iteration for very deep calls.</p>
      </LearningSection>

      <LearningSection title="1️⃣4️⃣ Best Practices">
        <ul>
          <li>✅ Always define a clear base case.</li>
          <li>✅ Ensure recursive calls move toward base case.</li>
          <li>✅ Use recursion for naturally recursive problems (trees, graphs).</li>
          <li>✅ Consider iteration for simple repetitive tasks.</li>
          <li>✅ Add comments explaining base and recursive cases.</li>
          <li>❌ Don&apos;t use recursion without base case (infinite recursion).</li>
          <li>❌ Don&apos;t use recursion for very deep calls (stack overflow).</li>
          <li>❌ Don&apos;t ignore memory constraints.</li>
        </ul>
      </LearningSection>

      <LearningSection title="1️⃣5️⃣ Practice Examples">
        <h3>Example 1: Count Occurrences</h3>
        <CodeBlock
          code={`def count_occurrences(lst, target):
    # Base case: empty list
    if not lst:
        return 0
    
    # Recursive case
    count = 1 if lst[0] == target else 0
    return count + count_occurrences(lst[1:], target)

# Test
numbers = [1, 2, 3, 2, 4, 2, 5]
print(count_occurrences(numbers, 2))  # Output: 3
print(count_occurrences(numbers, 6))  # Output: 0`}
        />

        <h3>Example 2: Print Pattern</h3>
        <CodeBlock
          code={`def print_pattern(n):
    # Base case
    if n == 0:
        return
    
    # Print stars
    print("* " * n)
    
    # Recursive call
    print_pattern(n - 1)

print_pattern(5)
# Output: * * * * * 
#         * * * * 
#         * * * 
#         * * 
#         *`}
        />

        <h3>Example 3: Tower of Hanoi</h3>
        <CodeBlock
          code={`def tower_of_hanoi(n, source, auxiliary, target):
    # Base case
    if n == 1:
        print(f"Move disk 1 from {source} to {target}")
        return
    
    # Move n-1 disks from source to auxiliary
    tower_of_hanoi(n - 1, source, target, auxiliary)
    
    # Move largest disk from source to target
    print(f"Move disk {n} from {source} to {target}")
    
    # Move n-1 disks from auxiliary to target
    tower_of_hanoi(n - 1, auxiliary, source, target)

# Test with 3 disks
tower_of_hanoi(3, 'A', 'B', 'C')

# Output: Move disk 1 from A to C
#         Move disk 2 from A to B
#         Move disk 1 from C to B
#         Move disk 3 from A to C
#         Move disk 1 from B to A
#         Move disk 2 from B to C
#         Move disk 1 from A to C`}
        />

        <h3>Example 4: Generate Permutations</h3>
        <CodeBlock
          code={`def permutations(arr):
    # Base case: empty or single element
    if len(arr) <= 1:
        return [arr]
    
    result = []
    
    # For each element
    for i in range(len(arr)):
        # Fix current element
        current = arr[i]
        
        # Get remaining elements
        remaining = arr[:i] + arr[i+1:]
        
        # Generate permutations of remaining
        for perm in permutations(remaining):
            result.append([current] + perm)
    
    return result

# Test
print(permutations([1, 2, 3]))
# Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], 
#          [2, 3, 1], [3, 1, 2], [3, 2, 1]]`}
        />
      </LearningSection>
    </div>
  );
};

export default PSPRecursion;
