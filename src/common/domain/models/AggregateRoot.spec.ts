import * as faker from 'faker';
import { AggregateRoot } from './AggregateRoot';
import { Entity } from './Entity';
import { Id } from './Id';

describe('Aggregate root', () => {
  it('is an entity', () => {
    const uuid = faker.random.uuid();
    const id = Reflect.construct(Id, [uuid]);
    const aggregateRoot = Reflect.construct(AggregateRoot, [id]);

    expect(aggregateRoot).toBeInstanceOf(Entity);
  });
});
