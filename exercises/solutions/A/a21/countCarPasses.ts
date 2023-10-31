/**
 * @file countCarPasses.ts
 * @description This file contains a function to count the number of times cars will pass each other.
 */

/**
 * Count the number of times cars will pass each other.
 * @param cars - An array of strings representing the direction of each car.
 * @returns The number of times cars will pass each other.
 */
const countCarPasses = (cars: string[]): number => {

    let count: number = 0

    for (let i: number = 0; i < cars.length; i++) {
        if (cars[i] === "c->") {
            for (let j: number = i + 1; j < cars.length; j++) {
                if (cars[j] === "<-c") {
                    count++;
                }
            }
        }
    }

    return count;
};

export {countCarPasses};
