/**
 * const horizontalSegments: HorizontalSegment[] = [
 *    { startingX: 1, endingX: 5, yCoord: 2 },
 *    { startingX: 3, endingX: 6, yCoord: 5 }
 * ];
 *
 * const verticalSegments: VerticalSegment[] = [
 *    { xCoord: 3, startingY: 1, endingY: 6 },
 *    { xCoord: 4, startingY: 3, endingY: 5 }
 * ];
 *
 * console.log(findIntersections(horizontalSegments, verticalSegments)); # [ { x: 3, y: 2 }, { x: 3, y: 5 }, { x: 4, y: 5 } ]
 */

import {expect} from "chai";
import {HorizontalSegment, VerticalSegment, findIntersections} from './solution';

describe('findIntersections', () => {
    test('finds intersections', () => {
        const horizontalSegments: HorizontalSegment[] = [
            { startingX: 1, endingX: 5, yCoord: 2 },
            { startingX: 3, endingX: 6, yCoord: 5 }
        ];

        const verticalSegments: VerticalSegment[] = [
            { xCoord: 3, startingY: 1, endingY: 6 },
            { xCoord: 4, startingY: 3, endingY: 5 }
        ];

        expect(findIntersections(horizontalSegments, verticalSegments)).to.deep.equal([ { x: 3, y: 2 }, { x: 3, y: 5 }, { x: 4, y: 5 } ]);
    });
});