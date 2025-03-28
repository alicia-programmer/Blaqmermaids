// Scroll to top button
let scroll_btn = document.getElementById('scroll_btn');

window.onscroll = function(){scrollFunction()}

function scrollFunction(){
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scroll_btn.style.display = "block";
    }
    else{
        scroll_btn.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Onclick mobile dropdown menu
function mobileFunction() {
  let mobile = document.getElementById('Dropdown_mobile');
  if (mobile.style.display === "block") {
    mobile.style.display = "none";
  }
  else{
    mobile.style.display = "block"
  }
  
}



// Javascript animtaion

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    // else{
    //   entry.target.classList.remove('show');
    // }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));





// Script for tab menu open on same page
function openCity(cityName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(cityName).style.display = "block";
  elmnt.style.backgroundColor = "#00bfff";

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// Image gallery
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// Second slider
var sliderMain = document.getElementById("row");
var item = sliderMain.getElementsByClassName("column");

function next(params) {
  sliderMain.append(item[0]);
}

function prev() {
  sliderMain.prepend(item[item.length - 1]);
}