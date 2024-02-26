import axios from "axios";
import { BASE_URL } from "./base-url";

export class TeachersService {
  static url = BASE_URL + "/teachers";

  static async getAll() {
    const request = await axios.get(this.url);
    return request.data;
  }
}
