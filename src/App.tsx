import React from 'react';
import { usePlugins } from './PluginContext';

export function MainApp() {
    const plugins = usePlugins();

    return (
        <div>
            <h1>Plugin Dashboard</h1>
            <div>
                {
                    plugins.length === 0 ? (
                        <p>Loading plugins...</p>
                    ) : (
                        plugins.map(({ id, Component }) => (
                            <div key={id} className="plugin-container">
                                <Component />
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
}