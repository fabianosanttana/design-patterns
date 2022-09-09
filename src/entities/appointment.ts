import { v1 as uuid } from "uuid";
/* An Appointment is a thing that has an id, a title, a start date, and an end
date. */
export class Appointment {
  private _id: string;
  private _title: string;
  private _startAt: Date;
  private _endAt: Date;

  constructor(title: string, startAt: Date, endAt: Date) {
    if (endAt <= startAt) {
      throw new Error("End date must be after start date");
    }

    this._id = uuid();
    this._title = title;
    this._startAt = startAt;
    this._endAt = endAt;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get startAt(): Date {
    return this._startAt;
  }

  get endAt(): Date {
    return this._endAt;
  }
}
