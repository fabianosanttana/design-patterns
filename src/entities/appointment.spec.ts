import { expect, test } from "vitest";
import { Appointment } from "./appointment";

test("appointment", () => {
  expect(
    () => new Appointment(1, "Test", new Date(), new Date())
  ).toThrowError();
});
