var nodemailer = require('nodemailer');

function nodemailerSend(request) {
   
   

   var mailOptions = {
      from: request.query.from,// the address the user provided
      to: "krisgoorhuis@gmail.com",
      subject: request.query.subject, // the subject the user provided
      text: request.query.text, // the body the user provided

   }

   var smtpTransport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
         user: "krisgnodemailer@gmail.com",
         pass: "kgnodemailer"
      }
   });

   smtpTransport.sendMail(mailOptions, function(error, response) {
      if (error) {
         console.log("Something went wrong with nodemailer: /n" + error);
      } else {
         console.log("Mail sending successfully.");
      }

   });
}

module.exports = {
   nodemailerSend: nodemailerSend
}

