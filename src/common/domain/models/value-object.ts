export abstract class ValueObject<T> {
  protected constructor(readonly value: T) {}

  isEqualTo(valueObject: ValueObject<T>): boolean {
    if (typeof valueObject !== typeof this) {
      return false;
    }
    if (valueObject.value === this.value) {
      return true;
    }

    return (
      Object.keys(valueObject.value).length === Object.keys(this).length &&
      Object.keys(valueObject).every(
        key => this.hasOwnProperty(key) && valueObject[key] === this[key],
      )
    );
  }
}
