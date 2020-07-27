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
    subject: 'Your accout has been updated',
    text: 'We noticed you updated your account.'
}

/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.updatedUserEmail = (event, context) => {
    let updatedUser = JSON.parse(Buffer.from(event.data, 'base64').toString())
    messageTemplate.to = updatedUser.email //set where it's being sent
    //adding user info... probably will want to get rid of password lol
    messageTemplate.text = `We noticed you updated your account. Make sure this was you and not a prank.
Here are the updated fields:
    username = ${updatedUser.username},
    role = ${updatedUser.role},
    password = ${updatedUser.password},
    email = ${updatedUser.email},
    firstName = ${updatedUser.firstName},
    lastName = ${updatedUser.lastName},
    image URL = ${updatedUser.image}` 
    transporter.sendMail(messageTemplate)
  };

   
