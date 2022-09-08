import { it, describe, expect } from "vitest";
import { Facade, Subsystem1, Subsystem2 } from "./facade";

describe("facade", () => {
  it("should return facade result", () => {
    const facade = new Facade(new Subsystem1(), new Subsystem2());

    expect(facade.operation()).toBe(
      "Facade initializes subsystems:Subsystem1: Ready!Subsystem2: Get ready!Facade orders subsystems to perform the action:Subsystem1: Go!Subsystem2: Fire!"
    );
  });
});
