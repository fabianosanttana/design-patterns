import { Repository } from "../interface/repository.interface";
import { BaseRecord } from "./entity";

export abstract class BaseRepository<Entity extends BaseRecord>
  implements Repository<Entity>
{
  abstract create(item: Entity): Promise<Entity>;
  abstract update(id: string, item: Entity): Promise<Entity>;
  abstract delete(id: string): Promise<void>;
  abstract find(item: Entity): Promise<Entity[]>;
  abstract findOne(id: string): Promise<Entity>;
}
