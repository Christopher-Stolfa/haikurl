import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['./jest-setup.ts'],
  testEnvironment: 'jsdom',
};
export default config;
