import { describe, expect, it } from "vitest";
import * as module from "./base.module";

describe("base module", () => {
  it("should pass", () => {
    var moduleBase = new module.Module.BaseModule();
    expect(moduleBase).toBeDefined();
  });
});
