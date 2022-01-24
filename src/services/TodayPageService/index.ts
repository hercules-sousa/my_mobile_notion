import moment from "moment";
import { TodayPageDatabaseId } from "../../mock";
import ServiceBase from "../ServiceBase";

class TodayPageService extends ServiceBase {
  constructor() {
    super(TodayPageDatabaseId)
  }

  async list() {
    const todayDate = moment().format('YYYY-MM-DD');

    try {
      const { results } = await this.notion.databases.query({
        database_id: this.databaseId,
        filter: {
          property: 'Date',
          date: {
            equals: todayDate,
          },
        },
      });
      return results;
    } catch (error: any) {
      console.log(error.body);
      return {};
    }
  }
}