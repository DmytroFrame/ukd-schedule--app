export class FindOptionService {
  static storageKey = "findOptions";

  static getFindOption() {
    const result = localStorage.getItem(this.storageKey);
    return result === "undefined" ? null : JSON.parse(result);
  }

  static setFindOption(findOptions) {
    console.log("User selected", findOptions);
    localStorage.setItem(this.storageKey, JSON.stringify(findOptions));
  }

  static deleteFindOption() {
    localStorage.removeItem(this.storageKey);
  }
}
