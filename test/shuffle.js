import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle", () => {
  it("should return an array with the same length", () => {
    const arr = [1, 2, 3, 4];
    const result = shuffle([...arr]);

    expect(result).to.have.lengthOf(arr.length);
  });

  it("should contain the same elements after shuffling", () => {
    const arr = [1, 2, 3, 4];
    const result = shuffle([...arr]);

    expect(result.sort()).to.deep.equal(arr.sort());
  });
});