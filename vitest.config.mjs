import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          environment: 'node',
          include: ['packages/**/test.js']
        }
      },
      {
        test: {
          name: 'browser',
          include: ['packages/**/test.browser.js'],
          browser: {
            enabled: true,
            provider: playwright(),
            headless: true,
            instances: [{ browser: 'chromium' }]
          }
        }
      }
    ],
    coverage: {
      provider: 'v8',
      include: ['packages/**/*.js'],
      exclude: ['packages/**/test*.js'],
      reporter: ['text', 'html', 'lcov']
    }
  }
});
