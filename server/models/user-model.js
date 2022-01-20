const {Schema, model} = require ('mongoose')

const UserSchema = new Schema ({
   login: {type: String, unique: true, required: true},
   password: {type: String, required: true},
   isActivated: {type: Boolean,  default: false},
   activationLink: {type: String},
   address: {type: String, required: true},
   gender: {type: String, required: true},
   contacts: [{type: Schema.Types.ObjectId, ref: 'Contact'}],
   notifications: [{type: Schema.Types.ObjectId, ref: 'Notification'}]
})

module.exports = model('User', UserSchema)