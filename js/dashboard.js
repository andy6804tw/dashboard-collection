
const toggle=document.getElementById('toggle');
const dropdown = document.getElementById('dropdown');
const toggleButton = document.getElementById('toggleButton');
const toggleNavbar = document.getElementById('toggleNavbar');

document.body.addEventListener('click', function (evt) {
  if (toggle.getAttribute("expanded") == "false") {
    dropdown.classList.remove("show");
    toggle.setAttribute("expanded", "true");
  }
  
})

toggle.addEventListener('click', function (event) {
  if (toggle.getAttribute("expanded") == "true") {
    dropdown.classList.add("show");
    toggle.setAttribute("expanded", "false");
  } else {
    dropdown.classList.remove("show");
    toggle.setAttribute("expanded", "true");
  }
  event.stopPropagation();
})

toggleButton.addEventListener('click', function (event) {
  if (toggleButton.getAttribute("aria-expanded") == "true") {
    toggleNavbar.classList.add("show");
    toggleButton.setAttribute("aria-expanded", "false");
  } else {
    toggleNavbar.classList.remove("show");
    toggleButton.setAttribute("aria-expanded", "true");
  }
  event.stopPropagation();
})


