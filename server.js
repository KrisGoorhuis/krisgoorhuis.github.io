var path = require('path');
var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));



app.listen(process.env.PORT || 3000, function() {
   console.log("Express started on port 3000");
});

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

//app.get('/', function(request, response) {
    //console.log("Request for index received");
    //response.render('pages/index.html', {title: 'home'})
//});

app.get('/'), function(request, response) {
   
}