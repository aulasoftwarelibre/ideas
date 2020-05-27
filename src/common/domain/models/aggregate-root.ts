import { Entity } from './entity';
import { Id } from './id';

export abstract class AggregateRoot extends Entity {
  protected constructor(readonly id: Id) {
    super(id);
  }
}
