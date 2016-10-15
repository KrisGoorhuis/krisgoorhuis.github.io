document.addEventListener("DOMContentLoaded", function() {
   
   
   
   
  
   
   function testFunction() {
      console.log("test success");
   }
   
      
   function checkWindowWidth() {
      var windowWidth = (Math.max(document.documentElement.clientWidth));
      if (windowWidth < 1000) {
         document.getElementsByClassName("projectTile").style.width = "50%";
         console.log("success");
      }
   }
   
    window.onresize=testFunction() {
       console.log("this");
    };

});
   

