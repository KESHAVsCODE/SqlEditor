/** @type {import('next').NextConfig} */
import MonacoEditorWebpackPlugin from 'monaco-editor-webpack-plugin';

const nextConfig = {
    webpack: (config) => {
        config.plugins.push(
            new MonacoEditorWebpackPlugin({
                languages: ['sql'],
            })
        );

        return config;
    },
    experimental: {
        appDir: true,
    },
};

export default nextConfig;
