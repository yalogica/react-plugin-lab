import React, { createContext, useContext } from 'react';
import { LoadedPlugin } from '@/types/plugin';

const PluginContext = createContext<LoadedPlugin[]>([]);

export const usePlugins = (): LoadedPlugin[] => {
  return useContext(PluginContext);
};

export const PluginProvider = PluginContext.Provider;