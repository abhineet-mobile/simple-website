window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var nav = document.getElementsByClassName("btn")
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


function myNewFunction() {
  var icon = document.getElementById("menu-btn");
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    icon.innerHTML = "&#9776;";
  } else {
    x.style.cssText="display:block";
    x.style.height="100vh";
    icon.innerHTML = "&#10006;";
    
  }
}



var links = document.querySelectorAll("#myLinks a,.logo");
var icon = document.getElementById("menu-btn"); 
var x = document.getElementById("myLinks");

links.forEach(function(link) {
  link.addEventListener("click", function() {
    x.style.display = "none";
    icon.innerHTML = "&#9776;";
  });
});








