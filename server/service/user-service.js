const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const ApiError = require('../exceptions/api-error')

class UserService {
   async registration (email, password) {
      const condidate =  await UserModel.findOne({email})
      if (condidate) {
         throw ApiError.BadRequest(`${email} уже зарегистрирован`)
      }
      
   }

   async activate (activationLink) {
      const user = await UserModel.findOne({activationLink})
      if (!user) {
         throw ApiError.BadRequest('Неверная ссылка активации')
      }
      user.isActivated = true
      await user.save()
   }
}