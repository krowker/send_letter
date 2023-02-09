const {Schema, model} = require ('mongoose')

const AddressSchema = new Schema ({
   name: {type: String, required: true},
   surname: {type: String, required: true},
   fathersName: {type: String},
   country: {type: String, required: true},
   city: {type: String, required: true},
   zipCode: {type: String},
   streetAndBuilding: {type: String, required: true},
   apartment: {type: String},
   remark: {type: String},
})

const UserSchema = new Schema ({
   email: {type: String, unique: true, required: true},
   password: {type: String, required: true},
   isActivated: {type: Boolean,  default: false},
   activationLink: {type: String},
   address: AddressSchema,
   gender: {type: String},
   contacts: [{type: Schema.Types.ObjectId, ref: 'Contact'}],
   notifications: [{type: Schema.Types.ObjectId, ref: 'Notification'}]
})

module.exports = model('User', UserSchema)