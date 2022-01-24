import { makeObservable, observable, action } from "mobx"

class TodayPageStore {
  pages: Record<string, unknown>[] = []

  selectedFilterCard = ""

  service = null

  constructor() {
      makeObservable(this, {
          pages: observable,
          setPages: action,
          selectedFilterCard: observable,
          setSelectedFilterCard: action
      })
  }

  setPages(pages: Array<Record<string, string>>) {
    this.pages = pages;
  }

  setSelectedFilterCard(selectedFilterCard: string) {
      this.selectedFilterCard = selectedFilterCard
  }

  setService(service: any) {
      this.service = service;
  }
}

export default new TodayPageStore();