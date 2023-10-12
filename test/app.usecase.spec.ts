import 'reflect-metadata';
import { SavePunchCardRegisterService } from '../src/external/service/save-punch-card-register';
import { SeniorServiceRepository } from '../src/external/repository/senior-service.repository';
import { SeniorSeviceDTO } from '../src/external/dto/senior-service.dto';
import { randomUUID } from 'crypto';

describe('Senior service integration', () => {
  let seniorService: SavePunchCardRegisterService;
  let seniorRepo: SeniorServiceRepository;

  beforeEach(() => {
    seniorRepo = new SeniorServiceRepository();
    seniorService = new SavePunchCardRegisterService(seniorRepo);
  });

  it('should returns a valid response', async () => {
    const payload: SeniorSeviceDTO = {
      employeeId: randomUUID(),
      employerId: randomUUID(),
    };

    const response = await seniorService.execute(payload);
    expect(response).toEqual({ message: 'success', system: 'legacy' });
  });
});
