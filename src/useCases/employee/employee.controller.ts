import { BaseController, StatusCode } from '@expressots/core';
import { CreateEmployeeUseCase } from './create.usecase';
import { EmployeeDTO } from './dtos/create-employee.dto';
import {
  Get,
  Post,
  body,
  controller,
  response,
} from '@expressots/adapter-express';
import { FindAllEmployeesUseCase } from './find-all.usecase';
import { HttpResponseMessage } from '@expressots/adapter-express/lib/cjs/types/adapter-express/express-utils/httpResponseMessage';

@controller('/employee')
class EmployeeController extends BaseController {
  constructor(
    private createEmployeeUseCase: CreateEmployeeUseCase,
    private findAll: FindAllEmployeesUseCase
  ) {
    super();
  }

  @Post('/create')
  async store(@body() payload: EmployeeDTO, @response() res: any) {
    const { name } = payload;
    return this.callUseCaseAsync(
      this.createEmployeeUseCase.execute({ name }),
      res,
      StatusCode.Created
    );
  }

  @Get('/list')
  async show(@response() res: any) {
    return this.callUseCaseAsync(this.findAll.execute(), res, StatusCode.OK);
  }
}

export { EmployeeController };
