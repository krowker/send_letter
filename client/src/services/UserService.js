import $api from "../http";

export default class UserService {
   static async getAddreses (email, password) {
      return $api.get ('/addresses')
   }
}