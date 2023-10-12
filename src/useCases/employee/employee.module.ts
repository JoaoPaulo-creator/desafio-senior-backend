import { CreateModule } from '@expressots/core';
import { EmployeeController } from './employee.controller';

export const EmployeeModule = CreateModule([EmployeeController]);
