export abstract class CrudService<T> {
  abstract findAll(): Promise<T[]>;
  abstract create(_entityDto: T): Promise<T>;
}
