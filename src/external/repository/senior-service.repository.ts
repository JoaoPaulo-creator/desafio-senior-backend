import { PunchTheCardEntity } from '@entities/punch-the-card.entity';
import { provide } from 'inversify-binding-decorators';
import axios from 'axios';
import { SeniorServiceEntity } from 'external/entity/senior-entity';

@provide(SeniorServiceRepository)
class SeniorServiceRepository {
  private seniorServideURL = process.env.SENIOR_PUNCH_THE_CARD_SYSTEM as string;

  private formatDateTime(dateTime?: Date) {
    const year = dateTime!.getFullYear();
    const month = ('0' + (dateTime!.getMonth() + 1)).slice(-2); // Months are 0 based, so +1 and pad with 0
    const day = ('0' + dateTime!.getDate()).slice(-2);
    const hours = ('0' + dateTime!.getHours()).slice(-2);
    const minutes = ('0' + dateTime!.getMinutes()).slice(-2);
    const seconds = ('0' + dateTime!.getSeconds()).slice(-2);

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  async savePunchTheCard(item: SeniorServiceEntity) {
    const formattedDateTime = this.formatDateTime(item.includedAt);

    const { data } = await axios.post(this.seniorServideURL, {
      employerId: item.employerId,
      employeeId: item.employeeId,
      includedAt: formattedDateTime,
    });

    return data;
  }
}

export { SeniorServiceRepository };
