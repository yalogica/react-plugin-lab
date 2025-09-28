import React from 'react';
import { PluginMeta } from '@/types/plugin';

export const meta: PluginMeta = {
    id: 'analytics',
    name: 'Analytics Plugin',
};

export default function AnalyticsPlugin() {
    return <div>📊 Tracking user activity...</div>;
}