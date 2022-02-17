import axios from 'axios'
import {makeAutoObservable} from 'mobx'
import AuthService from '../services/AuthServise'
import { API_URL } from '../http'

export default class Store {
   user = {}
   isAuth = false

   constructor() {
      makeAutoObservable(this)
   }

   setAuth(bool){
      this.isAuth = bool
   }
   
   setUser(user) {
      this.user = user
   }

   async login (email, password) {
      try {
         const response = await AuthService.login(email, password)
         console.log(response);
         localStorage.setItem('token', response.data.accessToken)
         this.setAuth(true)
         this.setUser(response.data.user)
      } catch (e) {
         console.log(e.response?.data?.message)
      }
   }

   async registration (email, password) {
      try {
         const response = await AuthService.registration(email, password)
         localStorage.setItem('token', response.data.accessToken)
         this.setAuth(true)
         this.setUser(response.data.user)
      } catch (e) {
         console.log(e.response?.data?.message)
      }
   }

   async logout () {
      try {
         const response = await AuthService.logout()
         localStorage.removeItem('token', response.data.accessToken)
         this.setAuth(false)
         this.setUser({})
      } catch (e) {
         console.log(e.response?.data?.message)
      }
   }

   async cheAuth () {
      try {
         const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
         localStorage.setItem('token', response.data.accessToken)
         this.setAuth(true)
         this.setUser(response.data.user)
      } catch (e) {
         console.log(e.response?.data?.message)
      }
   }
}