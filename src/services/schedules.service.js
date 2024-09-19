import axios from "axios";
import { BASE_URL } from "./base-url";

export class SchedulesService {
  static url = BASE_URL + "/schedules";
  static storageKey = "scheduleData";

  static async getSchedules({ group, teacher }) {
    const startAt = new Date().toJSON().split("T")[0];
    const endAt = new Date();
    endAt.setDate(endAt.getDate() + 7);

    try {
      const req = await axios.get(this.url, {
        params: {
          startAt,
          endAt: endAt.toJSON().split("T")[0],
          group,
          teacher,
        },
      });

      if (!Array.isArray(req.data)) {
        req.status = 500;
        throw { response: req };
      }

      localStorage.setItem(this.storageKey, JSON.stringify(req.data));

      return req.data;
    } catch (error) {
      console.error(error);

      try {
        const data = JSON.parse(localStorage.getItem(this.storageKey));
        if (data.length) return data;
      } catch {}

      if (error.response.status === 500) {
        throw new Error(JSON.stringify(error.response.data));
      }

      return JSON.parse(localStorage.getItem(this.storageKey));
    }
  }
}
