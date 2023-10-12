import { BaseController } from '@expressots/core';
import { Get, controller } from '@expressots/adapter-express';
import { AppUseCase } from './app.usecase';
import { supabase } from '@providers/supabase/supabase-settings';

@controller('/employee')
export class AppController extends BaseController {
  constructor(private appUseCase: AppUseCase) {
    super();
  }

  @Get('/list')
  async execute() {
    const s = await supabase.from('employee').select();
    return s;
  }
}
