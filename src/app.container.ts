import { Container } from 'inversify';
import { AppContainer } from '@expressots/core';
import { EmployeeModule } from '@useCases/employee/employee.module';
import { EmployerModule } from '@useCases/employer/employer.module';
import { PunchTheCardModule } from '@useCases/punch-the-card/punch-the-card.module';

const appContainer = new AppContainer();

export const container: Container = appContainer.create([
  // Add your modules here
  EmployeeModule,
  EmployerModule,
  PunchTheCardModule,
]);
