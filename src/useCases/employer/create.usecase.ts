import { EmployerReporisoty } from '@repositories/employer/employer.repository';
import { provide } from 'inversify-binding-decorators';
import { EmployerDTO } from './dtos/employee.dto';

@provide(CreateEmployerUseCase)
class CreateEmployerUseCase {
  constructor(private employerRepo: EmployerReporisoty) {}

  async execute({ name, employeeId }: EmployerDTO) {
    const { data, error } = await this.employerRepo.create({
      name,
      employeeId,
    });

    if (data) {
      return data;
    } else {
      return error;
    }
  }
}

export { CreateEmployerUseCase };
