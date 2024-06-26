import { defineConfig } from "vite";

export default defineConfig((_env) => ({
  clearScreen: false,
  environments: {
    custom: {
      dev: {
        optimizeDeps: {
          include: [
            "react",
            "react/jsx-runtime",
            "react/jsx-dev-runtime",
            "react-dom",
            "react-dom/client",
          ],
        },
      },
    },
  },
}));
