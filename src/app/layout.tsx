export const metadata = {
    title: 'SqlEditor',
    description: '',
};

// import loader from '@monaco-editor/loader';

// loader.init().then((monaco) => {
//     const wrapper = document.getElementById('root');
//     wrapper.style.height = '100vh';
//     const properties = {
//         value: 'function hello() {\n\talert("Hello world!");\n}',
//         language: 'javascript',
//     };

//     monaco.editor.create(wrapper, properties);
// });
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body style={{ backgroundColor: '#0C0A1D' }}>{children}</body>
        </html>
    );
}
