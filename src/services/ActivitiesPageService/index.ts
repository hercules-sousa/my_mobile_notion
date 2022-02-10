import moment from "moment";
import { getValueFor } from "../../utils";
import ServiceBase from "../ServiceBase";

class ActivitiesPageService extends ServiceBase {
  constructor() {
    super("activitiesDatabaseId")
  }

  async list(): Promise<Record<string, string>[]> {
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
      return [];
    }
  }

  async check(pageId: string, done: boolean) {
    const id = pageId;
    const response = await this.notion.pages.update({
      page_id: id,
      properties: {
        'Done': {
          checkbox: !done,
        },
      },
    });
  }

  async listTagsForProperty(property: string): Promise<Array<Record<string, string>>> {
    try {
      const { properties } = await this.notion.databases.retrieve({
        database_id: this.databaseId
      });
      return properties[`${property}`].multi_select.options;
    } catch (error) {
      return [{}];
    }
  }
}

export default ActivitiesPageService