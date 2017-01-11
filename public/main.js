window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
       // alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("jQuery didn't load. :(");
    }
};

document.addEventListener("DOMContentLoaded", function () {
   var mailSent = false;
   
   'use strict';
   function prepareHamburger() {
      var menuOpen = false;
   
      function toggleHamburgerNavList() {
         function activateHamburger() {
            document.getElementById("hamburgerNav").style.width = "100%";
            document.getElementById("hamburgerButton").classList.add("activeHamburger");
         }
         function deactivateHamburger() {
            document.getElementById("hamburgerNav").style.width = "0%";
            document.getElementById("hamburgerButton").classList.remove("activeHamburger");
         }
         
         if (menuOpen !== true) {
            menuOpen = true;
            activateHamburger();
            return;
         }
         if (menuOpen !== false) {
            menuOpen = false;
            deactivateHamburger();
            return;
         }
      }
      
      function addHamburgerListeners() {
         document.getElementById("hamburgerButtonWrapper").addEventListener("click", function () {
            toggleHamburgerNavList();
         });
         
      }
      
      addHamburgerListeners();
   }
   
  
   
   
   function sendMailToKris() {
      var name = $("#contactName").val();
      var email =$("#contactEmail").val();
      var message = $("#contactComments").val();
      $("#submitMail").css("width", "120px");
      $("#submitMail").html("Sending...");
      $.get("/send", {name: name, email:email, message:message}, function(data) {
         console.log("Get request sent!");
         if (data == "sent") { // We get this back in the response from server.js.
            mailSent = true;
            $("#submitMail").html("Sent!");
            $("#submitMail").css("width", "80px");
            console.log("'sent' was returned!");
         };
      });
   };
     
   function validateContactFields() {
      var emailIsSendable = true;
      if ($("#contactName").val() === "") {
         $("#contactName").css("background-color", "rgba(95, 65, 65, 1)");
         emailIsSendable = false;
      } else {
         $("#contactName").css("background-color", "rgba(85, 85, 85, 1");
      }    
      
      if ($("#contactEmail").val() === "") {
         $("#contactEmail").css("background-color", "rgba(95, 65, 65, 1)");
         emailIsSendable = false;
      } else {
         $("#contactEmail").css("background-color", "rgba(85, 85, 85, 1");
      }   
      
      if ($("#contactComments").val() === "") {
         $("#contactComments").css("background-color", "rgba(95, 65, 65, 1)");
         emailIsSendable = false;
      } else {
         $("#contactComments").css("background-color", "rgba(85, 85, 85, 1");
      }
      
      return emailIsSendable;
   };


   
   $(".contactField").on("click", function() {
      if (mailSent === true) {
         $("#submitMail").html("Submit");
      }
   });
    
   $("#submitMail").on("click", function() {
      var emailIsSendable = validateContactFields();
      if (emailIsSendable === true && $("#submitMail").html() === "Submit") {
         sendMailToKris();
      }
      
   });
   
   prepareHamburger();
   
});
