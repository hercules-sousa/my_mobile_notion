import { Client } from '@notionhq/client/build/src';
import { getValueFor } from '../utils';

abstract class ServiceBase {
  notion: any;
  databaseId: string | undefined;

  constructor(databaseIdKey: string) {
    getValueFor("notionAuthentication").then(response => {
      console.log(`Autenticação do notion = ${response}`)
      this.notion = new Client({
        auth: response || ""
      });
    });
    getValueFor(databaseIdKey).then(response => {
      console.log(`ID do banco de dados = ${response}`)
      this.databaseId = response || "";
    })
  }

  abstract list(): Promise<Array<Record<string, unknown>>>
}

export default ServiceBase