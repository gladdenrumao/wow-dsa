import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const Recursion = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Recursion</h1>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 Recursion is when a function calls itself to solve smaller subproblems.</li>
          <li>🔹 Every recursive function has:
            <ul>
              <li>✅ Base Case - Stops recursion</li>
              <li>✅ Recursive Case - Calls itself</li>
            </ul>
          </li>
          <li>✅ Used for problems that can be broken into smaller subproblems.</li>
          <li>✅ Reduces redundant code but may increase space complexity due to function call stack.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Factorial of a Number (Basic)">
        <p>🧠 Intuition: Factorial of a number follows: <code>n! = n * (n-1)!</code></p>
        <CodeBlock
          code={`def factorial(n): 
    if n == 0 or n == 1:  # Base Case 
        return 1 
    return n * factorial(n - 1)  # Recursive Case 
 
print(factorial(5))  # Output: 120`}
        />
      </LearningSection>

      <LearningSection title="3️⃣ Fibonacci Series (Basic)">
        <p>🧠 Intuition: Fibonacci sequence follows: <code>fib(n) = fib(n-1) + fib(n-2)</code></p>
        <CodeBlock
          code={`def fibonacci(n): 
    if n == 0 or n == 1:  # Base Case 
        return n 
    return fibonacci(n - 1) + fibonacci(n - 2)  # Recursive Case 
 
print(fibonacci(6))  # Output: 8`}
        />
        <p>❌ Inefficient (O(2ⁿ)), use Memoization for optimization.</p>
      </LearningSection>

      <LearningSection title="4️⃣ Sum of Digits (Intermediate)">
        <p>🧠 Intuition: Sum of digits follows: <code>sum(123) = 1 + sum(23)</code></p>
        <CodeBlock
          code={`def sum_of_digits(n): 
    if n == 0:  # Base Case 
        return 0 
    return (n % 10) + sum_of_digits(n // 10)  # Recursive Case 
 
print(sum_of_digits(1234))  # Output: 10 (1+2+3+4)`}
        />
      </LearningSection>

      <LearningSection title="5️⃣ Reverse a String (Intermediate)">
        <p>🧠 Intuition: Swap first and last characters recursively.</p>
        <CodeBlock
          code={`def reverse_string(s): 
    if len(s) == 0:  # Base Case 
        return "" 
    return s[-1] + reverse_string(s[:-1])  # Recursive Case 
 
print(reverse_string("hello"))  # Output: "olleh"`}
        />
      </LearningSection>

      <LearningSection title="6️⃣ Check if a String is Palindrome (Intermediate)">
        <p>🧠 Intuition: Compare first and last characters, then move inward.</p>
        <CodeBlock
          code={`def is_palindrome(s): 
    if len(s) <= 1:  # Base Case 
        return True 
    if s[0] != s[-1]:  # If mismatch, return False 
        return False 
    return is_palindrome(s[1:-1])  # Recursive Case 
 
print(is_palindrome("racecar"))  # Output: True`}
        />
      </LearningSection>

      <LearningSection title="7️⃣ Tower of Hanoi (Classic)">
        <p>🧠 Intuition: Move <code>n-1</code> disks to auxiliary rod, move last disk, then move <code>n-1</code> disks back.</p>
        <CodeBlock
          code={`def tower_of_hanoi(n, source, auxiliary, target): 
    if n == 1: 
        print(f"Move disk {n} from {source} to {target}") 
        return 
    tower_of_hanoi(n - 1, source, target, auxiliary) 
    print(f"Move disk {n} from {source} to {target}") 
    tower_of_hanoi(n - 1, auxiliary, source, target) 
 
tower_of_hanoi(3, 'A', 'B', 'C')`}
        />
        <p>✅ Time Complexity: O(2ⁿ)</p>
      </LearningSection>

      <LearningSection title="8️⃣ Climbing Stairs (Dynamic Recursion)">
        <p>🧠 Intuition: You can climb 1 or 2 steps at a time.</p>
        <CodeBlock
          code={`def climb_stairs(n): 
    if n == 0 or n == 1:  # Base Case 
        return 1 
    return climb_stairs(n - 1) + climb_stairs(n - 2)  # Recursive Case 
 
print(climb_stairs(4))  # Output: 5`}
        />
        <p>✅ Similar to Fibonacci Series (O(2ⁿ)), use Memoization for O(n) optimization.</p>
      </LearningSection>

      <LearningSection title="9️⃣ Frog Jump (Optimized Dynamic Recursion)">
        <p>🧠 Intuition: A frog can jump 1 or 2 steps at a time.  
          Cost of reaching a step = min cost of previous two steps + current step's cost.</p>
        <CodeBlock
          code={`def frog_jump(cost, n): 
    if n == 0:  # Base Case 
        return 0 
    if n == 1: 
        return abs(cost[1] - cost[0]) 
    return min(frog_jump(cost, n-1) + abs(cost[n] - cost[n-1]), 
               frog_jump(cost, n-2) + abs(cost[n] - cost[n-2]))  # Recursive Case 
 
cost = [10, 30, 40, 20] 
print(frog_jump(cost, len(cost)-1))  # Output: Minimum cost to reach the last step`}
        />
      </LearningSection>
    </div>
  );
};

export default Recursion;
