import axios from "axios";
import { BASE_URL } from "./base-url";

export class GroupsService {
  static url = BASE_URL + "/groups";

  static async getAll() {
    const request = await axios.get(this.url);
    return request.data;
  }
}
