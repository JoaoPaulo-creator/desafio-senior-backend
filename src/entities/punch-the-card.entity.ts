import { provide } from 'inversify-binding-decorators';
import { EmployeeEntity } from './employee.entity';
import { EmployerEntity } from './employer.entity';

@provide(PunchTheCardEntity)
class PunchTheCardEntity {
  id?: string;
  employerId!: EmployerEntity['id'];
  employeeId!: EmployeeEntity['id'];
}

export { PunchTheCardEntity };
