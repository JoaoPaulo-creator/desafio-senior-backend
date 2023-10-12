import { PunchTheCardRepository } from '@repositories/punch-the-card/punch-the-card.repository';
import { provide } from 'inversify-binding-decorators';
import { PunchTheCardDTO } from './dtos/create.dto';
import { SeniorServiceSavePunchCardUseCase } from 'external/service/save-punch-card-register.usecase';
import { SeniorServiceEntity } from 'external/entity/senior-entity';

@provide(PunchTheCardUseCase)
class PunchTheCardUseCase {
  constructor(
    private repo: PunchTheCardRepository,
    private seniorUseCase: SeniorServiceSavePunchCardUseCase
  ) {}

  async execute({
    employerId,
    employeeId,
    includedAt = new Date(),
  }: PunchTheCardDTO) {
    const seniorEntity = new SeniorServiceEntity(
      employerId,
      employeeId,
      includedAt
    );

    const { data, error } = await this.repo.create({
      employerId,
      employeeId,
    });

    // TODO pensar numa forma de desacoplar deste fluxo, devido a demora na resposta do sistema da senior
    this.seniorUseCase.execute(seniorEntity); // salvando o ponto no sistema legado da senior

    if (data) {
      return data;
    }

    if (error) {
      return error;
    }
  }
}

export { PunchTheCardUseCase };
