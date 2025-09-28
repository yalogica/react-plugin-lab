# 🧩 React Plugin Lab

A minimal, educational React application demonstrating a **plugin-based architecture** using TypeScript, React Context, and dynamic imports.
Perfect for learning how to build extensible frontend applications where features can be added or removed as independent plugins.

## 🌟 Features

- ✅ **Plugin contract**: Each plugin is a self-contained React component with optional metadata.
- ✅ **Dynamic loading**: Plugins are loaded asynchronously at runtime using `import()`.
- ✅ **Context-based registry**: Plugins are shared across the app via React Context.
- ✅ **Type-safe**: Full TypeScript support with clear interfaces.
- ✅ **Zero build-time coupling**: Core app doesn’t need to know about plugins in advance.

---
## 📁 Project Structure

```
src/
├── plugins/               # Plugin implementations
│   ├── GreetingPlugin.tsx
│   └── AnalyticsPlugin.tsx
├── types/plugin.ts        # Plugin interfaces
├── PluginContext.tsx      # React Context for plugins
├── pluginLoader.ts        # Dynamic plugin loader
├── App.tsx                # Main UI that renders plugins
└── main.tsx               # App entry point
```

---
## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/yalogica/react-plugin-lab.git
cd react-plugin-lab
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build

```bash
npm run build
```

Outputs production-ready files to the `dist/` folder.

---

## 🧪 How It Works

1. **Define a plugin** as a default-exported React component with optional `meta`:

   ```tsx
   // src/plugins/MyPlugin.tsx
   export const meta = { id: 'my-plugin', name: 'My Plugin' };
   export default function MyPlugin() {
     return <div>Hello from My Plugin!</div>;
   }
   ```

2. **Register the plugin path** in `pluginLoader.ts`.

3. The app **dynamically imports** all plugins on startup.

4. Plugins are **rendered automatically** in `App.tsx` using the `usePlugins()` hook.

---

## 🛠️ Adding a New Plugin

1. Create a new file in `src/plugins/`, e.g., `WeatherPlugin.tsx`.
2. Export a default React component and (optionally) a `meta` object.
3. Add its path to the `pluginPaths` array in `src/pluginLoader.ts`.
4. That’s it! The plugin will appear on the dashboard.

> 💡 No recompilation of the core app is needed — just refresh the browser!

---

## 📚 Learning Goals

This project illustrates key concepts:
- Dynamic imports (`import()`)
- React Context for global state
- TypeScript interfaces for contracts
- Decoupled, modular frontend architecture

---

## 📄 License

MIT © [Your Name]

---