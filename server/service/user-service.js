const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const UserDto = require ('../dto/user-dto')
const tokenService = require ('./token-service')
const mailService = require ('./mail-service')
const ApiError = require('../exceptions/api-error')

class UserService {
   async registration (email, password, data) {
      const condidate =  await UserModel.findOne({email})
      if (condidate) {
         throw ApiError.BadRequest(`${email} already exist`)
      }
      const hashPassword = await bcrypt.hash(password, 3)
      const activationLink = uuid.v4()

      const user = await UserModel.create({email, password: hashPassword, activationLink})
      //await mailService.sendActivationmail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

      const userDto = new UserDto(user) //id, email, isActivated
      const tokens = tokenService.generateTokens({...userDto})
      await tokenService.saveToken(userDto.id, tokens.refreshToken)

      return {...tokens, user: userDto}
   }

   async activate (activationLink) {
      // const user = await UserModel.findOne({activationLink})
      // if (!user) {
      //    throw ApiError.BadRequest('Invalid activation link')
      // }
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
      const user = await UserModel.findById(userData.id)
      const userDto = new UserDto(user)
      const tokens = tokenService.generateTokens({...userDto})
      await tokenService.saveToken(userDto.id, tokens.refreshToken)

      return {...tokens, user: userDto}
   }

   async getContact() {
      const user = await UserModel.find()
      return user
   }
}

module.exports = new UserService()