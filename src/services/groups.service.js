import axios from "axios";

export class GroupsService {
  static url = "https://api.dmytroframe.site/ukd/groups";
  static selectedGroupKey = "selectedGroup";

  static async getAll() {
    const request = await axios.get(this.url);
    return request.data;
  }

  static setSelectedGroup(groupName) {
    localStorage.setItem(this.selectedGroupKey, groupName);
  }

  static getSelectedGroup() {
    console.count("setSelectedGroup");
    const result = localStorage.getItem(this.selectedGroupKey);
    return result === "undefined" ? null : result;
  }
}
