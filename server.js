var path = require('path');
var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
app.set('views', __dirname + '/app/views');
app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, function() { // Process.env.PORT is provided by Heroku (my host), I think. If it's not available (eg, testing locally) it'll default to 3000.
   console.log("Express started on port 3000");
});

app.get('/', function(request, response) {
   response.sendfile(path.resolve(__dirname, 'public/index.html'));
});

app.get('/send', function(request, response) { // If a get request is sent to the base URL/send (which our contact button does), do this.
   console.log("Get request received.");
   var mailOptions = {
      from: "from",
      to: "krisgoorhuis@gmail.com",
      subject: "Personal Website Message",
      name: request.query.name,
      email: request.query.email,
      text: "Message received from " + request.query.name 
         + " via " + request.query.email
         + "\n\n" + request.query.message, 
   }
   
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
         console.log("Mail sending successfully.");
         //response.addHeader("Access-Control-Allow-Origin", "*");
         response.send("sent");
         response.end();
      }
   });
   
});