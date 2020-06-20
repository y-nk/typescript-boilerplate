module.exports = {
  roots: ['./'],
  testEnvironment: 'node',
  globalSetup: './tests/index.ts',
  testMatch: ["**/*.test.ts"],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
}
