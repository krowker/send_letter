const {Schema, model} = require('mongoose')

const ContactSchema = new Schema({
   addres: {type: String, required: true},
   user: {type: Schema.Types.ObjectId, ref: 'User'},
   confirmCode: {type: Number}
})

module.exports = model('Contact', ContactSchema)
