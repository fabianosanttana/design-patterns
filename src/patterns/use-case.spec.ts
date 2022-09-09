import { describe, it, expect } from "vitest";
import { AppointmentInMemoryRepository } from "./appointment.repository.in-memory";
import { MakeAppointmentUseCase } from "./use-case";
import { addDays } from "date-fns";

describe("use-case", () => {
  var inMemoryAppointmentRepository = new AppointmentInMemoryRepository();
  it("should create an appointment", async () => {
    expect(inMemoryAppointmentRepository).toBeDefined();
    var appointmentUseCase = new MakeAppointmentUseCase(
      inMemoryAppointmentRepository
    );

    var appointment = await appointmentUseCase.execute({
      title: "My appointment",
      startAt:new Date(),
      endAt: addDays(new Date(), 1),
    });

    expect(appointment).toBeDefined();

    expect(appointment.title).toBe("My appointment");
    expect(appointment.id).not.toBeUndefined();
  });
});
