export interface IBaseRepository<T> {
  create(item: T): Promise<any[] | null>;
  update(item: T): T | null;
  delete(id: string): Promise<boolean>;
  find(id: string);
  findAll();
}
