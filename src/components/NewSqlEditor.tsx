import React, { useRef, useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import sqlDefaults from 'monaco-sql-languages';

const NewSqlEditor = () => {
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            monaco.languages.register({
                id: 'sql',
            });

            monaco.languages.setMonarchTokensProvider('sql', sqlDefaults);

            monaco.editor.defineTheme('myCustomTheme', {
                base: 'vs',
                inherit: true,
                rules: [{ background: 'EDF4FC', token: '' }],
            });

            monaco.editor.setTheme('myCustomTheme');
        }
    }, []);

    return (
        <MonacoEditor
            ref={editorRef}
            height="500px"
            width="100vw"
            defaultLanguage="sql"
            defaultValue="SELECT * FROM table_name"
        />
    );
};

export default NewSqlEditor;
