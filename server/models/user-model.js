const {Schema, model} = require ('mongoose')

const UserSchema = new Schema ({
   email: {type: String, unique: true, required: true},
   password: {type: String, required: true},
   isActivated: {type: Boolean,  default: false},
   activationLink: {type: String},
   address: {type: String},
   gender: {type: String},
   contacts: [{type: Schema.Types.ObjectId, ref: 'Contact'}],
   notifications: [{type: Schema.Types.ObjectId, ref: 'Notification'}]
})

module.exports = model('User', UserSchema)