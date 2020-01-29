window.onscroll = function() {
    stickyNav();
   // darkNav();
  }
  // Get the navbar
  var navbar = document.getElementById("navbar");
  
  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  var logos = navbar.offsetTop > 500;
  
  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  } 

  function logoChange() {
    if (window.pageYOffset >= logos) {
      navbar.classList.remove("logo1").add("logo2");
    } else {
      navbar.classList.remove("logo2").add("logo1");
    }
  }
    
  function openSlideMenu(){
      document.getElementById('side-menu').style.width = '25em';
      //Moves the Main element left when slide menu is opened
  }
  
  function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0px';
      //Moves the Main element right when slide menu is closed
  }

  document.body.addEventListener('click', closeSlideMenu, true); 
