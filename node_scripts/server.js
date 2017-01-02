var express = require('express');
var nodemailer = require('nodemailer');
var app = express();


app.get('/send', function(request, response) {
   console.log("Get request received.");
   var mailOptions = {
      from: "from",
      to: "krisgoorhuis@gmail.com",
      subject: "Personal Website Message",
      name: request.query.name,
      email: request.query.email,
      text: "Message received from " + request.query.name 
         + " at " + request.query.email
         + "\n\n" + request.query.message, 

   }
   
   console.log("To address: " + mailOptions.to)
   var smtpTransport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
         user: "krisgnodemailer@gmail.com",
         pass: "kgnodemailer"
      }
   });

   smtpTransport.sendMail(mailOptions, function(error, info) {
      if (error) {
         console.log("Something went wrong with nodemailer: /n" + error);
         response.addHeader("Access-Control-Allow-Origin", "*");
         response.end("error");
      } else {
         console.log("Mail sending to successfully.");
         response.addHeader("Access-Control-Allow-Origin", "*");
         response.send("sent");
         response.end();
      }
   });
   
});

app.listen(3000, function() {
   console.log("Express started on port 3000");
});