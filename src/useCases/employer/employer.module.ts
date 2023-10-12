import { CreateModule } from '@expressots/core';
import { EmployerController } from './employer.controller';

export const EmployerModule = CreateModule([EmployerController]);
