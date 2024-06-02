const theme_icon=document.getElementById("theme-switch-icon")
function change(){
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme' , 'light')
        theme_icon.setAttribute("class","fa-solid fa-sun")
    }

    else{
        document.documentElement.setAttribute('data-bs-theme' ,'dark')
        theme_icon.setAttribute("class","bi bi-moon-stars-fill text-info")
    }
}
const pain= document.getElementById("pain");
  function myFunction(x) {
    if (x.matches) {
            pain.setAttribute("class","btn fa-solid fa-user")
            pain.innerHTML=""
          } else {
              pain.setAttribute("class","btn me-5")
               pain.innerHTML="Login"
           }
  }
  
  var x = window.matchMedia("(max-width: 768px)")
  
  myFunction(x);
  
  x.addEventListener("load", function() {
    myFunction(x);
  });