import * as assert from "assert/strict";
import { compile } from "../src/yall.js";

describe("Sample Test", () => {
  it("should compile === true", () => {
    assert.equal(compile(), "eventually this will return a compiled code");
  });
});
