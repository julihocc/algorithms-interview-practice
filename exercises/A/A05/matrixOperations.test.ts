import { rotateMatrix } from './matrixOperations'; // Assuming the above code is in a file named matrixOperations.ts

describe('Matrix Operations', () => {
    test('rotateMatrix should rotate a 2x2 matrix 90 degrees clockwise', () => {
        const inputMatrix = [
            [1, 2],
            [3, 4]
        ];
        const expectedMatrix = [
            [3, 1],
            [4, 2]
        ];
        expect(rotateMatrix(inputMatrix)).toEqual(expectedMatrix);
    });

    // Add more test cases as needed
});
