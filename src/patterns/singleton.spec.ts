import { it, describe, expect } from "vitest";
import { SingletonClass } from "./singleton";

describe("singleton", () => {
  it("should be a singleton", () => {
    var instance = SingletonClass.getInstance();

    var instance2 = SingletonClass.getInstance();

    expect(instance.value).toBe(instance2.value);
  });
});
