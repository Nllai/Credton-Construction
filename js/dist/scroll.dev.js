"use strict";

var currentSection = "pg-1";
console.log(currentSection);
var nextSibling = document.getElementById(currentSection).nextElementSibling;
console.log(nextSibling);
var loading = false; // Add 20 items.

var nextItem = 1;

var loadMore = function loadMore() {
  nextSibling.classList.add("active");
  currentSection = nextSibling.id;
  if (nextSibling.tagName == 'DIV') nextSibling = document.getElementById(currentSection).nextElementSibling;
  removeSpinner();
  loading = false;
};

window.onscroll = function (ev) {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - document.querySelector('#footer').offsetHeight && loading == false && currentSection != "pg-3") {
    console.log('flag');
    showSpinner();
    loading = true;
    setTimeout(function () {
      loadMore();
    }, 800);
  }

  if (window.pageYOffset > 0) {
    console.log('flag');

    if (!("scrolled" in document.getElementById("nav").classList)) {
      document.getElementById("nav").classList.add("scrolled");
      document.getElementById("nav").style.height = "10vh";
      document.getElementById("logo").style.padding = "0 0 0 4vw";
    }
  } else {
    document.getElementById("nav").classList.remove("scrolled");
    document.getElementById("nav").classList.add("not-scrolled");
    document.getElementById("nav").style.height = "20vh";
    document.getElementById("logo").style.padding = "1vw 0 1vw 4vw";
  }
};

showSpinner = function showSpinner() {
  document.getElementById("spinner").classList.remove("inactive");
  document.getElementById("spinner").classList.add("active");
};

removeSpinner = function removeSpinner() {
  document.getElementById("spinner").classList.remove("active");
  document.getElementById("spinner").classList.add("inactive");
};