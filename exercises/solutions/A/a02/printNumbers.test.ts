import { printNumbers } from './printNumbers';
describe('printNumbers', () => {
    let logOutput: number[] = [];

    beforeEach(() => {
        logOutput = [];
        console['log'] = (output: number) => logOutput.push(output);
    });

    it('should print numbers from 1 to 100', () => {
        const result = printNumbers();
        expect(result).toEqual(Array.from({ length: 100 }, (_, i) => i + 1));
    });
});
