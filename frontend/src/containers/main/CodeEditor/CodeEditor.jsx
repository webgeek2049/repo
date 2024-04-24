import React, { useState, forwardRef, useImperativeHandle } from "react";
import MonacoEditor from "react-monaco-editor";

const CodeEditor = forwardRef((_, ref) => {
  const [code, setCode] = useState("// type your code here");

  const options = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
  };

  // Define a function to get the current value of the editor
  const getValue = () => {
    return code;
  };

  useImperativeHandle(ref, () => ({
    getValue,
  }));

  return (
    <div className="monacoEditor">
      <MonacoEditor
        theme="vs-dark"
        value={code}
        options={options}
        onChange={(newValue, e) => setCode(newValue)}
      />
    </div>
  );
});

export default CodeEditor;
