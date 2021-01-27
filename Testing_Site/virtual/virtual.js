function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

var elems = document.getElementsByClassName('confirmation');
var confirmIt = function (e) {
    if (!confirm('Form is ONLY for current Computer Science and Cybersecurity Students at Felician University. Do you wish to continue?')) e.preventDefault();
};
for (var i = 0, l = elems.length; i < l; i++) {
    elems[i].addEventListener('click', confirmIt, false);
}
