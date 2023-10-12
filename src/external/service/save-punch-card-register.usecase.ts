import { SeniorSeviceDTO } from 'external/dto/senior-service.dto';
import { SeniorServiceEntity } from 'external/entity/senior-entity';
import { SeniorServiceRepository } from 'external/repository/senior-service.repository';
import { provide } from 'inversify-binding-decorators';

@provide(SeniorServiceSavePunchCardUseCase)
class SeniorServiceSavePunchCardUseCase {
  constructor(private repo: SeniorServiceRepository) {}

  async execute(payload: SeniorSeviceDTO) {
    const { employerId, employeeId, includedAt } = payload;
    const seniorServiceEntity = new SeniorServiceEntity(
      employeeId,
      employerId,
      includedAt
    );

    const saveRegister = await this.repo.savePunchTheCard(seniorServiceEntity);

    if (!saveRegister) {
      throw new Error(
        'An error ocurred while trying to save punch the card register at the senior service'
      );
    }

    return saveRegister;
  }
}

export { SeniorServiceSavePunchCardUseCase };
