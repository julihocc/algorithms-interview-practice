/**
 * @file survivalFish.test.ts
 */

/**
 * Function to determine the number of surviving fish
 * @param fishArray - Array of integers representing fish
 * @returns Number of surviving fish
 */
export function survivalFish(fishArray: number[]): number {
    //console.log(`fishArray: ${fishArray}`);
    const survivals: number[] = [fishArray.shift() as number];

    while (fishArray.length > 0) {
        const contender = fishArray.shift() as number;
        //console.log(`contender: ${contender}`);

        while (survivals.length > 0) {
            const defender = survivals.pop() as number;
            //console.log(`\tdefender: ${defender}`);

            if (defender > 0 && contender < 0) {
                //console.log(`\t\tfighting ${defender} vs ${contender}`);
                if (defender < -contender) {
                    if (survivals.length > 0) {
                        continue;
                    } else {
                        survivals.push(contender);
                        break;
                    }
                } else {
                    survivals.push(defender);
                    break;
                }
            } else {
                survivals.push(defender);
                survivals.push(contender);
                break;
            }
        }
        //console.log(`\tsurvivals: ${survivals}`);
        //console.log(`\tfishArray: ${fishArray}`);
    }
    return survivals.length;
}
