const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')

class UserService {
   async registration (email, password) {
      const condidate =  await UserModel.findOne({email})
      if (condidate) {

      }

   }

   async activate (activationLink) {
      const user = await UserModel.findOne({activationLink})
      if (!user) {
         throw
      }
      user.isActivated = true
      await user.save()
   }
}