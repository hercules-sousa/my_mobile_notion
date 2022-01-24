import { NotionAuth } from '../mock';
import { Client } from '@notionhq/client/build/src';

abstract class ServiceBase {
  notion: any;
  databaseId: string;

  constructor(databaseId: string) {
    this.notion = new Client({
      auth: NotionAuth,
    });
    this.databaseId = databaseId;
  }

  abstract list(): Promise<Record<string, unknown>>
}

export default ServiceBase