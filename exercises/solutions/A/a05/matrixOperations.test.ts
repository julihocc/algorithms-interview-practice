import {rotateMatrix} from './matrixOperations'; 

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

    
});
