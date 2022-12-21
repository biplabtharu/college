var menuBtn = document.getElementById("nav-btn");
var bar = document.getElementById("bar");
var xmark = document.getElementById("xmark");
var navLists = document.getElementById("navLists");

bar.onclick = function () {
  navLists.style.right = "0";
  bar.style.display = "none";
  xmark.style.right = "2%";
};

xmark.onclick = function () {
  navLists.style.right = "-100%";
  xmark.style.right = "-100%";
  bar.style.display = "block";
};
