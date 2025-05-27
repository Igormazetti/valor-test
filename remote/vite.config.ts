import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { withZephyr } from "vite-plugin-zephyr";

const mfConfig = {
  name: "vite_remote",
  filename: "remoteEntry.js",
  exposes: {
    "./AboutCard": "./src/AboutCard",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), withZephyr({ mfConfig })],
  experimental: {
    renderBuiltUrl() {
      return { relative: true };
    },
  },
  build: {
    target: "chrome89",
  },
});
