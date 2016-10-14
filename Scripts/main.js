document.addEventListener("DOMContentLoaded", function() {
   
   
   
   
   window.onresize= checkWindowWidth;
   
   
      
   function checkWindowWidth() {
      var windowWidth = (Math.max(document.documentElement.clientWidth));
      if (windowWidth < 1000) {
         document.getElementsByClassName("projectTile").style.width = "50%";
         
      }
   }
   
   

});
   

