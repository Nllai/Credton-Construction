window.onscroll = function(ev) {
    if ((window.pageYOffset) > 0) {
      console.log('flag')
      if (!("scrolled" in document.getElementById("nav").classList)){
            document.getElementById("nav").classList.add("scrolled");
            document.getElementById("nav").classList.remove("not-scrolled");
            document.getElementById("logo").style.padding = "0 0 0 4vw";
            document.getElementById("logo").classList.add("scrolled-logo");
        }
    }
    else {
        document.getElementById("nav").classList.remove("scrolled");
        document.getElementById("nav").classList.add("not-scrolled");
        document.getElementById("logo").style.padding = "1vw 0 1vw 4vw";
        document.getElementById("logo").classList.remove("scrolled-logo");
    }
  };