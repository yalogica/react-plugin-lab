export interface PluginMeta {
    id: string;
    name: string;
    [key: string]: any;
}

export interface PluginModule {
    default: React.ComponentType;
    meta?: PluginMeta;
}

export interface LoadedPlugin {
    id: string;
    Component: React.ComponentType;
    meta: PluginMeta;
}