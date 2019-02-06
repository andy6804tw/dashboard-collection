
const toggle=document.getElementById('toggle');

document.body.addEventListener('click', function (evt) {
  if (toggle.getAttribute("expanded") == "false") {
    toggle.className = "dropdown";
    toggle.setAttribute("expanded", "true");
  }
  
})

toggle.addEventListener('click', function (event) {
  if (toggle.getAttribute("expanded") == "true") {
    toggle.className = "dropdown open";
    toggle.setAttribute("expanded", "false");
  } else {
    toggle.className = "dropdown";
    toggle.setAttribute("expanded", "true");
  }
  event.stopPropagation();
})

