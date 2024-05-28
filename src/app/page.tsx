// app/page.tsx
"use client";

import React, { useState } from "react";
import SqlEditor from "../components/SqlEditor";
import * as monaco from "monaco-editor";

const HomePage = () => {
  const [result, setResult] = useState("");

  const runQuery = async () => {
    const editor = monaco.editor.getModels()[0];
    const query = editor.getValue();

    const response = await fetch("/api/run-query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    setResult(JSON.stringify(data, null, 2));
  };

  return (
    <div className="bg-[#0C0A1D]">
      <h1>SQL Editor</h1>
      <SqlEditor />
      {/* <button onClick={runQuery}>Run Query</button>
      <pre>{result}</pre> */}
    </div>
  );
};

export default HomePage;
