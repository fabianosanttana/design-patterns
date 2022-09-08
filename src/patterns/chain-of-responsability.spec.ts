import { it, describe, expect } from "vitest";
import { processRequest } from "./chain-of-responsability";

describe("chain of responsability", () => {
  it("should process request", () => {
    let chain = [
      function (r: unknown) {
        if (typeof r == "number") {
          console.log("It's a number: ", r);
          return null;
        }
        return r;
      },
      function (r: unknown) {
        if (typeof r == "string") {
          console.log("It's a string: ", r);
          return null;
        }
        return r;
      },
      function (r: unknown) {
        if (Array.isArray(r)) {
          console.log("It's an array of length: ", r.length);
          return null;
        }
        return r;
      },
    ];

    processRequest(1, chain);
    processRequest("a", chain);
    processRequest([1, 2, 3], chain);
  });

  it("should throw error", () => {
    let chain = [
      function (r: unknown) {
        if (typeof r == "number") {
          console.log("It's a number: ", r);
          return null;
        }
        return r;
      },
      function (r: unknown) {
        if (typeof r == "string") {
          console.log("It's a string: ", r);
          return null;
        }
        return r;
      },
      function (r: unknown) {
        if (Array.isArray(r)) {
          console.log("It's an array of length: ", r.length);
          return null;
        }
        return r;
      },
    ];

    expect(() => processRequest({}, chain)).toThrow(
      "Error: request could not be fulfilled"
    );
  });
});
