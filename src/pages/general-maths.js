import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const GeneralMaths = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">📐 General Maths – Prime Numbers</h1>

      <LearningSection title="1️⃣ What is a Prime Number?">
        <ul>
          <li>🔹 A prime number has exactly 2 distinct factors: 1 and itself.</li>
          <li>🔹 Examples: 2, 3, 5, 7, 11, 13...</li>
          <li>🔹 1 is <strong>not</strong> a prime number.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Check if a Number is Prime (Python)">
  <p>This function checks if a number is prime in O(√n) time using the square root optimization.</p>
  <CodeBlock
    code={`def is_prime(n):
    if n <= 1:
        return False

    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False

    return True`}
  />
  <p>✅ Loop only runs up to √n, improving performance.</p>
  <p>✅ Works for large numbers efficiently.</p>
    </LearningSection>

      <LearningSection title="3️⃣ Find All Primes from 1 to N (Sieve of Eratosthenes)">
        <p>The most efficient way to find all primes up to N in O(N log log N) time.</p>
        <CodeBlock
          code={`def sieve(n):
    primes = [True] * (n + 1)
    primes[0] = primes[1] = False

    p = 2
    while p * p <= n:
        if primes[p]:
            for i in range(p * p, n + 1, p):
                primes[i] = False
        p += 1

    # Print all primes
    for i in range(n + 1):
        if primes[i]:
            print(i, end=' ')`}
        />
        <p>✅ Much faster than checking each number individually.</p>
        <p>✅ Avoids redundant work by crossing out multiples of each prime.</p>
      </LearningSection>

      <LearningSection title="4️⃣ Sample Run">
        <CodeBlock
          code={`print(is_prime(11))  # True
print(is_prime(15))  # False

sieve(30)  # Output: 2 3 5 7 11 13 17 19 23 29`}
        />
      </LearningSection>
    </div>
  );
};

export default GeneralMaths;
