import { provide } from 'inversify-binding-decorators';
import { CreateEmployeeUseCase } from './create.usecase';
import { EmployeeRepository } from '@repositories/employee/employee.repository';

@provide(FindAllEmployeesUseCase)
class FindAllEmployeesUseCase {
  constructor(private repo: EmployeeRepository) {}

  async execute() {
    const { data, error } = await this.repo.findAll();
    if (data) {
      return data;
    } else {
      return error;
    }
  }
}

export { FindAllEmployeesUseCase };
