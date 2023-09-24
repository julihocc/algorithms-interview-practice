import {findPaths} from '../src/findPaths';

describe('findPaths', () => {
    test('findPaths(1, 1, 0, 0) should return [""]', () => {
        const expected  =  ["RD", "DR"].sort();
        const actual = findPaths(1, 1, 0, 0).sort();
        expect(actual).toEqual(expected);
    });
    test('findPaths(2, 2, 0, 0) should return ["DDRR", "DRDR", "DRRD", "RDDR", "RDRD", "RRDD"].sort()', () => {
        const expected  =  ["DDRR", "DRDR", "DRRD", "RDDR", "RDRD", "RRDD"].sort();
        const actual = findPaths(2, 2, 0, 0).sort();
        expect(actual).toEqual(expected);
    });
    test('builtPaths(3,3,1,1)',
        () => {
            const expected = ["DDRR", "DRDR", "DRRD", "RDDR", "RDRD", "RRDD"].sort();
            const actual = findPaths(3, 3, 1, 1).sort();
            expect(actual).toEqual(expected);
        });
    test(
        "builtPaths(3,2,0,1)",
        () => {
            const expected = ["RDDD", "DRDD", "DDRD", "DDDR"].sort();
            const actual = findPaths(3, 2, 0, 1).sort();
            expect(actual).toEqual(expected);
        }
    );
})
