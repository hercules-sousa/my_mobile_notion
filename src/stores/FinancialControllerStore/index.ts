import { makeObservable, observable, action } from "mobx"

class FinancialControllerStore {
  period = ""

  constructor() {
      makeObservable(this, {
        period: observable,
        setPeriod: action
      })
  }

  setPeriod = (period: string) => {
      this.period = period
  }
}

export default new FinancialControllerStore()