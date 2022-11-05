import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import htmlPlugin from "vite-plugin-html-config";

const htmlPluginOpt = {
  title: "Adam Borowski",
  favicon: "logo.svg",
  links: [{ rel: "icon", href: "/logo.svg" }],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlPlugin(htmlPluginOpt)],
  server: {
    port: 2137,
  },
});
