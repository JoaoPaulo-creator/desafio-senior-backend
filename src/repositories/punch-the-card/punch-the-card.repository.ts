import { EmployerEntity } from '@entities/employer.entity';
import { PunchTheCardEntity } from '@entities/punch-the-card.entity';
import { supabase } from '@providers/supabase/supabase-settings';
import { IBaseRepository } from '@repositories/base-repository.interface';
import { provide } from 'inversify-binding-decorators';

@provide(PunchTheCardRepository)
class PunchTheCardRepository implements IBaseRepository<PunchTheCardEntity> {
  async create(item: PunchTheCardEntity): Promise<any> {
    const t = await supabase
      .from('punch-the-card')
      .insert({
        employerId: item.employerId,
        employeeId: item.employeeId,
      })
      .select();

    return t;
  }

  update(item: PunchTheCardEntity): PunchTheCardEntity | null {
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
      .from('punch-the-card')
      .select()
      .eq('id', id);

    return { data, error };
  }

  async findAll() {
    const { data, error } = await supabase.from('punch-the-card').select();
    return { data, error };
  }
}
export { PunchTheCardRepository };
