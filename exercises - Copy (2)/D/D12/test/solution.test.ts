import { expect } from "chai";
import { process, ParentType, ResultType } from "./solution";

describe("solution", () => {

  it("test 1", () => {
    const info:[ParentType,ParentType,ParentType] = ["O+", "O-", null]
    const result:[string, ResultType] = process(info);
    const expected:[string, ResultType]= ["child", ["O+", "O-"]]
    expect(result).to.deep.equal(expected);
  })

  it("test 2", () => {
    const info:[ParentType,ParentType,ParentType] = ["O+", null, "O-"]
    const result:[string, ResultType] = process(info);
    const expected:[string, ResultType]= [ 'parent2', [ 'A+', 'A-', 'B+', 'B-', 'O+', 'O-' ] ]
    expect(result).to.deep.equal(expected);
  })

  it("test 2", () => {
    const info:[ParentType,ParentType,ParentType] = ["AB-", "AB+", null]
    const result:[string, ResultType] = process(info);
    const expected:[string, ResultType]= [ 'child', [ 'A+', 'A-', 'AB+', 'AB-', 'B+', 'B-' ] ]
    expect(result).to.deep.equal(expected);
  })

  it("test 2", () => {
    const info:[ParentType,ParentType,ParentType] = ["AB+", null, "O+"]
    const result:[string, ResultType] = process(info);
    const expected:[string, ResultType]= [ 'parent2', 'IMPOSSIBLE' ]
    expect(result).to.deep.equal(expected);
  })
})
