// API endpoint to execute code using Judge0 CE (Community Edition)
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { language, code, input } = req.body;

  if (!language || !code) {
    return res.status(400).json({ error: "Language and code are required" });
  }

  // Language ID mapping for Judge0 API
  const languageIds = {
    python: 71,      // Python 3.8.1
    cpp: 54,         // C++ 17
    java: 62,        // Java 13.0.1
    javascript: 63,  // JavaScript (Node.js 12.14.0)
  };

  const languageId = languageIds[language];
  if (!languageId) {
    return res.status(400).json({ error: "Unsupported language" });
  }

  try {
    // Submit code to Judge0 API
    const submissionResponse = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY || "test",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
        body: JSON.stringify({
          language_id: languageId,
          source_code: code,
          stdin: input || "",
        }),
      }
    );

    if (!submissionResponse.ok) {
      // If Judge0 API fails, provide a fallback simulation
      return res.status(200).json({
        output: simulateExecution(language, code, input),
        simulated: true,
      });
    }

    const result = await submissionResponse.json();

    // Return the output
    let output = "";
    if (result.stdout) {
      output = result.stdout;
    } else if (result.stderr) {
      output = `Error:\n${result.stderr}`;
    } else if (result.compile_output) {
      output = `Compilation Error:\n${result.compile_output}`;
    } else if (result.message) {
      output = `Error:\n${result.message}`;
    } else {
      output = "No output";
    }

    return res.status(200).json({ output });
  } catch (error) {
    console.error("Execution error:", error);
    // Fallback to simulation if API fails
    return res.status(200).json({
      output: simulateExecution(language, code, input),
      simulated: true,
    });
  }
}

// Fallback simulation for when Judge0 API is not available
function simulateExecution(language, code, input) {
  const messages = {
    python: `🔄 Code execution simulated (Python)
    
Your code:
${code.substring(0, 200)}${code.length > 200 ? "..." : ""}

Note: This is a simulated output. To run code for real, you need to configure the Judge0 API key.
Set RAPIDAPI_KEY environment variable with your RapidAPI key.

Get your free API key at: https://rapidapi.com/judge0-official/api/judge0-ce`,
    cpp: `🔄 Code execution simulated (C++)
    
Your code:
${code.substring(0, 200)}${code.length > 200 ? "..." : ""}

Note: This is a simulated output. To run code for real, you need to configure the Judge0 API key.
Set RAPIDAPI_KEY environment variable with your RapidAPI key.

Get your free API key at: https://rapidapi.com/judge0-official/api/judge0-ce`,
    java: `🔄 Code execution simulated (Java)
    
Your code:
${code.substring(0, 200)}${code.length > 200 ? "..." : ""}

Note: This is a simulated output. To run code for real, you need to configure the Judge0 API key.
Set RAPIDAPI_KEY environment variable with your RapidAPI key.

Get your free API key at: https://rapidapi.com/judge0-official/api/judge0-ce`,
    javascript: `🔄 Code execution simulated (JavaScript)
    
Your code:
${code.substring(0, 200)}${code.length > 200 ? "..." : ""}

Note: This is a simulated output. To run code for real, you need to configure the Judge0 API key.
Set RAPIDAPI_KEY environment variable with your RapidAPI key.

Get your free API key at: https://rapidapi.com/judge0-official/api/judge0-ce`,
  };

  return messages[language] || "Execution not available";
}
