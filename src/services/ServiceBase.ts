import { Client } from '@notionhq/client/build/src';
import { getValueFor } from '../utils';

abstract class ServiceBase {
  notion: any;
  databaseId: string | undefined;

  constructor(databaseIdKey: string) {
    this.setNotionClient()
    this.setDatabaseId(databaseIdKey)
  }

  async setNotionClient() {
    await getValueFor("notionAuthentication").then(response => {
      this.notion = new Client({
        auth: response || ""
      });
    });
  }

  async setDatabaseId(databaseIdKey: string) {
    await getValueFor(databaseIdKey).then(response => {
      this.databaseId = response || "";
    })
  }

  abstract list(): Promise<Array<Record<string, unknown>>>
}

export default ServiceBase