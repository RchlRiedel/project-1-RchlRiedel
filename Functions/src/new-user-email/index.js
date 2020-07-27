//common JS instead of import
let nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: process.env['EMAIL'],
    pass: process.env['PASSWORD']
  }
})

const messageTemplate = {
    from: process.env['EMAIL'],
    to: '',
    subject: 'Welcome to the Fellowship of the Ring',
    text: 'We look forward to traveling with you!'
}

/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.newUserEmail = (event, context) => {
    let newUser = JSON.parse(Buffer.from(event.data, 'base64').toString())
    messageTemplate.to = newUser.email //set where it's being sent
    //adding user info... probably will want to get rid of password lol
    messageTemplate.text = `We look forward to traveling with you!  
Member info:
username = ${newUser.username},
role = ${newUser.role},
password = ${newUser.password},
email = ${newUser.email},
firstName = ${newUser.firstName},
lastName = ${newUser.lastName},
image URL = ${newUser.image}` 
    transporter.sendMail(messageTemplate)
  };

   
