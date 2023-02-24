import $api from "../http";

export default class UserService {
  static async updateUser(data) {
    return $api.post("/updateuser")
  }

  static async getUser() {
    return $api.get("/getuser");
  }
}
