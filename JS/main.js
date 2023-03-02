setTimeout(function() {
    var preloader = document.getElementById("preloader");
    var mainContent = document.getElementById("main-content");
    
    preloader.style.opacity = 0;
    setTimeout(function() {
      preloader.style.display = "none";
      mainContent.style.display = "block";
    }, 500);
  }, 1500);
