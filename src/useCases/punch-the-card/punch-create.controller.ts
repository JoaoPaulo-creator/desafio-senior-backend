import { Post, body, controller, response } from '@expressots/adapter-express';
import { BaseController, StatusCode } from '@expressots/core';
import { PunchTheCardUseCase } from './punch-create.usecase';
import { PunchTheCardDTO } from './dtos/create.dto';

@controller('/punch-the-card')
class PunchTheCardController extends BaseController {
  constructor(private useCase: PunchTheCardUseCase) {
    super();
  }

  @Post('/create')
  async store(
    @body() { employerId, employeeId }: PunchTheCardDTO,
    @response() res: any
  ) {
    return this.callUseCaseAsync(
      this.useCase.execute({ employerId, employeeId }),
      res,
      StatusCode.Created
    );
  }
}

export { PunchTheCardController };
