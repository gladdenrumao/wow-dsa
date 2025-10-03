import React, { useState } from "react";

const Compiler = () => {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const defaultCode = {
    python: `# Write your Python code here
print("Hello, World!")`,
    cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
    java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    javascript: `// Write your JavaScript code here
console.log("Hello, World!");`
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setCode(defaultCode[newLanguage]);
    setOutput("");
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput("Running code...");

    try {
      const response = await fetch("/api/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language,
          code,
          input,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setOutput(data.output || "No output");
      } else {
        setOutput(`Error: ${data.error || "Failed to execute code"}`);
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  React.useEffect(() => {
    setCode(defaultCode[language]);
  }, []);

  return (
    <div className="compiler-container">
      <div className="compiler-header">
        <h1 className="compiler-title">Online Code Compiler</h1>
        <p className="compiler-subtitle">Write, run, and test your code in multiple languages</p>
      </div>

      <div className="language-selector">
        <button
          className={`lang-button ${language === "python" ? "active" : ""}`}
          onClick={() => handleLanguageChange("python")}
        >
          🐍 Python
        </button>
        <button
          className={`lang-button ${language === "cpp" ? "active" : ""}`}
          onClick={() => handleLanguageChange("cpp")}
        >
          ⚙️ C++
        </button>
        <button
          className={`lang-button ${language === "java" ? "active" : ""}`}
          onClick={() => handleLanguageChange("java")}
        >
          ☕ Java
        </button>
        <button
          className={`lang-button ${language === "javascript" ? "active" : ""}`}
          onClick={() => handleLanguageChange("javascript")}
        >
          🌐 JavaScript
        </button>
      </div>

      <div className="compiler-workspace">
        <div className="code-section">
          <div className="section-header">
            <span className="section-title">💻 Code Editor</span>
            <span className="language-badge">{language.toUpperCase()}</span>
          </div>
          <textarea
            className="code-editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your code here..."
            spellCheck="false"
          />
        </div>

        <div className="io-section">
          <div className="input-section">
            <div className="section-header">
              <span className="section-title">📥 Input</span>
            </div>
            <textarea
              className="input-area"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter input (if required)..."
              spellCheck="false"
            />
          </div>

          <div className="output-section">
            <div className="section-header">
              <span className="section-title">📤 Output</span>
            </div>
            <div className="output-area">
              {output || "Output will appear here..."}
            </div>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button
          className="run-button"
          onClick={runCode}
          disabled={isRunning}
        >
          {isRunning ? "⏳ Running..." : "▶️ Run Code"}
        </button>
        <button
          className="clear-button"
          onClick={() => {
            setCode(defaultCode[language]);
            setInput("");
            setOutput("");
          }}
        >
          🗑️ Clear All
        </button>
      </div>

      <div className="compiler-info">
        <h3>ℹ️ How to use:</h3>
        <ul>
          <li>Select a programming language from the buttons above</li>
          <li>Write or paste your code in the code editor</li>
          <li>Add input (if your program requires it) in the Input section</li>
          <li>Click "Run Code" to execute your program</li>
          <li>View the output in the Output section</li>
        </ul>
      </div>
    </div>
  );
};

export default Compiler;
