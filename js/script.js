window.onload = function () { 
  moveBackground();
 }
  
  
  function moveBackground(){
    let pos = 0;
    let bg = document.getElementById("water");
    setInterval( function(){
      pos += 100;
      bg.style.backgroundPositionX = pos + "px";
    },0);
  }
  

var boat = document.querySelector("#boat");
 setTimeout(function() {
    boat.style.transform = "translateX(1550px)";
  }, 20);
  


  var lotus1 = document.querySelector("#lotus1");
  setTimeout(function() {
    lotus1.style.transform = "translateX(-1500px)";
  }, 20);

  var lotus2 = document.querySelector("#lotus2");
  setTimeout(function() {
    lotus2.style.transform = "translateX(-1200px)";
  }, 20);

  var lily1 = document.querySelector("#lily1");
  setTimeout(function() {
    lily1.style.transform = "translateX(-1500px)";
  }, 20);

  var lily2 = document.querySelector("#lily2");
  setTimeout(function() {
    lily2.style.transform = "translateX(-1500px)";
  }, 20);