import $api from "../http";

export default class UserService {
  static async updateUser(data) {
    return $api.post("/updateuser", {data})
  }

  static async getUser() {
    return $api.get("/getuser");
  }
}
