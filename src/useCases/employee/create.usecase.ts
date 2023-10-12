import { EmployeeRepository } from '@repositories/employee/employee.repository';
import { provide } from 'inversify-binding-decorators';
import { AppError, StatusCode } from '@expressots/core';
import { Report } from '@expressots/core';
import { EmployeeDTO } from './dtos/create-employee.dto';

@provide(CreateEmployeeUseCase)
class CreateEmployeeUseCase {
  constructor(private employeeRepository: EmployeeRepository) {}

  async execute({ name }: EmployeeDTO) {
    //TODO encontrar um forma de retornar um erro quando nao tiver um nome informado
    if (!name) {
      const err = new AppError(
        'Name is required',
        StatusCode.BadRequest,
        'create-employee-usecase'
      );

      throw new Error('name is required');
    }

    const createEmployee = await this.employeeRepository.create({ name });

    if (createEmployee.data) {
      return createEmployee.data;
    } else {
      return createEmployee.error;
    }
  }
}

export { CreateEmployeeUseCase };
