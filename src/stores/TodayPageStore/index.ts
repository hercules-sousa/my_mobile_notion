import { makeObservable, observable, action } from "mobx"
import moment from "moment"
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

  tagsForPropertyPage: Array<Record<string, string>> = []

  service: ActivitiesPageServiceProps

  date = moment().format("YYYY-MM-DD");

  showProgressBar: boolean = false

  activitiesCount = 0

  estimatedHours = 0

  constructor() {
      makeObservable(this, {
        pages: observable,
        setPages: action,
        selectedFilterCard: observable,
        setSelectedFilterCard: action,
        showFilterBlocks: observable,
        toggleShowFilterBlocks: action,
        tagsForPropertyPage: observable,
        setTagsForPropertyPage: action,
        date: observable,
        setDate: action,
        showProgressBar: observable,
        toggleShowProgressBar: action,
        activitiesCount: observable,
        setActivitiesCount: action,
        estimatedHours: observable,
        setEstimatedHours: action,
      })
      this.service = new ActivitiesPageService()
  }

  async list(): Promise<void> {
    this.toggleShowProgressBar()
    const pages = await this.service.list(this.date)
    this.setPages(pages)
    this.setActivitiesCount(pages.length)
    this.setEstimatedHours()
    this.toggleShowProgressBar()
    console.log(this.pages[0].properties)
  }

  async check(pageId: string, done: boolean) {
    this.toggleShowProgressBar()
    await this.service.check(pageId, done);
    this.toggleShowProgressBar()
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

  setTagsForPropertyPage(tags: Array<Record<string, string>>) {
    this.tagsForPropertyPage = tags
  }

  listTagsForPropertyPage() {
    this.service.listTagsForProperty("Page").then((response: Array<Record<string, string>>) => {
      this.setTagsForPropertyPage(response)
    })
  }

  setDate(date: string) {
    this.date = date;
  }

  toggleShowProgressBar() {
    this.showProgressBar = !this.showProgressBar
  }

  setActivitiesCount(quantitiy: number) {
    this.activitiesCount = quantitiy
  }

  setEstimatedHours() {
    let count = 0;
    this.pages.forEach(page => {
      count += page.properties.Time.number
    })
    this.estimatedHours = Math.round(count / 60 * 10) / 10
  }
}

export default new ActivitiesPageStore();