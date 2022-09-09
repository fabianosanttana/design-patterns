import { v1 as uuid } from "uuid";

export class BaseRecord {
  _id: string;

  constructor() {
    this._id = uuid();
  }

  get id(): string {
    return this._id;
  }
}
