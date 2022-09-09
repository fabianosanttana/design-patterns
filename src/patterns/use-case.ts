// make an appointment use case using base

import { BaseUseCase } from "../base/use-case";
import { Appointment } from "../entities/appointment";
import { BaseRepository } from "../base/repository";

interface MakeAppointmentUseCaseInput {
  title: string;
  startAt: Date;
  endAt: Date;
}

type MakeAppointmentUseCaseOutput = Appointment;

/* It creates an appointment and saves it to the database */
export class MakeAppointmentUseCase extends BaseUseCase<
  MakeAppointmentUseCaseInput,
  MakeAppointmentUseCaseOutput
> {
  constructor(private repository: BaseRepository<Appointment>) {
    super();
  }

  /**
   * It creates an appointment and saves it to the database
   * @param {MakeAppointmentUseCaseInput}  - `endAt` - The end time of the
   * appointment.
   * @returns The appointment that was created.
   */
  async execute({
    endAt,
    startAt,
    title,
  }: MakeAppointmentUseCaseInput): Promise<MakeAppointmentUseCaseOutput> {
    const appointment = new Appointment(title, startAt, endAt);
    return await this.repository.create(appointment);
  }
}
