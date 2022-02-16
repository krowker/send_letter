import $api from "../http";

export default class UserService {
   static async getAddreses () {
      return $api.get ('/addresses')
   }
}