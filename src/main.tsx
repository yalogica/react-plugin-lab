import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { PluginProvider } from '@/PluginContext';
import { loadPlugins } from '@/pluginLoader';
import { MainApp } from '@/App';
import { LoadedPlugin } from '@/types/plugin';

function PluginHost() {
    const [plugins, setPlugins] = useState<LoadedPlugin[]>([]);

    useEffect(() => {
        loadPlugins().then(setPlugins).catch(console.error);
    }, []);

    return (
        <PluginProvider value={plugins}>
            <MainApp />
        </PluginProvider>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<PluginHost />);