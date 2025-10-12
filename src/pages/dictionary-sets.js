import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const DictionarySets = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Dictionary & Sets</h1>

      <LearningSection title="1️⃣ Overview">
        <ul>
          <li>🔹 <strong>Dictionary:</strong> Unordered collection of key-value pairs.</li>
          <li>🔹 <strong>Set:</strong> Unordered collection of unique elements.</li>
          <li>✅ Dictionaries use curly braces <code>{'{}'}</code> with key:value pairs.</li>
          <li>✅ Sets use curly braces <code>{'{}'}</code> with unique elements.</li>
          <li>✅ Both are mutable and support fast lookups.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Dictionary - Basics">
        <p>🧠 Dictionaries store data as key-value pairs.</p>
        
        <h3>Creating Dictionaries</h3>
        <CodeBlock
          code={`# Empty dictionary
empty = {}
print(empty)  # Output: {}

# Dictionary with values
student = {
    "name": "Alice",
    "age": 25,
    "grade": "A"
}
print(student)
# Output: {'name': 'Alice', 'age': 25, 'grade': 'A'}

# Using dict() constructor
person = dict(name="Bob", age=30, city="New York")
print(person)
# Output: {'name': 'Bob', 'age': 30, 'city': 'New York'}

# Mixed data types
data = {
    "string": "hello",
    "number": 42,
    "list": [1, 2, 3],
    "tuple": (4, 5, 6)
}
print(data)`}
        />
        <p>✅ Keys must be immutable (strings, numbers, tuples).</p>
        <p>✅ Values can be any data type.</p>
      </LearningSection>

      <LearningSection title="3️⃣ Dictionary - Accessing Values">
        <CodeBlock
          code={`student = {"name": "Alice", "age": 25, "grade": "A"}

# Access using key
print(student["name"])  # Output: Alice

# get() method (safer - returns None if key not found)
print(student.get("age"))  # Output: 25
print(student.get("phone"))  # Output: None

# get() with default value
print(student.get("phone", "Not Available"))
# Output: Not Available

# Check if key exists
if "name" in student:
    print("Name exists")
# Output: Name exists

# KeyError if key doesn't exist
# print(student["phone"])  # KeyError: 'phone'`}
        />
        <p>✅ Use <code>get()</code> to avoid KeyError.</p>
      </LearningSection>

      <LearningSection title="4️⃣ Dictionary - Adding and Modifying">
        <CodeBlock
          code={`person = {"name": "Bob", "age": 30}

# Add new key-value pair
person["city"] = "New York"
print(person)
# Output: {'name': 'Bob', 'age': 30, 'city': 'New York'}

# Modify existing value
person["age"] = 31
print(person)
# Output: {'name': 'Bob', 'age': 31, 'city': 'New York'}

# update() - add multiple key-value pairs
person.update({"country": "USA", "job": "Engineer"})
print(person)
# Output: {'name': 'Bob', 'age': 31, 'city': 'New York', 
#          'country': 'USA', 'job': 'Engineer'}

# setdefault() - add if key doesn't exist
person.setdefault("phone", "555-1234")
print(person["phone"])  # Output: 555-1234

# If key exists, doesn't change value
person.setdefault("name", "Charlie")
print(person["name"])  # Output: Bob (unchanged)`}
        />
      </LearningSection>

      <LearningSection title="5️⃣ Dictionary - Removing Items">
        <CodeBlock
          code={`person = {"name": "Alice", "age": 25, "city": "Paris", "job": "Developer"}

# pop() - remove and return value
age = person.pop("age")
print(age)  # Output: 25
print(person)
# Output: {'name': 'Alice', 'city': 'Paris', 'job': 'Developer'}

# pop() with default
phone = person.pop("phone", "Not found")
print(phone)  # Output: Not found

# popitem() - remove and return last key-value pair
item = person.popitem()
print(item)  # Output: ('job', 'Developer')

# del - delete specific key
del person["city"]
print(person)  # Output: {'name': 'Alice'}

# clear() - remove all items
person.clear()
print(person)  # Output: {}`}
        />
      </LearningSection>

      <LearningSection title="6️⃣ Dictionary - Iteration">
        <CodeBlock
          code={`student = {"name": "Alice", "age": 25, "grade": "A"}

# Iterate over keys (default)
for key in student:
    print(key)
# Output: name
#         age
#         grade

# Iterate over keys explicitly
for key in student.keys():
    print(key)

# Iterate over values
for value in student.values():
    print(value)
# Output: Alice
#         25
#         A

# Iterate over key-value pairs
for key, value in student.items():
    print(str(key) + ":", value)
# Output: name: Alice
#         age: 25
#         grade: A`}
        />
      </LearningSection>

      <LearningSection title="7️⃣ Dictionary - Methods and Functions">
        <CodeBlock
          code={`data = {"a": 1, "b": 2, "c": 3}

# len() - number of key-value pairs
print(len(data))  # Output: 3

# keys() - get all keys
print(data.keys())  # Output: dict_keys(['a', 'b', 'c'])

# values() - get all values
print(data.values())  # Output: dict_values([1, 2, 3])

# items() - get all key-value pairs
print(data.items())  # Output: dict_items([('a', 1), ('b', 2), ('c', 3)])

# copy() - create shallow copy
copy = data.copy()
print(copy)  # Output: {'a': 1, 'b': 2, 'c': 3}

# fromkeys() - create dict with same value for all keys
keys = ["x", "y", "z"]
new_dict = dict.fromkeys(keys, 0)
print(new_dict)  # Output: {'x': 0, 'y': 0, 'z': 0}`}
        />
      </LearningSection>

      <LearningSection title="8️⃣ Dictionary Comprehension">
        <p>🧠 Concise way to create dictionaries.</p>
        
        <CodeBlock
          code={`# Basic dictionary comprehension
squares = {x: x**2 for x in range(6)}
print(squares)  # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# With condition
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # Output: {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# From two lists
keys = ["a", "b", "c"]
values = [1, 2, 3]
combined = {k: v for k, v in zip(keys, values)}
print(combined)  # Output: {'a': 1, 'b': 2, 'c': 3}

# Transform existing dictionary
prices = {"apple": 10, "banana": 5, "cherry": 15}
discounted = {item: price * 0.9 for item, price in prices.items()}
print(discounted)
# Output: {'apple': 9.0, 'banana': 4.5, 'cherry': 13.5}`}
        />
      </LearningSection>

      <LearningSection title="9️⃣ Sets - Basics">
        <p>🧠 Sets store unique, unordered elements.</p>
        
        <h3>Creating Sets</h3>
        <CodeBlock
          code={`# Empty set (must use set())
empty = set()
print(empty)  # Output: set()

# Set with elements
numbers = {1, 2, 3, 4, 5}
print(numbers)  # Output: {1, 2, 3, 4, 5}

# Duplicates automatically removed
numbers = {1, 2, 2, 3, 3, 4}
print(numbers)  # Output: {1, 2, 3, 4}

# Using set() constructor
from_list = set([1, 2, 3, 3, 4])
print(from_list)  # Output: {1, 2, 3, 4}

# From string
from_string = set("hello")
print(from_string)  # Output: {'h', 'e', 'l', 'o'}

# Mixed types
mixed = {1, "hello", 3.14, True}
print(mixed)  # Output: {1, 3.14, 'hello'}`}
        />
        <p>✅ Sets automatically remove duplicates.</p>
        <p>✅ Elements must be immutable (no lists or dicts).</p>
      </LearningSection>

      <LearningSection title="🔟 Set - Adding and Removing">
        <CodeBlock
          code={`fruits = {"apple", "banana", "cherry"}

# add() - add single element
fruits.add("date")
print(fruits)  # Output: {'apple', 'banana', 'cherry', 'date'}

# update() - add multiple elements
fruits.update(["elderberry", "fig"])
print(fruits)
# Output: {'apple', 'banana', 'cherry', 'date', 'elderberry', 'fig'}

# remove() - remove element (raises KeyError if not found)
fruits.remove("banana")
print(fruits)

# discard() - remove element (no error if not found)
fruits.discard("grape")  # No error
print(fruits)

# pop() - remove and return random element
item = fruits.pop()
print("Removed:", item)

# clear() - remove all elements
fruits.clear()
print(fruits)  # Output: set()`}
        />
      </LearningSection>

      <LearningSection title="1️⃣1️⃣ Set Operations">
        <CodeBlock
          code={`A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

# Union - all elements from both sets
print(A | B)  # Output: {1, 2, 3, 4, 5, 6, 7, 8}
print(A.union(B))  # Same as above

# Intersection - common elements
print(A & B)  # Output: {4, 5}
print(A.intersection(B))  # Same as above

# Difference - elements in A but not in B
print(A - B)  # Output: {1, 2, 3}
print(A.difference(B))  # Same as above

# Symmetric Difference - elements in A or B but not both
print(A ^ B)  # Output: {1, 2, 3, 6, 7, 8}
print(A.symmetric_difference(B))  # Same as above

# Subset - check if A is subset of B
print({1, 2}.issubset(A))  # Output: True

# Superset - check if A is superset of B
print(A.issuperset({1, 2}))  # Output: True

# Disjoint - check if no common elements
print(A.isdisjoint({10, 11}))  # Output: True`}
        />
      </LearningSection>

      <LearningSection title="1️⃣2️⃣ Set Comprehension">
        <CodeBlock
          code={`# Basic set comprehension
squares = {x**2 for x in range(6)}
print(squares)  # Output: {0, 1, 4, 9, 16, 25}

# With condition
even_numbers = {x for x in range(10) if x % 2 == 0}
print(even_numbers)  # Output: {0, 2, 4, 6, 8}

# Remove duplicates from list
numbers = [1, 2, 2, 3, 4, 4, 5]
unique = {x for x in numbers}
print(unique)  # Output: {1, 2, 3, 4, 5}

# Transform and filter
words = ["hello", "world", "python", "set"]
uppercase = {word.upper() for word in words if len(word) > 4}
print(uppercase)  # Output: {'HELLO', 'WORLD', 'PYTHON'}`}
        />
      </LearningSection>

      <LearningSection title="1️⃣3️⃣ Dictionary vs Set">
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Dictionary</th>
              <th>Set</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Structure</td>
              <td>Key-Value pairs</td>
              <td>Unique elements only</td>
            </tr>
            <tr>
              <td>Syntax</td>
              <td>{'{key: value}'}</td>
              <td>{'{element}'}</td>
            </tr>
            <tr>
              <td>Duplicates</td>
              <td>Unique keys only</td>
              <td>No duplicates</td>
            </tr>
            <tr>
              <td>Ordering</td>
              <td>Ordered (Python 3.7+)</td>
              <td>Unordered</td>
            </tr>
            <tr>
              <td>Access</td>
              <td>By key: dict[key]</td>
              <td>Membership: item in set</td>
            </tr>
            <tr>
              <td>Use Case</td>
              <td>Mapping, lookups</td>
              <td>Unique items, math operations</td>
            </tr>
          </tbody>
        </table>
      </LearningSection>

      <LearningSection title="1️⃣4️⃣ Best Practices">
        <ul>
          <li>✅ Use dictionaries for key-value mappings and lookups.</li>
          <li>✅ Use sets for unique elements and membership testing.</li>
          <li>✅ Use <code>get()</code> for safe dictionary access.</li>
          <li>✅ Use set operations (union, intersection) for efficient comparisons.</li>
          <li>✅ Use comprehensions for concise creation.</li>
          <li>❌ Don&apos;t use mutable objects as dictionary keys.</li>
          <li>❌ Don&apos;t rely on set ordering.</li>
        </ul>
      </LearningSection>

      <LearningSection title="1️⃣5️⃣ Practice Examples">
        <h3>Example 1: Character Frequency Counter</h3>
        <CodeBlock
          code={`def char_frequency(text):
    freq = {}
    for char in text:
        if char != ' ':  # Skip spaces
            freq[char] = freq.get(char, 0) + 1
    return freq

# Test
text = "hello world"
frequencies = char_frequency(text)
for char, count in sorted(frequencies.items()):
    print(char + ":", count)

# Output: d: 1
#         e: 1
#         h: 1
#         l: 3
#         o: 2
#         r: 1
#         w: 1`}
        />

        <h3>Example 2: Group Anagrams</h3>
        <CodeBlock
          code={`def group_anagrams(words):
    anagrams = {}
    
    for word in words:
        # Sort letters as key
        key = ''.join(sorted(word))
        
        # Add to group
        if key not in anagrams:
            anagrams[key] = []
        anagrams[key].append(word)
    
    return list(anagrams.values())

# Test
words = ["eat", "tea", "tan", "ate", "nat", "bat"]
result = group_anagrams(words)
print(result)
# Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]`}
        />

        <h3>Example 3: Remove Duplicates While Preserving Order</h3>
        <CodeBlock
          code={`def remove_duplicates(items):
    seen = set()
    result = []
    
    for item in items:
        if item not in seen:
            seen.add(item)
            result.append(item)
    
    return result

# Test
numbers = [1, 2, 3, 2, 4, 3, 5, 1]
unique = remove_duplicates(numbers)
print(unique)  # Output: [1, 2, 3, 4, 5]`}
        />

        <h3>Example 4: Student Grade Book</h3>
        <CodeBlock
          code={`# Create grade book
gradebook = {
    "Alice": {"math": 90, "english": 85, "science": 92},
    "Bob": {"math": 78, "english": 88, "science": 75},
    "Charlie": {"math": 95, "english": 92, "science": 89}
}

# Calculate average for each student
for student, grades in gradebook.items():
    avg = sum(grades.values()) / len(grades)
    print(student + ":", round(avg, 2))

# Output: Alice: 89.0
#         Bob: 80.33
#         Charlie: 92.0

# Find top student in math
top_math = max(gradebook.items(), key=lambda x: x[1]["math"])
print("Top in Math:", top_math[0], "(" + str(top_math[1]['math']) + ")")
# Output: Top in Math: Charlie (95)`}
        />

        <h3>Example 5: Find Common Elements</h3>
        <CodeBlock
          code={`# Find common elements in multiple lists
list1 = [1, 2, 3, 4, 5]
list2 = [4, 5, 6, 7, 8]
list3 = [5, 6, 7, 8, 9]

# Convert to sets and find intersection
set1 = set(list1)
set2 = set(list2)
set3 = set(list3)

common = set1 & set2 & set3
print("Common elements:", common)  # Output: Common elements: {5}

# Find elements unique to each list
unique1 = set1 - set2 - set3
unique2 = set2 - set1 - set3
unique3 = set3 - set1 - set2

print("Unique to list1:", unique1)  # Output: {1, 2, 3}
print("Unique to list2:", unique2)  # Output: set()
print("Unique to list3:", unique3)  # Output: {9}`}
        />

        <h3>Example 6: Word Count in Text</h3>
        <CodeBlock
          code={`def word_count(text):
    # Convert to lowercase and split
    words = text.lower().split()
    
    # Count frequencies
    count = {}
    for word in words:
        # Remove punctuation
        word = word.strip('.,!?;:')
        count[word] = count.get(word, 0) + 1
    
    return count

# Test
text = "Hello world! Hello Python. Python is great. World is beautiful."
counts = word_count(text)

# Print top 3 most common
top_3 = sorted(counts.items(), key=lambda x: x[1], reverse=True)[:3]
for word, count in top_3:
    print(word + ":", count)

# Output: hello: 2
#         python: 2
#         world: 2`}
        />
      </LearningSection>
    </div>
  );
};

export default DictionarySets;
