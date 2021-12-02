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

   async login (email, pass) {
      const user = await UserModel.findOne({email})
      if (!user) {
         throw ApiError.BadRequest (`There is no user with email ${email}`)
      }
      const isPassEquals = await bcrypt.compare(pass, user.password)
      if (!isPassEquals){
         throw ApiError.BadRequest('Wrong password')
      }
      const userDto = new UserDto(user)
      const tokens = tokenService.generateTokens({...userDto})
      await tokenService.saveToken(userDto.id, tokens.refreshToken)

      return {...tokens, user: userDto}
   }

   async logout(refreshToken) {
      const token = await tokenService.removeToken(refreshToken)
      return token
   }

   async refresh(refreshToken) {
      if (!refreshToken) {
         throw ApiError.UnautharizedError()
      }
      const userData = tokenService.validateRefreshToken(refreshToken)
      const tokenFromDb = tokenService.findToken(refreshToken)
      if (!tokenFromDb || !userData) {
         throw ApiError.UnautharizedError()
      }
      const user = await UserModel.findById(user.id)
      const userDto = new UserDto(user)
      const tokens = tokenService.generateTokens({...userDto})
      await tokenService.saveToken(userDto.id, tokens.refreshToken)

      return {...tokens, user: userDto}
   }
}