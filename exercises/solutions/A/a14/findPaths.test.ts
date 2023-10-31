import {findPaths} from './findPaths';


describe('findPaths', () => {
    test("test 1", () => {
        expect(findPaths(0, 0, 0, 0)).toStrictEqual([""])
    })
    test("test 2", () => {
        expect(findPaths(0, 0, 0, 1)).toStrictEqual(["D"])
    })
    test("test 3", () => {
        expect(findPaths(0, 0, 1, 0)).toStrictEqual(["R"])
    })
    test("test 4", () => {
        expect(findPaths(0, 0, 1, 1)).toStrictEqual(["DR", "RD"])
    })
})
