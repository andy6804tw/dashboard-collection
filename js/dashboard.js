
const toggle=document.getElementById('toggle');
const dropdown = document.getElementById('dropdown');

document.body.addEventListener('click', function (evt) {
  if (toggle.getAttribute("expanded") == "false") {
    toggle.classList.remove("show");
    dropdown.classList.remove("show");
    toggle.setAttribute("expanded", "true");
  }
  
})

toggle.addEventListener('click', function (event) {
  if (toggle.getAttribute("expanded") == "true") {
    toggle.classList.add("show");
    dropdown.classList.add("show");
    toggle.setAttribute("expanded", "false");
  } else {
    toggle.classList.remove("show");
    dropdown.classList.remove("show");
    toggle.setAttribute("expanded", "true");
  }
  event.stopPropagation();
})

