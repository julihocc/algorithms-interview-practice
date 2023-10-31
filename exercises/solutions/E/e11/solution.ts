export type VerticalSegment = {
    xCoord: number;
    startingY: number;
    endingY: number;
};

export type HorizontalSegment = {
    startingX: number;
    endingX: number;
    yCoord: number;
};

export type IntersectionPoint = {
    x: number;
    y: number;
};

export function findIntersections(horizontalSegments: HorizontalSegment[], verticalSegments: VerticalSegment[]): IntersectionPoint[] {
    const intersectionPoints: IntersectionPoint[] = [];

    for (const vertical of verticalSegments) {
        for (const horizontal of horizontalSegments) {
            if (
                vertical.xCoord >= horizontal.startingX &&
                vertical.xCoord <= horizontal.endingX &&
                horizontal.yCoord >= vertical.startingY &&
                horizontal.yCoord <= vertical.endingY
            ) {
                intersectionPoints.push({x: vertical.xCoord, y: horizontal.yCoord});
            }
        }
    }

    return intersectionPoints;
}
