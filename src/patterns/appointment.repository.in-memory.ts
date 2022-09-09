import { BaseRepository } from "../base/repository";
import { Appointment } from "../entities/appointment";

export class AppointmentInMemoryRepository extends BaseRepository<Appointment> {
  private db: Map<string, Appointment> = new Map();

  async create(item: Appointment): Promise<Appointment> {
    this.db.set(item.id, item);
    return item;
  }

  async update(id: string, item: Appointment): Promise<Appointment> {
    this.db.set(id, item);
    return item;
  }

  async delete(id: string): Promise<void> {
    this.db.delete(id);
  }

  async find(item: Appointment): Promise<Appointment[]> {
    return Array.from(this.db.values());
  }

  async findOne(id: string): Promise<Appointment> {
    var entity = this.db.get(id);
    if (!entity) throw new Error("Appointment not found");

    return entity;
  }
}
