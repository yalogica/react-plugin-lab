import React from 'react';
import { PluginMeta } from '@/types/plugin';

export const meta: PluginMeta = {
    id: 'greeting',
    name: 'Greeting Plugin',
};

export default function GreetingPlugin() {
    return <div>Hello from Greeting Plugin!</div>;
}