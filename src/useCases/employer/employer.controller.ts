import {
  Get,
  Post,
  body,
  controller,
  response,
} from '@expressots/adapter-express';
import { BaseController, StatusCode } from '@expressots/core';
import { CreateEmployerUseCase } from './create.usecase';
import { EmployerDTO } from './dtos/employee.dto';
import { FindAllEmployersUseCase } from './find-all.usecase';

@controller('/employer')
class EmployerController extends BaseController {
  constructor(
    private createUseCase: CreateEmployerUseCase,
    private listUseCase: FindAllEmployersUseCase
  ) {
    super();
  }

  @Post('/create')
  async store(@body() { name, employeeId }: EmployerDTO, @response() res: any) {
    return this.callUseCaseAsync(
      this.createUseCase.execute({ name, employeeId }),
      res,
      StatusCode.Created
    );
  }

  @Get('/list')
  async show(@response() res: any) {
    return this.callUseCaseAsync(
      this.listUseCase.execute(),
      res,
      StatusCode.Created
    );
  }
}

export { EmployerController };
