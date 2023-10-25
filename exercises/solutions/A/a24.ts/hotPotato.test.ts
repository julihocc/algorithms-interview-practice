import { expect } from "chai";
import { hotPotato } from "./hotPotato";

/**
 * @file hotPotato.test.ts
 * @description Unit tests for hotPotato function
 */

describe("Hot Potato Simulation", () => {
    it("should return the last remaining player", () => {
        const players = ["John", "Jane", "Sue", "Bob"];
        const num = 3;
        const lastPlayer: string = hotPotato(players, num);
        expect(lastPlayer).to.equal("Jane");
    });
});
