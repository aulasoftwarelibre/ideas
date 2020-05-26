import { Entity } from './Entity';
import { Id } from './Id';

export abstract class AggregateRoot extends Entity {
  protected constructor(readonly id: Id) {
    super(id);
  }
}
