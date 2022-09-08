// implement a facade sample
// facade pattern is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes
// references: https://refactoring.guru/design-patterns/facade

export class Facade {
  private _subsystem1: Subsystem1;
  private _subsystem2: Subsystem2;

  constructor(subsystem1: Subsystem1, subsystem2: Subsystem2) {
    this._subsystem1 = subsystem1;
    this._subsystem2 = subsystem2;
  }

/**
 * Facade initializes subsystems, then orders them to perform the action.
 * @returns The facade is returning the result of the operations performed by the
 * subsystems.
 */
  public operation(): string {
    let result = "Facade initializes subsystems:";
    result += this._subsystem1.operation1();
    result += this._subsystem2.operation1();

    result += "Facade orders subsystems to perform the action:";
    result += this._subsystem1.operationN();
    result += this._subsystem2.operationZ();

    return result;
  }
}

export class Subsystem1 {
  public operation1(): string {
    return "Subsystem1: Ready!";
  }

  public operationN(): string {
    return "Subsystem1: Go!";
  }
}

export class Subsystem2 {
  public operation1(): string {
    return "Subsystem2: Get ready!";
  }

  public operationZ(): string {
    return "Subsystem2: Fire!";
  }
}
