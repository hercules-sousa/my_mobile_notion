import { makeObservable, observable, action } from "mobx"

class TodayPageStore {
  selectedFilterCard = ""

  constructor(selectedFilterCard: string) {
      makeObservable(this, {
          selectedFilterCard: observable,
          setSelectedFilterCard: action
      })
      this.selectedFilterCard = selectedFilterCard
  }

  setSelectedFilterCard(selectedFilterCard: string) {
      this.selectedFilterCard = selectedFilterCard
  }
}

export default new TodayPageStore("");