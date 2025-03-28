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


// Gallery slideshow
let index = 1;
show(index);
function Next(a){
  show(index += a);
}
function Now(a){
  show(index = a);
}
function show(a){
  let slide = document.getElementsByClassName("mySlides");
  if(a > slide.length)
  {index = 1;}
  if (a < 1)
  {index = slide.length;}
  for(let b=0; b<slide.length; b++)
  {slide[b].style.display = "none";}
  slide[index - 1].style.display = "block";
}