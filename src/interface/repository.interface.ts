import { BaseRecord } from "../base/entity";

export interface Repository<Entity extends BaseRecord> {
  create(item: Entity): Promise<Entity>;
  update(id: string, item: Entity): Promise<Entity>;
  delete(id: string): Promise<void>;
  find(item: Entity): Promise<Entity[]>;
  findOne(id: string): Promise<Entity>;
}