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

module.exports = model('Address', AddressSchema)