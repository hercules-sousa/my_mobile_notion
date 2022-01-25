import { makeObservable, observable, action } from "mobx"
import TodayPageService from "../../services/TodayPageService"
import { NotionCheckboxProps, NotionDateProps, NotionMultiSelectProps, NotionNumberProps, NotionTitleProps } from "../../types/NotionTypes"

interface TodayPageServiceProps {
    list: Function;
    check: Function;
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
class TodayPageStore {
  pages: PagesProps[] = []

  selectedFilterCard = ""

  service: TodayPageServiceProps

  constructor() {
      makeObservable(this, {
          pages: observable,
          setPages: action,
          selectedFilterCard: observable,
          setSelectedFilterCard: action,
      })
      this.service = new TodayPageService()
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
}

export default new TodayPageStore();