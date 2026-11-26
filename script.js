
function runCode() {
  const code = document.getElementById("code").value;
  const output = document.getElementById("output");
  let messages = [];

  const originalLog = console.log;

  console.log = (...args) => {
    messages.push(args.map(String).join(" "));
  };

  try {
    new Function(code)();

    output.textContent = messages.length
      ? messages.join("\n")
      : "Code executed successfully!";
  } catch (error) {
    output.textContent = "Error: " + error.message;
  } finally {
    console.log = originalLog;
  }
}

function clearOutput() {
  document.getElementById("output").textContent = "";
}

function loadExample(type) {
  const code = document.getElementById("code");

  if (type === "hello") {
    code.value = 'console.log("Hello, Palak!");';
  }

  if (type === "math") {
    code.value = 'let a = 20;\nlet b = 10;\nconsole.log("Sum:", a + b);\nconsole.log("Product:", a * b);';
  }

  if (type === "loop") {
    code.value = 'for (let i = 1; i <= 5; i++) {\n  console.log("Number:", i);\n}';
  }
}
