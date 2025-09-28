import { LoadedPlugin, PluginModule } from '@/types/plugin';

interface PluginPath {
  id: string;
  path: string;
}

const pluginPaths: PluginPath[] = [
    { id: 'greeting', path: './plugins/GreetingPlugin' },
    { id: 'analytics', path: './plugins/AnalyticsPlugin' },
];

export async function loadPlugins(): Promise<LoadedPlugin[]> {
    const pluginModules = await Promise.all(
        pluginPaths.map(async ({ id, path }) => {
            const mod = (await import(/* webpackChunkName: "[request]" */ path)) as PluginModule;

            const fallbackMeta: PluginModule['meta'] = {
                id,
                name: `Plugin ${id}`,
            };

            return {
                id,
                Component: mod.default,
                meta: mod.meta || fallbackMeta,
            };
        })
  );

  return pluginModules;
}