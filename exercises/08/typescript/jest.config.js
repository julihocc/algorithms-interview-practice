module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            tsconfig: './tsconfig.json'
        }],
    },
    testMatch: ['**/*.test.(ts|js)'],
};
