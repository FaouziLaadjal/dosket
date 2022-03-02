let navBtn = document.getElementById("navbtn");
let navlinks = document.getElementById("navlinks");
function Hide() {
  navlinks.classList.toggle("show");
  changeUrl();
}
navBtn.onclick = Hide;
function outside() {
  navlinks.classList.add("show");
  navBtn.classList.remove("url");
}
for (var i = 0; i < 4; i++) {
  var x = document.querySelectorAll(".links")[i];
  x.addEventListener("click", outside);
}
document.onclick = function (e) {
  if (e.target.id !== "navbtn" && e.target.id !== "navlinks") {
    outside();
  }
};
function changeUrl() {
  navBtn.classList.toggle("url");
}
