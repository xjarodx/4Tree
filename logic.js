window.onscroll = function() {
    stickyNav();
    logoChange();
  }

  // Get the navbar
  var navbar = document.getElementById("navbar");

  var menuIco = document.getElementById("menIco");
  
  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;
 
  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
      }
    } 

  function logoChange(){  
    if (window.pageYOffset >= 300 && menuIco.classList.contains("lines")) {
      menuIco.classList.replace("lines", "lines2");
    } else if (window.pageYOffset <= 300 && menuIco.classList.contains("lines2")) {
      menuIco.classList.replace("lines2", "lines");
    }
  }
    
  function openSlideMenu(){
      document.getElementById('side-menu').style.width = '15%';
      //Moves the Main element left when slide menu is opened
  }
  
  function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0px';
      //Moves the Main element right when slide menu is closed
  }

  document.body.addEventListener('click', closeSlideMenu, true); 

