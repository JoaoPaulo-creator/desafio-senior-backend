import { provide } from 'inversify-binding-decorators';

@provide(EmployeeEntity)
class EmployeeEntity {
  id?: string;
  name!: string;
}

export { EmployeeEntity };
