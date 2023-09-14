const { printNumbers } = require('./printNumbers'); // Assuming your function is in a file called 'printNumbers.js'

describe('printNumbers', () => {
    let logOutput = null;

    beforeEach(() => {
        logOutput = [];
        console['log'] = (output) => logOutput.push(output);
    });

    it('should print numbers from 1 to 100', () => {
        printNumbers(1);
        expect(logOutput).toEqual(Array.from({ length: 100 }, (_, i) => i + 1));
    });

    it('should not print numbers less than the start parameter', () => {
        printNumbers(10);
        expect(logOutput).not.toContain(1);
        expect(logOutput).not.toContain(9);
    });

    it('should not print numbers greater than 100', () => {
        printNumbers(99);
        expect(logOutput).not.toContain(101);
    });
});
