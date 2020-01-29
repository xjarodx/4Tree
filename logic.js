window.onscroll = function() {
    stickyNav();
   // darkNav();
  }
  // Get the navbar
  var navbar = document.getElementById("navbar");
  
  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;
  
  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  } 
    
  function openSlideMenu(){
      document.getElementById('side-menu').style.width = '25em';
      //document.getElementById('main').style.marginLeft = '250px'; //Moves the Main element right when slide menu is opened
  }
  
  function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0px';
      //document.getElementById('main').style.marginLeft = '0px'; //Moves the Main element left when slide menu is closed
  }