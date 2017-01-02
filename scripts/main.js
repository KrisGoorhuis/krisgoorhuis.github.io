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
         alert("Get request sent!");
         if (data == "sent") {
            
            $("#sendMail").html("Submit");
            $("#submitMail").css("width", "80px");
            alert("'sent' was returned!");
         };
      });
   }; // local host send address: http://localhost:3000/send
     

   
   prepareHamburger();
   
   $("#submitMail").on("click", sendMailToKris);
   
});
