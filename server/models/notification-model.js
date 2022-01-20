const {Schema, model} = require('mongoose')

const NotificationSchema = new Schema({
   body: {type: String, required: true},
   date: {type: Date, required: true}
})

module.exports = model('Notification', NotificationSchema)