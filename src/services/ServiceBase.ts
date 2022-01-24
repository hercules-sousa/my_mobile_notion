import { Client } from '@notionhq/client/build/src';

abstract class ServiceBase {
  notion: any;
  databaseId: string;

  constructor(databaseId: string) {
    this.notion = new Client({
      auth: 'secret_cBSv3LS52GO9yTeKKJhYjkNDeTG1ORJHJ8dPL6CbHZt',
    });
    this.databaseId = databaseId;
  }
}

export default ServiceBase