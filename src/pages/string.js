import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const String = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">String</h1>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 Strings are sequences of characters enclosed in quotes.</li>
          <li>🔹 Strings are immutable - cannot be changed after creation.</li>
          <li>✅ Can use single quotes <code>&apos;</code>, double quotes <code>&quot;</code>, or triple quotes <code>&quot;&quot;&quot;</code>.</li>
          <li>✅ Support indexing, slicing, and iteration.</li>
          <li>✅ Rich set of built-in methods for manipulation.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Creating Strings">
        <CodeBlock
          code={`# Single quotes
text1 = 'Hello, World!'
print(text1)  # Output: Hello, World!

# Double quotes
text2 = "Python Programming"
print(text2)  # Output: Python Programming

# Triple quotes (multi-line)
text3 = """This is a
multi-line
string"""
print(text3)

# Empty string
empty = ""
print(len(empty))  # Output: 0

# String with quotes inside
quote1 = "He said, 'Hello!'"
quote2 = 'She said, "Hi!"'
print(quote1)  # Output: He said, 'Hello!'
print(quote2)  # Output: She said, "Hi!"`}
        />
        <p>✅ Use triple quotes for multi-line strings or docstrings.</p>
      </LearningSection>

      <LearningSection title="3️⃣ String Indexing and Slicing">
        <p>🧠 Access characters using indices (0-based).</p>
        
        <h3>Indexing</h3>
        <CodeBlock
          code={`text = "Python"

# Positive indexing
print(text[0])   # Output: P
print(text[2])   # Output: t

# Negative indexing
print(text[-1])  # Output: n
print(text[-2])  # Output: o`}
        />

        <h3>Slicing</h3>
        <CodeBlock
          code={`text = "Hello, World!"

# [start:stop]
print(text[0:5])   # Output: Hello

# [start:stop:step]
print(text[0:12:2]) # Output: Hlo ol

# From start
print(text[:5])    # Output: Hello

# To end
print(text[7:])    # Output: World!

# Reverse
print(text[::-1])  # Output: !dlroW ,olleH

# Every second character
print(text[::2])   # Output: Hlo ol!`}
        />
        <p>✅ Slicing returns a new string (doesn&apos;t modify original).</p>
      </LearningSection>

      <LearningSection title="4️⃣ String Concatenation and Repetition">
        <CodeBlock
          code={`# Concatenation with +
first = "Hello"
last = "World"
full = first + " " + last
print(full)  # Output: Hello World

# Repetition with *
laugh = "Ha" * 3
print(laugh)  # Output: HaHaHa

# Multiple concatenation
greeting = "Hello" + " " + "World" + "!"
print(greeting)  # Output: Hello World!

# Using join() for multiple strings
words = ["Python", "is", "awesome"]
sentence = " ".join(words)
print(sentence)  # Output: Python is awesome`}
        />
        <p>✅ Use <code>join()</code> for concatenating many strings (more efficient).</p>
      </LearningSection>

      <LearningSection title="5️⃣ String Methods - Case Conversion">
        <CodeBlock
          code={`text = "Hello World"

# upper() - convert to uppercase
print(text.upper())  # Output: HELLO WORLD

# lower() - convert to lowercase
print(text.lower())  # Output: hello world

# capitalize() - first letter uppercase
print(text.capitalize())  # Output: Hello world

# title() - first letter of each word uppercase
print(text.title())  # Output: Hello World

# swapcase() - swap case
print(text.swapcase())  # Output: hELLO wORLD

# casefold() - aggressive lowercase (for comparisons)
print(text.casefold())  # Output: hello world`}
        />
      </LearningSection>

      <LearningSection title="6️⃣ String Methods - Searching and Checking">
        <CodeBlock
          code={`text = "Python Programming"

# find() - find substring (returns index or -1)
print(text.find("Pro"))  # Output: 7
print(text.find("Java"))  # Output: -1

# index() - find substring (raises error if not found)
print(text.index("Pro"))  # Output: 7

# count() - count occurrences
print(text.count("m"))  # Output: 2

# startswith() - check if starts with substring
print(text.startswith("Py"))  # Output: True

# endswith() - check if ends with substring
print(text.endswith("ing"))  # Output: True

# in operator - check membership
print("Python" in text)  # Output: True
print("Java" in text)    # Output: False`}
        />
        <p>✅ Use <code>find()</code> when you want -1 for not found.</p>
        <p>✅ Use <code>index()</code> when you want an exception for not found.</p>
      </LearningSection>

      <LearningSection title="7️⃣ String Methods - Trimming and Padding">
        <CodeBlock
          code={`# strip() - remove leading/trailing whitespace
text = "  Hello World  "
print(text.strip())  # Output: Hello World

# lstrip() - remove leading whitespace
print(text.lstrip())  # Output: Hello World  

# rstrip() - remove trailing whitespace
print(text.rstrip())  # Output:   Hello World

# Remove specific characters
text2 = "###Hello###"
print(text2.strip("#"))  # Output: Hello

# center() - center text with padding
print("Python".center(20, "*"))  # Output: *******Python*******

# ljust() - left justify
print("Python".ljust(10, "-"))  # Output: Python----

# rjust() - right justify
print("Python".rjust(10, "-"))  # Output: ----Python

# zfill() - pad with zeros
print("42".zfill(5))  # Output: 00042`}
        />
      </LearningSection>

      <LearningSection title="8️⃣ String Methods - Splitting and Joining">
        <CodeBlock
          code={`# split() - split by delimiter
text = "apple,banana,cherry"
fruits = text.split(",")
print(fruits)  # Output: ['apple', 'banana', 'cherry']

# split() with whitespace (default)
sentence = "Python is awesome"
words = sentence.split()
print(words)  # Output: ['Python', 'is', 'awesome']

# rsplit() - split from right
text = "a-b-c-d"
parts = text.rsplit("-", 2)  # Split last 2 occurrences
print(parts)  # Output: ['a-b', 'c', 'd']

# splitlines() - split by newlines
multiline = "Line 1\\nLine 2\\nLine 3"
lines = multiline.splitlines()
print(lines)  # Output: ['Line 1', 'Line 2', 'Line 3']

# join() - join list into string
words = ["Python", "is", "great"]
sentence = " ".join(words)
print(sentence)  # Output: Python is great

# Join with different separator
numbers = ["1", "2", "3", "4"]
result = "-".join(numbers)
print(result)  # Output: 1-2-3-4`}
        />
        <p>✅ <code>split()</code> and <code>join()</code> are inverses of each other.</p>
      </LearningSection>

      <LearningSection title="9️⃣ String Methods - Replacing">
        <CodeBlock
          code={`text = "Hello World, World!"

# replace() - replace all occurrences
new_text = text.replace("World", "Python")
print(new_text)  # Output: Hello Python, Python!

# replace() with count
text2 = "one two one two one"
result = text2.replace("one", "1", 2)  # Replace first 2
print(result)  # Output: 1 two 1 two one

# Multiple replacements
text3 = "I like apples"
text3 = text3.replace("I", "We").replace("like", "love")
print(text3)  # Output: We love apples`}
        />
      </LearningSection>

      <LearningSection title="🔟 String Validation Methods">
        <CodeBlock
          code={`# isalpha() - all alphabetic
print("Hello".isalpha())    # Output: True
print("Hello123".isalpha()) # Output: False

# isdigit() - all digits
print("12345".isdigit())    # Output: True
print("123.45".isdigit())   # Output: False

# isalnum() - alphanumeric
print("Hello123".isalnum()) # Output: True
print("Hello 123".isalnum()) # Output: False

# isspace() - all whitespace
print("   ".isspace())      # Output: True
print("  a ".isspace())     # Output: False

# isupper() - all uppercase
print("HELLO".isupper())    # Output: True
print("Hello".isupper())    # Output: False

# islower() - all lowercase
print("hello".islower())    # Output: True
print("Hello".islower())    # Output: False

# istitle() - title case
print("Hello World".istitle()) # Output: True
print("Hello world".istitle()) # Output: False`}
        />
      </LearningSection>

      <LearningSection title="1️⃣1️⃣ String Formatting">
        <h3>f-strings (Python 3.6+) - Recommended</h3>
        <CodeBlock
          code={`name = "Alice"
age = 25
pi = 3.14159

# Basic f-string
print(f"Name: {name}, Age: {age}")
# Output: Name: Alice, Age: 25

# Expressions inside f-strings
print(f"Next year: {age + 1}")
# Output: Next year: 26

# Format specifiers
print(f"Pi: {pi:.2f}")  # 2 decimal places
# Output: Pi: 3.14

# Padding and alignment
print(f"{name:>10}")  # Right align, width 10
# Output:      Alice

print(f"{name:<10}")  # Left align
# Output: Alice     

print(f"{name:^10}")  # Center align
# Output:   Alice`}
        />

        <h3>format() Method</h3>
        <CodeBlock
          code={`# Positional arguments
print("{} is {} years old".format("Bob", 30))
# Output: Bob is 30 years old

# Named arguments
print("{name} is {age} years old".format(name="Charlie", age=35))
# Output: Charlie is 35 years old

# Format specifiers
print("Pi: {:.3f}".format(3.14159))
# Output: Pi: 3.142`}
        />

        <h3>% Formatting (Old Style)</h3>
        <CodeBlock
          code={`# String and integer
print("%s is %d years old" % ("David", 40))
# Output: David is 40 years old

# Float with precision
print("Pi: %.2f" % 3.14159)
# Output: Pi: 3.14`}
        />
        <p>✅ Prefer f-strings for readability and performance.</p>
      </LearningSection>

      <LearningSection title="1️⃣2️⃣ Escape Characters">
        <CodeBlock
          code={`# Newline
print("Line 1\\nLine 2")
# Output: Line 1
#         Line 2

# Tab
print("Name:\\tAlice")
# Output: Name:	Alice

# Backslash
print("Path: C:\\\\Users\\\\Documents")
# Output: Path: C:\\Users\\Documents

# Quotes
print("He said, \\"Hello!\\"")
# Output: He said, "Hello!"

# Raw string (ignores escape characters)
print(r"C:\\Users\\Documents")
# Output: C:\\Users\\Documents`}
        />
      </LearningSection>

      <LearningSection title="1️⃣3️⃣ String Immutability">
        <p>🧠 Strings cannot be modified after creation.</p>
        
        <CodeBlock
          code={`text = "Hello"

# ❌ Cannot modify
# text[0] = 'h'  # TypeError: 'str' object does not support item assignment

# ✅ Create new string
new_text = 'h' + text[1:]
print(new_text)  # Output: hello

# ✅ Using replace
new_text = text.replace('H', 'h')
print(new_text)  # Output: hello

# Original unchanged
print(text)  # Output: Hello`}
        />
        <p>✅ String methods return new strings, don&apos;t modify original.</p>
      </LearningSection>

      <LearningSection title="1️⃣4️⃣ Best Practices">
        <ul>
          <li>✅ Use f-strings for string formatting (cleaner and faster).</li>
          <li>✅ Use <code>join()</code> for concatenating many strings.</li>
          <li>✅ Use <code>strip()</code> to clean user input.</li>
          <li>✅ Use <code>in</code> operator for membership testing.</li>
          <li>✅ Use raw strings <code>r&quot;&quot;</code> for regex patterns and file paths.</li>
          <li>❌ Don&apos;t use <code>+</code> in loops for concatenation (inefficient).</li>
          <li>❌ Don&apos;t compare strings with <code>is</code>, use <code>==</code>.</li>
        </ul>
      </LearningSection>

      <LearningSection title="1️⃣5️⃣ Practice Examples">
        <h3>Example 1: Palindrome Checker</h3>
        <CodeBlock
          code={`def is_palindrome(text):
    # Remove spaces and convert to lowercase
    clean = text.replace(" ", "").lower()
    return clean == clean[::-1]

# Test
print(is_palindrome("racecar"))  # Output: True
print(is_palindrome("A man a plan a canal Panama"))  # Output: True
print(is_palindrome("hello"))  # Output: False`}
        />

        <h3>Example 2: Count Vowels</h3>
        <CodeBlock
          code={`def count_vowels(text):
    vowels = "aeiouAEIOU"
    count = 0
    for char in text:
        if char in vowels:
            count += 1
    return count

# Test
text = "Hello World"
print("Vowels:", count_vowels(text))  # Output: Vowels: 3

# Using sum and generator expression
count = sum(1 for char in text if char in "aeiouAEIOU")
print("Vowels:", count)  # Output: Vowels: 3`}
        />

        <h3>Example 3: Word Frequency Counter</h3>
        <CodeBlock
          code={`def word_frequency(text):
    # Convert to lowercase and split
    words = text.lower().split()
    
    # Count frequencies
    freq = {}
    for word in words:
        freq[word] = freq.get(word, 0) + 1
    
    return freq

# Test
text = "hello world hello python world world"
frequencies = word_frequency(text)
for word, count in sorted(frequencies.items()):
    print(word + ":", count)

# Output: hello: 2
#         python: 1
#         world: 3`}
        />

        <h3>Example 4: Title Case Converter</h3>
        <CodeBlock
          code={`def to_title_case(text):
    # Split into words
    words = text.split()
    
    # Capitalize first letter of each word
    title_words = [word.capitalize() for word in words]
    
    return " ".join(title_words)

# Test
text = "hello world from python"
print(to_title_case(text))  # Output: Hello World From Python

# Or simply use built-in
print(text.title())  # Output: Hello World From Python`}
        />

        <h3>Example 5: Remove Duplicate Characters</h3>
        <CodeBlock
          code={`def remove_duplicates(text):
    seen = set()
    result = []
    
    for char in text:
        if char not in seen:
            seen.add(char)
            result.append(char)
    
    return "".join(result)

# Test
text = "programming"
print(remove_duplicates(text))  # Output: progamin`}
        />

        <h3>Example 6: Reverse Words in Sentence</h3>
        <CodeBlock
          code={`def reverse_words(sentence):
    # Split into words, reverse, and join back
    words = sentence.split()
    reversed_words = words[::-1]
    return " ".join(reversed_words)

# Test
sentence = "Hello World from Python"
print(reverse_words(sentence))
# Output: Python from World Hello

# One-liner
print(" ".join(sentence.split()[::-1]))
# Output: Python from World Hello`}
        />
      </LearningSection>
    </div>
  );
};

export default String;
