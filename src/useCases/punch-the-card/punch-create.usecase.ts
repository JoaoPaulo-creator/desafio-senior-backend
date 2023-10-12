import { PunchTheCardRepository } from '@repositories/punch-the-card/punch-the-card.repository';
import { provide } from 'inversify-binding-decorators';
import { PunchTheCardDTO } from './dtos/create.dto';

@provide(PunchTheCardUseCase)
class PunchTheCardUseCase {
  constructor(private repo: PunchTheCardRepository) {}

  async execute({ employerId, employeeId }: PunchTheCardDTO) {
    const { data, error } = await this.repo.create({
      employerId,
      employeeId,
    });

    if (data) {
      return data;
    } else {
      return error;
    }
  }
}

export { PunchTheCardUseCase };
