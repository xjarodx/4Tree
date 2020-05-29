window.onscroll = function() {
  stickyNav();
  menuChange();
  logoChange();
  navChange();
  // primeTester();
}

// Get the navbar
var navbar = document.getElementById("navbar");

var menuIco = document.getElementById("menIco");

var initMenu = document.getElementById("primeMenu");

// var menTest = document.getElementById("primeTest");

var stLogo = document.getElementById("logoMain");

var body = document.getElementById("main-container");
var bodyChange= body.offsetTop - 10;

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    }
  } 

function menuChange(){
  if (window.pageYOffset >= bodyChange && initMenu.classList.contains("MainNav")) {
    initMenu.classList.replace("MainNav", "MainNav2");
  } else if (window.pageYOffset < bodyChange && initMenu.classList.contains("MainNav2")) {
    initMenu.classList.replace("MainNav2", "MainNav");
  }
  //changes the menu color
}

function navChange(){
  if (window.pageYOffset >= bodyChange && menuIco.classList.contains("lines")) {
    menuIco.classList.replace("lines", "lines2");
  } else if (window.pageYOffset < bodyChange && menuIco.classList.contains("lines2")) {
    menuIco.classList.replace("lines2", "lines");
  }
  //changes the menu color
}

// function primeTester(){
//   if (window.pageYOffset >= bodyChange) {
//     document.getElementById('primeTest').style.color = '#262626';
//   } else if (window.pageYOffset < bodyChange) {
//     document.getElementById('primeTest').style.color = '#fffff0';
//   }
//   //changes the menu color
// }

function logoChange(){
  if (window.pageYOffset >= bodyChange && stLogo.classList.contains("iniLogo")) {
    stLogo.classList.replace("iniLogo", "iniLogo2");
  } else if (window.pageYOffset < bodyChange && stLogo.classList.contains("iniLogo2")) {
    stLogo.classList.replace("iniLogo2", "iniLogo");
  }
  //changes the logo color
}

function openSlideMenu(){
  if (screen.width > 375){
    document.getElementById('side-menu').style.width = '15rem';
  } else if (screen.width <= 375){
    document.getElementById('side-menu').style.width = '55%';
  }
    //Moves the Main element left when slide menu is opened
}

function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0px';
    //Moves the Main element right when slide menu is closed
}

document.body.addEventListener('click', closeSlideMenu, true); 