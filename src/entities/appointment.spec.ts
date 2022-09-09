import { expect, test } from "vitest";
import { Appointment } from "./appointment";
import { v1 as uuid } from "uuid";

test("appointment", () => {
  expect(() => new Appointment("Test", new Date(), new Date())).toThrowError();
});
