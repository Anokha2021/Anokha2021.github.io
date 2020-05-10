
function sticky() {
  var nav = document.getElementById("top");
  var fix = nav.offsetTop;
  if (window.pageYOffset>fix) {
    document.getElementById("nav").style.display = "block";
    document.getElementById("img").style.display = "block";
    document.getElementById("lo").style.display = "block";
  } else {
    document.getElementById("nav").style.display = "none";
    document.getElementById("img").style.display = "none";
    document.getElementById("lo").style.display = "none";
  }
}

 