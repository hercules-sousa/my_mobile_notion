import { makeObservable, observable, action } from "mobx"

class SettingsStore {
  notionAuthentication = ""

  activitiesDatabaseId = ""

  constructor() {
      makeObservable(this, {
        notionAuthentication: observable,
        setNotionAuthentication: action,
        activitiesDatabaseId: observable,
        setActivitiesDatabaseId: action
      })
  }

  setNotionAuthentication = (notionAuthentication: string) => {
      this.notionAuthentication = notionAuthentication
  }

  setActivitiesDatabaseId = (activitiesDatabaseId: string) => {
    this.activitiesDatabaseId = activitiesDatabaseId
  }
}

export default new SettingsStore()