export const transform = {
    '\\.tsx?$': 'ts-jest',
    '\\.jsx?$': 'babel-jest',
};
export const testEnvironment = 'jsdom';
export const setupFilesAfterEnv = ['@testing-library/jest-dom/extend-expect'];
  