import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const Backtracking = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Backtracking</h1>

      <LearningSection title="1️⃣ Introduction to Backtracking">
        <ul>
          <li>🔹 Backtracking is an algorithmic technique for solving problems <strong>incrementally</strong>.</li>
          <li>🔹 It tries to build a solution step by step and <strong>removes (backtracks)</strong> solutions that fail to satisfy constraints.</li>
          <li>🔹 Often implemented using <strong>recursion</strong>.</li>
          <li>🔹 Used when you need to explore all possible solutions (brute force with pruning).</li>
        </ul>
        <p><strong>Key Concepts:</strong></p>
        <ul>
          <li>🔸 <strong>Choice</strong>: At each step, make a choice from available options.</li>
          <li>🔸 <strong>Constraint</strong>: Check if the current choice is valid.</li>
          <li>🔸 <strong>Goal</strong>: Check if we've reached a solution.</li>
          <li>🔸 <strong>Backtrack</strong>: If current path doesn't lead to solution, undo the choice and try another.</li>
        </ul>
        <p>✅ Think of it as exploring a maze - if you hit a dead end, you go back and try another path.</p>
      </LearningSection>

      <LearningSection title="2️⃣ Backtracking Template">
        <p>🧠 General structure of a backtracking algorithm:</p>
        <CodeBlock
          code={`def backtrack(state, choices, result):
    # Base case: Check if we've reached a valid solution
    if is_goal(state):
        result.append(state.copy())
        return
    
    # Try all possible choices
    for choice in choices:
        # Make choice
        if is_valid(state, choice):
            state.append(choice)
            
            # Recurse with new state
            backtrack(state, get_next_choices(choice), result)
            
            # Backtrack: undo choice
            state.pop()
    
    return result`}
        />
        <p>✅ The key is the <strong>choose-explore-unchoose</strong> pattern.</p>
      </LearningSection>

      <LearningSection title="3️⃣ Generate All Subsets">
        <p>🧠 Generate all possible subsets of a given set.</p>
        <CodeBlock
          code={`def subsets(nums):
    result = []
    
    def backtrack(start, current):
        # Add current subset to result
        result.append(current[:])
        
        # Try adding each remaining element
        for i in range(start, len(nums)):
            # Choose
            current.append(nums[i])
            
            # Explore
            backtrack(i + 1, current)
            
            # Unchoose (backtrack)
            current.pop()
    
    backtrack(0, [])
    return result

# Example
nums = [1, 2, 3]
print(subsets(nums))
# Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]`}
        />
        <p>✅ Time Complexity: O(2ⁿ) - each element can be included or excluded</p>
        <p>✅ Space Complexity: O(n) for recursion depth</p>
      </LearningSection>

      <LearningSection title="4️⃣ Generate All Permutations">
        <p>🧠 Generate all possible arrangements of elements.</p>
        <CodeBlock
          code={`def permutations(nums):
    result = []
    
    def backtrack(current, remaining):
        # Base case: no more elements to add
        if not remaining:
            result.append(current[:])
            return
        
        # Try each remaining element
        for i in range(len(remaining)):
            # Choose
            current.append(remaining[i])
            
            # Explore with remaining elements (excluding current)
            backtrack(current, remaining[:i] + remaining[i+1:])
            
            # Unchoose (backtrack)
            current.pop()
    
    backtrack([], nums)
    return result

# Example
nums = [1, 2, 3]
print(permutations(nums))
# Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]`}
        />
        <p>✅ Time Complexity: O(n! × n) - n! permutations, each takes O(n) to build</p>
        <p>✅ Space Complexity: O(n) for recursion depth</p>
      </LearningSection>

      <LearningSection title="5️⃣ Combination Sum">
        <p>🧠 Find all unique combinations that sum to a target value.</p>
        <CodeBlock
          code={`def combination_sum(candidates, target):
    result = []
    
    def backtrack(start, current, current_sum):
        # Base case: found valid combination
        if current_sum == target:
            result.append(current[:])
            return
        
        # Pruning: if sum exceeds target, no point continuing
        if current_sum > target:
            return
        
        # Try each candidate starting from 'start'
        for i in range(start, len(candidates)):
            # Choose
            current.append(candidates[i])
            
            # Explore (can reuse same element, so pass i not i+1)
            backtrack(i, current, current_sum + candidates[i])
            
            # Unchoose (backtrack)
            current.pop()
    
    backtrack(0, [], 0)
    return result

# Example
candidates = [2, 3, 6, 7]
target = 7
print(combination_sum(candidates, target))
# Output: [[2, 2, 3], [7]]`}
        />
        <p>✅ Elements can be reused multiple times</p>
        <p>✅ Pruning optimization: stop if current_sum &gt; target</p>
      </LearningSection>

      <LearningSection title="6️⃣ N-Queens Problem">
        <p>🧠 Place N queens on an N×N chessboard so that no two queens attack each other.</p>
        <CodeBlock
          code={`def solve_n_queens(n):
    result = []
    board = [['.'] * n for _ in range(n)]
    
    def is_safe(row, col):
        # Check column
        for i in range(row):
            if board[i][col] == 'Q':
                return False
        
        # Check upper-left diagonal
        i, j = row - 1, col - 1
        while i >= 0 and j >= 0:
            if board[i][j] == 'Q':
                return False
            i -= 1
            j -= 1
        
        # Check upper-right diagonal
        i, j = row - 1, col + 1
        while i >= 0 and j < n:
            if board[i][j] == 'Q':
                return False
            i -= 1
            j += 1
        
        return True
    
    def backtrack(row):
        # Base case: all queens placed
        if row == n:
            result.append([''.join(row) for row in board])
            return
        
        # Try placing queen in each column
        for col in range(n):
            if is_safe(row, col):
                # Choose
                board[row][col] = 'Q'
                
                # Explore
                backtrack(row + 1)
                
                # Unchoose (backtrack)
                board[row][col] = '.'
    
    backtrack(0)
    return result

# Example
n = 4
solutions = solve_n_queens(n)
print(f"Number of solutions for {n}-Queens: {len(solutions)}")
for solution in solutions:
    for row in solution:
        print(row)
    print()
# Output: 2 solutions for 4-Queens`}
        />
        <p>✅ Classic backtracking problem</p>
        <p>✅ Time Complexity: O(n!)</p>
      </LearningSection>

      <LearningSection title="7️⃣ Sudoku Solver">
        <p>🧠 Fill a 9×9 Sudoku board following the rules.</p>
        <CodeBlock
          code={`def solve_sudoku(board):
    def is_valid(board, row, col, num):
        # Check row
        if num in board[row]:
            return False
        
        # Check column
        if num in [board[i][col] for i in range(9)]:
            return False
        
        # Check 3x3 box
        start_row, start_col = 3 * (row // 3), 3 * (col // 3)
        for i in range(start_row, start_row + 3):
            for j in range(start_col, start_col + 3):
                if board[i][j] == num:
                    return False
        
        return True
    
    def backtrack():
        # Find next empty cell
        for i in range(9):
            for j in range(9):
                if board[i][j] == '.':
                    # Try digits 1-9
                    for num in '123456789':
                        if is_valid(board, i, j, num):
                            # Choose
                            board[i][j] = num
                            
                            # Explore
                            if backtrack():
                                return True
                            
                            # Unchoose (backtrack)
                            board[i][j] = '.'
                    
                    # No valid number found
                    return False
        
        # All cells filled
        return True
    
    backtrack()
    return board

# Example (simplified)
board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

solve_sudoku(board)
# Board is solved in-place`}
        />
        <p>✅ Constraint: Each row, column, and 3×3 box must contain digits 1-9 without repetition</p>
      </LearningSection>

      <LearningSection title="8️⃣ Word Search">
        <p>🧠 Find if a word exists in a 2D grid by moving up, down, left, or right.</p>
        <CodeBlock
          code={`def word_search(board, word):
    rows, cols = len(board), len(board[0])
    
    def backtrack(r, c, index):
        # Base case: word found
        if index == len(word):
            return True
        
        # Out of bounds or character mismatch
        if (r < 0 or r >= rows or c < 0 or c >= cols or 
            board[r][c] != word[index]):
            return False
        
        # Choose (mark as visited)
        temp = board[r][c]
        board[r][c] = '#'
        
        # Explore all 4 directions
        found = (backtrack(r + 1, c, index + 1) or
                backtrack(r - 1, c, index + 1) or
                backtrack(r, c + 1, index + 1) or
                backtrack(r, c - 1, index + 1))
        
        # Unchoose (backtrack)
        board[r][c] = temp
        
        return found
    
    # Try starting from each cell
    for i in range(rows):
        for j in range(cols):
            if backtrack(i, j, 0):
                return True
    
    return False

# Example
board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
]
word = "ABCCED"
print(word_search(board, word))  # Output: True`}
        />
        <p>✅ Mark visited cells to avoid reusing in same path</p>
        <p>✅ Restore cell value after exploring (backtrack)</p>
      </LearningSection>

      <LearningSection title="9️⃣ Palindrome Partitioning">
        <p>🧠 Partition a string such that every substring is a palindrome.</p>
        <CodeBlock
          code={`def partition_palindrome(s):
    result = []
    
    def is_palindrome(string):
        return string == string[::-1]
    
    def backtrack(start, current):
        # Base case: reached end of string
        if start == len(s):
            result.append(current[:])
            return
        
        # Try all possible partitions
        for end in range(start + 1, len(s) + 1):
            substring = s[start:end]
            if is_palindrome(substring):
                # Choose
                current.append(substring)
                
                # Explore
                backtrack(end, current)
                
                # Unchoose (backtrack)
                current.pop()
    
    backtrack(0, [])
    return result

# Example
s = "aab"
print(partition_palindrome(s))
# Output: [['a', 'a', 'b'], ['aa', 'b']]`}
        />
      </LearningSection>

      <LearningSection title="🔟 Summary">
        <ul>
          <li>✅ Backtracking explores all possible solutions by building incrementally.</li>
          <li>✅ Core pattern: <strong>Choose → Explore → Unchoose</strong></li>
          <li>✅ Use pruning to avoid exploring invalid paths (optimization).</li>
          <li>✅ Common applications: permutations, combinations, puzzles, constraint satisfaction.</li>
          <li>✅ Usually has exponential time complexity but can be optimized with pruning.</li>
          <li>✅ Requires understanding of recursion and state management.</li>
        </ul>
      </LearningSection>

      <LearningSection title="1️⃣1️⃣ Practice Problems">
        <ul>
          <li>🔸 Letter Combinations of a Phone Number</li>
          <li>🔸 Generate Parentheses</li>
          <li>🔸 Combination Sum II (with duplicates)</li>
          <li>🔸 Subsets II (with duplicates)</li>
          <li>🔸 Restore IP Addresses</li>
          <li>🔸 Word Break II</li>
          <li>🔸 Rat in a Maze</li>
          <li>🔸 M-Coloring Problem</li>
        </ul>
      </LearningSection>
    </div>
  );
};

export default Backtracking;
