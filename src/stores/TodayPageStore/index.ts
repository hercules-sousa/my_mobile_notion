import { makeObservable, observable, action } from "mobx"
import ActivitiesPageService from "../../services/ActivitiesPageService"
import { NotionCheckboxProps, NotionDateProps, NotionMultiSelectProps, NotionNumberProps, NotionTitleProps } from "../../types/NotionTypes"

interface ActivitiesPageServiceProps {
    list: Function;
    check: Function;
    listTagsForProperty: Function;
    setNotionClient: Function;
    setDatabaseId: Function;
}
interface PagesProps {
  id: string;
  properties: {
    Date: NotionDateProps;
    Time: NotionNumberProps;
    Tipo: NotionMultiSelectProps;
    Page: NotionMultiSelectProps;
    Done: NotionCheckboxProps;
    Name: NotionTitleProps;
  };
}
class ActivitiesPageStore {
  pages: PagesProps[] = []

  selectedFilterCard = ""

  showFilterBlocks = true

  tagsForPropertyPage = [{}]

  service: ActivitiesPageServiceProps

  constructor() {
      makeObservable(this, {
        pages: observable,
        setPages: action,
        selectedFilterCard: observable,
        setSelectedFilterCard: action,
        showFilterBlocks: observable,
        toggleShowFilterBlocks: action,
        listTagsForPropertyPage: action,
      })
      this.service = new ActivitiesPageService()
  }

  async list(): Promise<void> {
    const pages = await this.service.list()
    this.setPages(pages)
  }

  async check(pageId: string, done: boolean) {
    await this.service.check(pageId, done);
    this.list()
  }

  setPages(pages: Array<PagesProps>): void {
    this.pages = pages;
  }

  setSelectedFilterCard(selectedFilterCard: string): void {
      this.selectedFilterCard = selectedFilterCard
  }

  setService(service: any): void {
      this.service = service;
  }

  toggleShowFilterBlocks() {
    this.showFilterBlocks = !this.showFilterBlocks
  }

  listTagsForPropertyPage() {
    this.service.listTagsForProperty("Page").then((response: Promise<Array<Record<string, string>>>) => {
      this.tagsForPropertyPage = [{...this.tagsForPropertyPage}, response]
    })
  }
}

export default new ActivitiesPageStore();