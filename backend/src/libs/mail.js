const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  port: 587,
  service: 'gmail',
  requireTLS: true,
  auth: {
    user: 'leobab96@gmail.com',
    pass: 'Jlgc@a500'
  },
  tls: {
    rejectUnauthorized: false
  }
});

module.exports = transporter;