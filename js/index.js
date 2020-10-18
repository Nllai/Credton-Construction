window.onscroll = function(ev) {
    if ((window.pageYOffset) > 0) {
      console.log('flag')
      if (!("scrolled" in document.getElementById("nav").classList)){
            document.getElementById("nav").classList.add("scrolled");
            document.getElementById("nav").style.height = "10vh";
            document.getElementById("logo").style.padding = "0 0 0 4vw";
        }
    }
    else {
        document.getElementById("nav").classList.remove("scrolled");
        document.getElementById("nav").classList.add("not-scrolled");
        document.getElementById("nav").style.height = "20vh";
        document.getElementById("logo").style.padding = "1vw 0 1vw 4vw";
    }
  };