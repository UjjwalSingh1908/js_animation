  function moveBackground(){
    let pos = 0;
    let bg = document.getElementById("water");
    let fxnId = setInterval(bgmove, 1);
    function  bgmove(){
      pos += (100);
      bg.style.backgroundPositionX = pos + "px";
    }
  }
  

var boat = document.querySelector("#boat");
  setTimeout(function() {
    boat.style.transform = "translateX(1550px)";
  }, 200);

  var lotus1 = document.querySelector("#lotus1");
  setTimeout(function() {
    lotus1.style.transform = "translateX(-1500px)";
  }, 200);

  var lotus2 = document.querySelector("#lotus2");
  setTimeout(function() {
    lotus2.style.transform = "translateX(-1200px)";
  }, 200);

  var lily1 = document.querySelector("#lily1");
  setTimeout(function() {
    lily1.style.transform = "translateX(-1500px)";
  }, 200);

  var lily21 = document.querySelector("#lily2");
  setTimeout(function() {
    lily2.style.transform = "translateX(-1500px)";
  }, 200);