import { Id } from './id';

export abstract class Entity {
  protected constructor(readonly id: Id) {}

  isTheSameAs({ id }: Entity): boolean {
    return this.id.isEqualTo(id);
  }
}
