import $api from "../http";

export default class AuthService {
   static async login (email, password) {
      return $api.post('/login', {email, password})
   }

   static async registration (email, password, data) {
      return $api.post('/registration', {email, password, data})
   }

   static async logout () {
      return $api.post('/logout')
   }
}