import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  middleware: "src/middleware.ts",
  vite: {
    plugins: [tailwindcss()],
  },
});
