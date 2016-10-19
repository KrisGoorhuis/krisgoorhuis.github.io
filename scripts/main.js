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
   
   
   prepareHamburger();
   
});
   

