'use client';

import * as monaco from 'monaco-editor';
import React from 'react';
import Editor from '@monaco-editor/react';
import { useRef, useEffect } from 'react';
import { setupLanguageFeatures } from 'monaco-sql-languages';
import { LanguageIdEnum } from 'monaco-sql-languages';
import loader from '@monaco-editor/loader';
let editorIns: monaco.editor.IStandaloneCodeEditor | null = null;
// import { createSQLWorker, registerSQL } from 'monaco-sql-languages';

// import '../app/languageSetup';

// function SqlEditor() {
//     const editorRef = useRef(null);
//     function handleEditorChange(value, event) {
//         // here is the current value
//     }
//     const handleItemClick = (item: string) => {
//         if (editorRef.current) {
//             const currentPosition = editorRef.current.getPosition();
//             const currentModel = editorRef.current.getModel();
//             if (currentPosition && currentModel) {
//                 const snippet = `${item}`;
//                 currentModel.pushEditOperations(
//                     [],
//                     [
//                         {
//                             range: new monaco.Range(
//                                 currentPosition.lineNumber,
//                                 currentPosition.column,
//                                 currentPosition.lineNumber,
//                                 currentPosition.column
//                             ),
//                             text: snippet,
//                             forceMoveMarkers: true,
//                         },
//                     ]
//                 );
//             }
//         }
//     };

//     function handleEditorDidMount(editor, monaco) {
//         editorRef.current = editor;
//         console.log('onMount: the editor instance:', editor);
//         console.log('onMount: the monaco instance:', monaco);
//     }

//     function handleEditorWillMount(monaco) {
//         console.log('beforeMount: the monaco instance:', monaco);
//     }

//     function handleEditorValidation(markers) {
//         // model markers
//         // markers.forEach(marker => console.log('onValidate:', marker.message));
//     }

//     function showValue() {
//         alert(editorRef.current.getValue());
//     }
//     return (
//         <>
//             <button onClick={showValue}>Show value</button>
//             <div>
//                 {/* List of items */}
//                 <button onClick={() => handleItemClick('users')}>users</button>
//                 <button onClick={() => handleItemClick('id')}>id</button>
//                 <button onClick={() => handleItemClick('SELECT')}>SELECT</button>
//                 {/* Add more items as needed */}
//             </div>
//             <Editor
//                 height="90vh"
//                 defaultLanguage="sql"
//                 defaultValue="// some comment"
//                 onChange={handleEditorChange}
//                 onMount={handleEditorDidMount}
//                 beforeMount={handleEditorWillMount}
//                 onValidate={handleEditorValidation}
//                 theme="vs-dark"
//             />
//         </>
//     );
// }

const SqlEditor = () => {
    // const editorRef = useRef(null);
    // const monacoRef = useRef(null);

    useEffect(() => {

        if (editorRef.current && !monacoRef.current) {
            // Register the SQL language if necessary
            if (!monaco.languages.getLanguages().some((lang) => lang.id === 'sql')) {
                monaco.languages.register({ id: 'sql' });
            }

            monacoRef.current = monaco.editor.create(editorRef.current, {
                value: 'SELECT * FROM users;',
                language: 'sql',
                theme: 'vs-dark',
                automaticLayout: true,
            });
        }
        const container = document.getElementById('container');

        if (container) {
            editorIns = monaco.editor.create(container, {
                language: LanguageIdEnum.PG,
            });
        }

        // return () => {
        //     if (monacoRef.current) {
        //         monacoRef.current.dispose();
        //     }
        // };
    }, []);

    return (
        <div
            id="container"
            ref={editorRef}
            style={{ height: '500px', width: '100%' }}
        ></div>
    );
};

export default SqlEditor;

// // monaco.editor.defineTheme("myCustomTheme", {
// //   base: "vs-dark", // Can also be 'vs', 'hc-black', etc.
// //   inherit: true, // Inherit the base theme
// //   rules: [],
// //   colors: {
// //     "editor.background": "#6f4cff4d", // Set your desired background color
// //     "editor.background.opacity": "0.2", // Set your desired background color
// //     // "editor.foreground": "#557788", // Set your desired foreground color
// //     // Add other custom colors as needed
// //   },
// // });

// // monaco.languages.registerCompletionItemProvider("sql", {
// //   provideCompletionItems: (model, position) => {
// //     // Parse schema information and generate completion items based on context
// //     const suggestions: monaco.languages.CompletionItem[] = [
// //       // Example: Table names
// //       {
// //         label: "users",
// //         kind: monaco.languages.CompletionItemKind.Keyword,
// //         insertText: "users",
// //       },
// //       // Example: Column names
// //       {
// //         label: "id",
// //         kind: monaco.languages.CompletionItemKind.Field,
// //         insertText: "id",
// //       },
// //       // Example: SQL keywords
// //       {
// //         label: "SELECT",
// //         kind: monaco.languages.CompletionItemKind.Keyword,
// //         insertText: "SELECT ",
// //       },
// //       // Add more completion items based on the schema information
// //     ];
// //     return { suggestions: suggestions };
// //   },
// // });

// // const suggestions = [
// //   {
// //     label: 'SELECT',
// //     kind: monaco.languages.CompletionItemKind.Keyword,
// //     insertText: 'SELECT * FROM ',
// //     documentation: 'Select all columns from a table'
// //   },
// //   {
// //     label: 'FROM',
// //     kind: monaco.languages.CompletionItemKind.Keyword,
// //     insertText: 'FROM ',
// //     documentation: 'Specify the table to select from'
// //   },
// //   {
// //     label: 'WHERE',
// //     kind: monaco.languages.CompletionItemKind.Keyword,
// //     insertText: 'WHERE ',
// //     documentation: 'Filter the results'
// //   },
// //   // Add more suggestions as needed
// // ];
