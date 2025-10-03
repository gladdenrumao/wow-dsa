import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const DP = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Dynamic Programming (DP)</h1>

      <LearningSection title="1️⃣ Introduction to Dynamic Programming">
        <ul>
          <li>🔹 Dynamic Programming is an optimization technique that solves complex problems by breaking them into <strong>overlapping subproblems</strong>.</li>
          <li>🔹 Stores solutions to subproblems to avoid redundant calculations (<strong>memoization</strong>).</li>
          <li>🔹 Transforms exponential time complexity to polynomial time.</li>
          <li>🔹 Two main approaches: <strong>Top-Down (Memoization)</strong> and <strong>Bottom-Up (Tabulation)</strong>.</li>
        </ul>
        <p><strong>Key Characteristics:</strong></p>
        <ul>
          <li>🔸 <strong>Optimal Substructure</strong>: Optimal solution can be built from optimal solutions of subproblems.</li>
          <li>🔸 <strong>Overlapping Subproblems</strong>: Same subproblems are solved multiple times.</li>
        </ul>
        <p>✅ If a problem has both properties, DP can be applied!</p>
      </LearningSection>

      <LearningSection title="2️⃣ Top-Down vs Bottom-Up Approach">
        <h3>Top-Down (Memoization)</h3>
        <p>🧠 Start with the original problem and recursively break it down, storing results in a cache.</p>
        <ul>
          <li>✅ Uses recursion + caching</li>
          <li>✅ More intuitive, similar to recursive thinking</li>
          <li>❌ May cause stack overflow for deep recursion</li>
        </ul>

        <h3>Bottom-Up (Tabulation)</h3>
        <p>🧠 Start with the smallest subproblems and build up to the original problem.</p>
        <ul>
          <li>✅ Uses iteration + table/array</li>
          <li>✅ No recursion overhead</li>
          <li>✅ Better space optimization possible</li>
          <li>❌ May be less intuitive initially</li>
        </ul>
      </LearningSection>

      <LearningSection title="3️⃣ Fibonacci Sequence">
        <h3>Recursive Solution (Inefficient - O(2ⁿ))</h3>
        <CodeBlock
          code={`def fibonacci_recursive(n):
    if n <= 1:
        return n
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)

print(fibonacci_recursive(6))  # Output: 8
# Problem: Recalculates same values many times!`}
        />

        <h3>Top-Down DP (Memoization)</h3>
        <CodeBlock
          code={`def fibonacci_memo(n, memo={}):
    if n in memo:
        return memo[n]
    
    if n <= 1:
        return n
    
    memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
    return memo[n]

print(fibonacci_memo(6))  # Output: 8
# Time: O(n), Space: O(n)`}
        />

        <h3>Bottom-Up DP (Tabulation)</h3>
        <CodeBlock
          code={`def fibonacci_dp(n):
    if n <= 1:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    
    return dp[n]

print(fibonacci_dp(6))  # Output: 8
# Time: O(n), Space: O(n)`}
        />

        <h3>Space Optimized</h3>
        <CodeBlock
          code={`def fibonacci_optimized(n):
    if n <= 1:
        return n
    
    prev2, prev1 = 0, 1
    
    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    
    return prev1

print(fibonacci_optimized(6))  # Output: 8
# Time: O(n), Space: O(1)`}
        />
      </LearningSection>

      <LearningSection title="4️⃣ Climbing Stairs">
        <p>🧠 You can climb 1 or 2 steps at a time. How many ways to reach the top?</p>
        <CodeBlock
          code={`def climb_stairs(n):
    if n <= 2:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2
    
    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    
    return dp[n]

print(climb_stairs(5))  # Output: 8
# Same as Fibonacci pattern!
# Time: O(n), Space: O(n)`}
        />
        <p>✅ Can be space-optimized to O(1) like Fibonacci</p>
      </LearningSection>

      <LearningSection title="5️⃣ 0/1 Knapsack Problem">
        <p>🧠 Given weights and values of items, maximize value in a knapsack of capacity W.</p>
        <CodeBlock
          code={`def knapsack(weights, values, capacity):
    n = len(weights)
    # dp[i][w] = max value using first i items with capacity w
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            # Option 1: Don't include current item
            dp[i][w] = dp[i - 1][w]
            
            # Option 2: Include current item (if it fits)
            if weights[i - 1] <= w:
                dp[i][w] = max(
                    dp[i][w],
                    values[i - 1] + dp[i - 1][w - weights[i - 1]]
                )
    
    return dp[n][capacity]

# Example
weights = [1, 2, 3]
values = [60, 100, 120]
capacity = 5
print(knapsack(weights, values, capacity))  # Output: 220
# Time: O(n × W), Space: O(n × W)`}
        />

        <h3>Space Optimized (1D DP)</h3>
        <CodeBlock
          code={`def knapsack_optimized(weights, values, capacity):
    dp = [0] * (capacity + 1)
    
    for i in range(len(weights)):
        # Traverse backwards to avoid using updated values
        for w in range(capacity, weights[i] - 1, -1):
            dp[w] = max(dp[w], values[i] + dp[w - weights[i]])
    
    return dp[capacity]

# Example
weights = [1, 2, 3]
values = [60, 100, 120]
capacity = 5
print(knapsack_optimized(weights, values, capacity))  # Output: 220
# Time: O(n × W), Space: O(W)`}
        />
      </LearningSection>

      <LearningSection title="6️⃣ Longest Common Subsequence (LCS)">
        <p>🧠 Find the length of the longest subsequence common to two strings.</p>
        <CodeBlock
          code={`def lcs(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = 1 + dp[i - 1][j - 1]
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    
    return dp[m][n]

# Example
text1 = "abcde"
text2 = "ace"
print(lcs(text1, text2))  # Output: 3 (ace)
# Time: O(m × n), Space: O(m × n)`}
        />
      </LearningSection>

      <LearningSection title="7️⃣ Longest Increasing Subsequence (LIS)">
        <p>🧠 Find the length of the longest strictly increasing subsequence.</p>
        <CodeBlock
          code={`def longest_increasing_subsequence(nums):
    if not nums:
        return 0
    
    n = len(nums)
    dp = [1] * n  # Each element is a subsequence of length 1
    
    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    return max(dp)

# Example
nums = [10, 9, 2, 5, 3, 7, 101, 18]
print(longest_increasing_subsequence(nums))  # Output: 4 ([2, 3, 7, 101])
# Time: O(n²), Space: O(n)`}
        />
      </LearningSection>

      <LearningSection title="8️⃣ Coin Change Problem">
        <h3>Minimum Coins</h3>
        <p>🧠 Find minimum number of coins needed to make a given amount.</p>
        <CodeBlock
          code={`def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # 0 coins needed for amount 0
    
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1

# Example
coins = [1, 2, 5]
amount = 11
print(coin_change(coins, amount))  # Output: 3 (5 + 5 + 1)
# Time: O(amount × coins), Space: O(amount)`}
        />

        <h3>Number of Ways</h3>
        <p>🧠 Count number of ways to make a given amount.</p>
        <CodeBlock
          code={`def coin_change_ways(coins, amount):
    dp = [0] * (amount + 1)
    dp[0] = 1  # 1 way to make amount 0 (use no coins)
    
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] += dp[i - coin]
    
    return dp[amount]

# Example
coins = [1, 2, 5]
amount = 5
print(coin_change_ways(coins, amount))  # Output: 4
# Ways: [1,1,1,1,1], [1,1,1,2], [1,2,2], [5]
# Time: O(amount × coins), Space: O(amount)`}
        />
      </LearningSection>

      <LearningSection title="9️⃣ Edit Distance">
        <p>🧠 Minimum operations (insert, delete, replace) to convert one string to another.</p>
        <CodeBlock
          code={`def edit_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Base cases
    for i in range(m + 1):
        dp[i][0] = i  # Delete all characters
    for j in range(n + 1):
        dp[0][j] = j  # Insert all characters
    
    # Fill the DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]  # No operation needed
            else:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],      # Delete
                    dp[i][j - 1],      # Insert
                    dp[i - 1][j - 1]   # Replace
                )
    
    return dp[m][n]

# Example
word1 = "horse"
word2 = "ros"
print(edit_distance(word1, word2))  # Output: 3
# horse -> rorse (replace h with r)
# rorse -> rose (remove r)
# rose -> ros (remove e)
# Time: O(m × n), Space: O(m × n)`}
        />
      </LearningSection>

      <LearningSection title="🔟 Matrix Chain Multiplication">
        <p>🧠 Find minimum number of multiplications needed to multiply a chain of matrices.</p>
        <CodeBlock
          code={`def matrix_chain_order(dimensions):
    n = len(dimensions) - 1  # Number of matrices
    dp = [[0] * n for _ in range(n)]
    
    # l is chain length
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            
            # Try all possible split points
            for k in range(i, j):
                cost = (dp[i][k] + dp[k + 1][j] + 
                       dimensions[i] * dimensions[k + 1] * dimensions[j + 1])
                dp[i][j] = min(dp[i][j], cost)
    
    return dp[0][n - 1]

# Example: 3 matrices with dimensions
# A1: 10x20, A2: 20x30, A3: 30x40
dimensions = [10, 20, 30, 40]
print(matrix_chain_order(dimensions))  # Output: 18000
# Time: O(n³), Space: O(n²)`}
        />
      </LearningSection>

      <LearningSection title="1️⃣1️⃣ Subset Sum Problem">
        <p>🧠 Check if there's a subset with a given sum.</p>
        <CodeBlock
          code={`def subset_sum(nums, target):
    n = len(nums)
    # dp[i][j] = True if sum j can be achieved using first i elements
    dp = [[False] * (target + 1) for _ in range(n + 1)]
    
    # Base case: sum 0 can always be achieved (empty subset)
    for i in range(n + 1):
        dp[i][0] = True
    
    for i in range(1, n + 1):
        for j in range(target + 1):
            # Don't include current element
            dp[i][j] = dp[i - 1][j]
            
            # Include current element (if it fits)
            if nums[i - 1] <= j:
                dp[i][j] = dp[i][j] or dp[i - 1][j - nums[i - 1]]
    
    return dp[n][target]

# Example
nums = [3, 34, 4, 12, 5, 2]
target = 9
print(subset_sum(nums, target))  # Output: True (4 + 5)
# Time: O(n × target), Space: O(n × target)`}
        />
      </LearningSection>

      <LearningSection title="1️⃣2️⃣ Summary">
        <ul>
          <li>✅ DP optimizes recursive solutions by storing subproblem results.</li>
          <li>✅ Identify: Optimal substructure + Overlapping subproblems.</li>
          <li>✅ Top-Down (Memoization): Recursion + Cache</li>
          <li>✅ Bottom-Up (Tabulation): Iteration + Table</li>
          <li>✅ Often can optimize space from O(n²) to O(n) or O(1)</li>
          <li>✅ Common patterns: Fibonacci, Knapsack, LCS, LIS, Coin Change</li>
        </ul>
      </LearningSection>

      <LearningSection title="1️⃣3️⃣ Practice Problems">
        <ul>
          <li>🔸 House Robber (I & II)</li>
          <li>🔸 Partition Equal Subset Sum</li>
          <li>🔸 Palindromic Substrings</li>
          <li>🔸 Longest Palindromic Subsequence</li>
          <li>🔸 Decode Ways</li>
          <li>🔸 Unique Paths (Grid)</li>
          <li>🔸 Maximum Subarray (Kadane's Algorithm)</li>
          <li>🔸 Best Time to Buy and Sell Stock (with variations)</li>
          <li>🔸 Word Break</li>
          <li>🔸 Egg Dropping Problem</li>
        </ul>
      </LearningSection>
    </div>
  );
};

export default DP;
