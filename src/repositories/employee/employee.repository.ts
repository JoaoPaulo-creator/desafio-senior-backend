import { EmployeeEntity } from '@entities/employee.entity';
import { supabase } from '@providers/supabase/supabase-settings';
import { IBaseRepository } from '@repositories/base-repository.interface';
import { provide } from 'inversify-binding-decorators';

@provide(EmployeeRepository)
class EmployeeRepository implements IBaseRepository<EmployeeEntity> {
  findByName(name: string) {
    throw new Error('Method not implemented.');
  }
  async create(item: EmployeeEntity): Promise<any> {
    const t = await supabase
      .from('employee')
      .insert({ name: item.name })
      .select();

    return t;
  }

  update(item: EmployeeEntity): EmployeeEntity | null {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async find(id: string) {
    const employee = await supabase.from('employee').select().eq('id', id);
    return employee;
  }

  async findAll() {
    const { data, error } = await supabase.from('employee').select();
    return { data, error };
  }
}
export { EmployeeRepository };
