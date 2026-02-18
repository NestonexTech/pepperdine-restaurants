import path from "node:path";
import type { NextConfig } from "next";

const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  // Force tailwindcss to resolve from this project (fixes "resolve in D:\Nestonex" when workspace is parent)
  webpack: (config) => {
    config.resolve ??= {};
    config.resolve.context = projectRoot;
    config.resolve.alias = {
      ...config.resolve?.alias,
      tailwindcss: path.join(projectRoot, "node_modules", "tailwindcss"),
      "@tailwindcss/postcss": path.join(projectRoot, "node_modules", "@tailwindcss/postcss"),
    };
    return config;
  },
  turbopack: {
    resolveAlias: {
      tailwindcss: path.join(projectRoot, "node_modules", "tailwindcss"),
      "@tailwindcss/postcss": path.join(projectRoot, "node_modules", "@tailwindcss/postcss"),
    },
  },
};

export default nextConfig;
