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
    let count = 0;
    let carsToRight = 0;

    // Functional approach using forEach
    cars.forEach((car) => {
        if (car === 'c->') {
            carsToRight++;
        } else if (car === '<-c') {
            count += carsToRight;
        }
    });

    return count;
};

export { countCarPasses };
