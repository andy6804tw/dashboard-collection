
// Body listener menu close
document.body.addEventListener('click', function () {
    const sidebar = document.getElementById("sidebar");
    const layoutAdmin = document.getElementById("layout-admin");
    if (layoutAdmin.classList.contains("collapse-sidebar")) {
        layoutAdmin.classList.remove("collapse-sidebar");
        sidebar.classList.add("collapse-sidebar");
    }
});

// menu toggle listener
const sideToggle = document.getElementById("sideToggle");
sideToggle.addEventListener('click', function (event) {
    const sidebar = document.getElementById("sidebar");
    const layoutAdmin = document.getElementById("layout-admin");
    if (sidebar.classList.contains("collapse-sidebar")) {
        layoutAdmin.classList.add("collapse-sidebar");
        sidebar.classList.remove("collapse-sidebar");
    } else {
        layoutAdmin.classList.remove("collapse-sidebar");
        sidebar.classList.add("collapse-sidebar");
    }
    event.stopPropagation();
})


/** Nav profile toggle(right) */
var toggle = document.getElementById('toggle');
var dropdown = document.getElementById('dropdown');
var toggleNavbar = document.getElementById('toggleNavbar');
document.body.addEventListener('click', function (evt) {
    if (toggle.getAttribute("expanded") == "false") {
        dropdown.classList.remove("show");
        toggle.setAttribute("expanded", "true");
    }
});
toggle.addEventListener('click', function (event) {
    if (toggle.getAttribute("expanded") == "true") {
        dropdown.classList.add("show");
        toggle.setAttribute("expanded", "false");
    } else {
        dropdown.classList.remove("show");
        toggle.setAttribute("expanded", "true");
    }

    event.stopPropagation();
});

