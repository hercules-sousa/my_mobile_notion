import { NotionAuth } from '../mock';
import { Client } from '@notionhq/client/build/src';
import { getValueFor } from '../utils';

abstract class ServiceBase {
  notion: any;
  databaseId: string;

  constructor(databaseId: string) {
    this.notion = new Client({
      auth: getValueFor("notionAuthentication") as unknown as string,
    });
    this.databaseId = databaseId;
  }

  abstract list(): Promise<Array<Record<string, unknown>>>
}

export default ServiceBase