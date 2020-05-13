//window.onscroll = function() {
//  stickyNav();
//  menuChange();
//  logoChange();
//}
//
//// Get the navbar
//var navbar = document.getElementById("navbar");
//
//var menuIco = document.getElementById("menIco");
//
//var stLogo = document.getElementById("logoMain");
//
//var body = document.getElementById("mainBody");
//var bodyChange= body.offsetTop;
//
//// Get the offset position of the navbar
//var sticky = navbar.offsetTop;
//
//function stickyNav() {
//  if (window.pageYOffset >= sticky) {
//    navbar.classList.add("sticky");
//  } else {
//    navbar.classList.remove("sticky");
//    }
//  } 

//function menuChange(){
//  if (window.pageYOffset >= bodyChange && menuIco.classList.contains("lines")) {
//    menuIco.classList.replace("lines", "lines2");
//  } else if (window.pageYOffset < bodyChange && menuIco.classList.contains("lines2")) {
//    menuIco.classList.replace("lines2", "lines");
//  }
//  //changes the menu color
//}

//function logoChange(){
//  if (window.pageYOffset >= bodyChange && stLogo.classList.contains("iniLogo")) {
//    stLogo.classList.replace("iniLogo", "iniLogo2");
//  } else if (window.pageYOffset < bodyChange && stLogo.classList.contains("iniLogo2")) {
//    stLogo.classList.replace("iniLogo2", "iniLogo");
//  }
//  //changes the logo color
//}

function openSlideMenu(){
    document.getElementById('side-menu').style.width = '12rem';
    //Moves the Main element left when slide menu is opened
}

function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0px';
    //Moves the Main element right when slide menu is closed
}

document.body.addEventListener('click', closeSlideMenu, true); 