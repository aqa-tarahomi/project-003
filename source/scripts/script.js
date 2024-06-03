const theme_icon = document.getElementById("theme-switch-icon")
const intro = document.getElementById("introduction-header")
function change() {
  if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
    document.documentElement.setAttribute('data-bs-theme', 'light')
    theme_icon.setAttribute("class", "bi bi-sun-fill")
  }

  else {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
    theme_icon.setAttribute("class", "bi bi-moon-stars-fill text-info")
  }
}

const pain = document.getElementById("pain");
function myFunction(x) {
  if (x.matches) {
    pain.setAttribute("class", "btn bi bi-person-fill")
    intro.classList.replace("display-1","display-2")
    pain.innerHTML = ""
  } else {
    pain.setAttribute("class", "btn me-5")
    pain.innerHTML = "Login"
  }
}

var x = window.matchMedia("(max-width: 768px)")

myFunction(x);

x.addEventListener("change", function () {
  myFunction(x);
});