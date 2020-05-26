import * as faker from 'faker';
import { Entity } from './Entity';
import { Id } from './Id';

describe('Entity', () => {
  const uuid = faker.random.uuid();
  const id = Reflect.construct(Id, [uuid]);
  const entity = Reflect.construct(Entity, [id]);

  it('has an id', () => {
    expect(entity.id).toBe(id);
  });

  it('can be compared', () => {
    const sameEntity = Reflect.construct(Entity, [id]);
    const differentUuid = faker.random.uuid();
    const differentId = Reflect.construct(Id, [differentUuid]);
    const differentEntity = Reflect.construct(Entity, [differentId]);

    expect(entity.isTheSameAs(sameEntity)).toBeTruthy();
    expect(entity.isTheSameAs(differentEntity)).toBeFalsy();
  });
});
