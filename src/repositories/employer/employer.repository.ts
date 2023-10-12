import { EmployerEntity } from '@entities/employer.entity';
import { supabase } from '@providers/supabase/supabase-settings';
import { IBaseRepository } from '@repositories/base-repository.interface';
import { provide } from 'inversify-binding-decorators';

@provide(EmployerReporisoty)
class EmployerReporisoty implements IBaseRepository<EmployerEntity> {
  async create(item: EmployerEntity): Promise<any> {
    const t = await supabase
      .from('employer')
      .insert({ name: item.name, employeeId: item.employeeId })
      .select();

    return t;
  }

  update(item: EmployerEntity): EmployerEntity | null {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<boolean> {
    const { data, error } = await supabase
      .from('employee')
      .delete()
      .eq('id', id);

    return error ? false : true; // was deleted?
  }

  async find(id: string) {
    const { data, error } = await supabase
      .from('employer')
      .select()
      .eq('id', id);

    return { data, error };
  }

  async findAll() {
    const { data, error } = await supabase.from('employer').select();
    return { data, error };
  }
}
export { EmployerReporisoty };
