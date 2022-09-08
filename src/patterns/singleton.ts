let instance: SingletonClass;

export class SingletonClass {
  private _value: number;

  private constructor() {
    this._value = Math.random();
  }

  value() {
    return this._value;
  }

  /**
   * If an instance of the class doesn't exist, create one and store it in a variable
   * that any method can access. If an instance already exists, return that instance
   * @returns The instance of the class.
   */
  static getInstance() {
    if (!instance) {
      instance = new SingletonClass();
    }

    return instance;
  }
}
