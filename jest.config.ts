/** @type {import('ts-jest').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  reporters: ['default', 'jest-junit'],
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
};
