// app/page.tsx
'use client';
// import dynamic from 'next/dynamic';
// const SqlEditor = dynamic(() => import('../components/SqlEditor'), { ssr: false });

import React, { useState } from 'react';
import SqlEditor from '../components/SqlEditor';
import NewSqlEditor from '@/components/NewSqlEditor';
import * as monaco from 'monaco-editor';

const HomePage = () => {
    const [result, setResult] = useState('');

    // const runQuery = async () => {
    //   const editor = monaco.editor.getModels()[0];
    //   const query = editor.getValue();

    //   const response = await fetch("/api/run-query", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ query }),
    //   });

    //   const data = await response.json();
    //   setResult(JSON.stringify(data, null, 2));
    // };

    return (
        <div style={{ backgroundColor: '#0C0A1D' }}>
            <h1 style={{ color: 'white' }}>SQL Editor</h1>
            <SqlEditor />
            {/* <NewSqlEditor /> */}
            {/* <button onClick={runQuery}>Run Query</button>
      <pre>{result}</pre> */}
        </div>
    );
};

export default HomePage;
