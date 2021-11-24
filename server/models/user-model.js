const {Schema, model} = require ('mongoose')

const UserSchema = new Schema ({
   emai: {type: String, unique: true, required: true},
   password: {type: String, required: true},
   isActivated: {type: Boolean,  required: false},
   activationLink: {type: String},
   adress: {type: String, required: true},
   gender: {type: String, required: true}
})

module.exports = model('User', UserSchema)