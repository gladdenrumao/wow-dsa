import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const OOP = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Object-Oriented Programming (OOP)</h1>

      <LearningSection title="1️⃣ Introduction to Object-Oriented Programming (OOP)">
        <p>🔹 OOP is a paradigm that organizes code using objects and classes.</p>
        <p>🔹 It improves code reusability, readability, and maintainability.</p>
        <p>✅ Key Features of OOP:</p>
        <ul>
          <li>Encapsulation - Bundling data and methods together.</li>
          <li>Inheritance - Creating new classes from existing ones.</li>
          <li>Polymorphism - Using a common interface for different data types.</li>
          <li>Abstraction - Hiding implementation details from the user.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Classes and Objects">
        <p>🔹 A class is a blueprint for creating objects.</p>
        <p>🔹 An object is an instance of a class with unique values.</p>
        <CodeBlock
          code={`class Car:
    pass  # Empty class

car1 = Car()  # Creating an object
print(car1)  # Output: <__main__.Car object at 0x...>`}
        />
      </LearningSection>

      <LearningSection title="3️⃣ The __init__ Constructor">
        <p>🔹 The `__init__` method initializes object attributes.</p>
        <CodeBlock
          code={`class Car:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year

car1 = Car("Toyota", 2020)
print(car1.brand, car1.year)  # Output: Toyota 2020`}
        />
      </LearningSection>

      <LearningSection title="4️⃣ Instance Variables">
        <p>🔹 Instance variables store data unique to each object.</p>
        <CodeBlock
          code={`class Car:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year

car1 = Car("Toyota", 2020)
car2 = Car("Honda", 2022)

print(car1.year)  # Output: 2020
print(car2.year)  # Output: 2022`}
        />
      </LearningSection>

      <LearningSection title="5️⃣ Instance Methods">
        <p>🔹 Instance methods operate on the object's data.</p>
        <CodeBlock
          code={`class Car:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year

    def display_info(self):
        print(f"This is a {self.brand} car from {self.year}.")

car1 = Car("Toyota", 2020)
car1.display_info()  # Output: This is a Toyota car from 2020.`}
        />
      </LearningSection>

      <LearningSection title="6️⃣ Object References and Mutability">
        <p>🔹 Objects are stored in memory, and variables store references to them.</p>
        <CodeBlock
          code={`car1 = Car("Toyota", 2020)
car2 = car1  # Both refer to the same object

car2.year = 2025  # Changes car1 too!

print(car1.year)  # Output: 2025
print(car2.year)  # Output: 2025`}
        />
      </LearningSection>

      <LearningSection title="7️⃣ Objects Inside Objects (Composition)">
        <p>🔹 A class can contain objects of another class (Composition).</p>
        <CodeBlock
          code={`class Person:
    def __init__(self, name, car):
        self.name = name
        self.car = car

    def show_info(self):
        print(f"{self.name} owns a {self.car.brand} ({self.car.year})")

p1 = Person("John", Car("Tesla", 2023))
p1.show_info()  # Output: John owns a Tesla (2023)`}
        />
      </LearningSection>

      <LearningSection title="8️⃣ Object Comparisons (__eq__ Method)">
        <p>🔹 Custom comparison logic using `__eq__`.</p>
        <CodeBlock
          code={`class Car:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year

    def __eq__(self, other):
        return self.brand == other.brand and self.year == other.year

car1 = Car("Toyota", 2020)
car2 = Car("Toyota", 2020)

print(car1 == car2)  # Output: True`}
        />
      </LearningSection>

      <LearningSection title="9️⃣ Summary">
        <ul>
          <li>✅ Classes & Objects</li>
          <li>✅ Constructors (`__init__` method)</li>
          <li>✅ Instance Variables & Methods</li>
          <li>✅ Object Relationships (Composition)</li>
          <li>✅ Understanding References & Mutability</li>
          <li>✅ Custom Object Comparisons (`__eq__` method)</li>
        </ul>
      </LearningSection>
    </div>
  );
};

export default OOP;
