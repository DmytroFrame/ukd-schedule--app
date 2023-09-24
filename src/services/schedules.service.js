import axios from "axios";

export class SchedulesService {
  static url = "https://api.dmytroframe.site/ukd/schedules";
  static storageKey = "scheduleData";

  static async getSchedules(group = "МІПЗс-23") {
    const startAt = new Date().toJSON().split('T')[0];
    const endAt = new Date();
    endAt.setDate(endAt.getDate() + 7);

    try {
      const req = await axios.get(this.url, {
        params: { group, startAt, endAt: endAt.toJSON().split('T')[0] },
      });

      localStorage.setItem(this.storageKey, JSON.stringify(req.data));

      return req.data;
    } catch (error) {
      return JSON.parse(localStorage.getItem(this.storageKey));
    }
  }
}