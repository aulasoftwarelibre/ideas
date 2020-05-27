import * as faker from 'faker';
import { AggregateRoot } from './aggregate-root';
import { Entity } from './entity';
import { Id } from './id';

describe('Aggregate root', () => {
  it('is an entity', () => {
    const uuid = faker.random.uuid();
    const id = Reflect.construct(Id, [uuid]);
    const aggregateRoot = Reflect.construct(AggregateRoot, [id]);

    expect(aggregateRoot).toBeInstanceOf(Entity);
  });
});
