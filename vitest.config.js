import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    include: ['src/**/*.test.js', 'tests/**/*.test.js'],
    exclude: ['node_modules', 'dist', 'www'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.js'],
      exclude: ['src/**/*.test.js', 'src/main.js'],
      thresholds: {
        statements: 30,
        branches: 20,
        functions: 30,
        lines: 30
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
