import { makeObservable, observable, action } from "mobx"

class FinancialControllerStore {
  period = ""

  constructor(period: string) {
      makeObservable(this, {
        period: observable,
        setPeriod: action
      })
      this.period = period
  }

  setPeriod = (period: string) => {
      this.period = period
  }
}

export default new FinancialControllerStore("Teste")