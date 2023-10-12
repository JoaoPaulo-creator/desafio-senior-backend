import { provide } from 'inversify-binding-decorators';
import { EmployeeEntity } from './employee.entity';

@provide(EmployerEntity)
class EmployerEntity {
  id?: string;
  name!: string;
  employeeId!: EmployeeEntity['id'];
}

export { EmployerEntity };
