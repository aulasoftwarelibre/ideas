import { ValueObject } from './ValueObject';

describe('Value object', () => {
  const value = expect.anything();
  const valueObject = Reflect.construct(ValueObject, [value]);

  it('has a value', () => {
    expect(valueObject.value).toBe(value);
  });

  it('can be compared', () => {
    const sameValueObject = Reflect.construct(ValueObject, [value]);
    const differentValueObject = Reflect.construct(ValueObject, [
      expect.anything(),
    ]);

    expect(valueObject.isEqualTo(sameValueObject)).toBeTruthy();
    expect(valueObject.isEqualTo(differentValueObject)).toBeFalsy();
  });
});
