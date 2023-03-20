export abstract class CrudService<T> {
  abstract findAll(): Promise<T[]>;
  abstract create(_entityDto: T): Promise<T>;
  abstract delete(_id: string): Promise<T>;
  abstract update(_updatedProjectDto: Partial<T>, _id: string): Promise<T>;
}
