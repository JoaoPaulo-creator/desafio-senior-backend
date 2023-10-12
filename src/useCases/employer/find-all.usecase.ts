import { provide } from 'inversify-binding-decorators';
import { EmployerReporisoty } from '../../repositories/employer/employer.repository';

@provide(FindAllEmployersUseCase)
class FindAllEmployersUseCase {
  constructor(private repo: EmployerReporisoty) {}

  async execute() {
    const { data, error } = await this.repo.findAll();
    if (data) {
      return data;
    } else {
      return error;
    }
  }
}

export { FindAllEmployersUseCase };
