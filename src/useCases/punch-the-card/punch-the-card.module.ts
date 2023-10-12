import { CreateModule } from '@expressots/core';
import { PunchTheCardController } from './punch-create.controller';

export const PunchTheCardModule = CreateModule([PunchTheCardController]);
