export interface Repository<Entity> {
  create(item: Entity): Promise<Entity>;
  update(id: string, item: Entity): Promise<Entity>;
  delete(id: string): Promise<void>;
  find(item: Entity): Promise<Entity[]>;
  findOne(id: string): Promise<Entity>;
}