import { provide } from 'inversify-binding-decorators';

@provide(SeniorServiceEntity)
class SeniorServiceEntity {
  id?: string;
  employerId!: string;
  employeeId!: string;
  includedAt?: Date;

  constructor(employerId: string, employeeId: string, includedAt?: Date) {
    this.employerId = employerId;
    this.employeeId = employeeId;

    this.includedAt = includedAt;
  }
}

export { SeniorServiceEntity };
