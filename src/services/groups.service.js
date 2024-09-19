import axios from "axios";
import { BASE_URL } from "./base-url";

export class GroupsService {
  static url = BASE_URL + "/groups";

  static async getAll() {
    try {
      const request = await axios.get(this.url);

      if (!Array.isArray(request.data)) {
        request.status = 500;
        throw { response: request };
      }

      return request.data;
    } catch (error) {
      console.error(error);

      if (error.response.status === 500) {
        throw new Error(JSON.stringify(error.response.data));
      }
    }
  }
}
