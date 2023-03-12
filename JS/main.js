setTimeout(function() {
    var preloader = document.getElementById("preloader");
    var mainContent = document.getElementById("main-content");
    
    preloader.style.opacity = 0;
    setTimeout(function() {
      preloader.style.display = "none";
      mainContent.style.display = "block";
    }, 500);
  }, 3000);

window.onload = function () {
    window.addEventListener('scroll', function (e) {
      if (window.pageYOffset > 100) {
        document.querySelector("header").classList.add('is-scrolling');
      } else {
        document.querySelector("header").classList.remove('is-scrolling');
      }
    });
  
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
  
    menu_btn.addEventListener('click', function () {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
    });
}
