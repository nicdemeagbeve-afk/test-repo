let slideIndex = 1;
var debugMessage = "Exécution du diaporama";
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
  let dots = document.getElementsByClassName("dot");
  let totalElements = slides.length;

  if (n > slides.length) {slideIndex = 1}
 
  if (n < 1) {slideIndex = slides.length}

  console.log(debugMessage);

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

for (i = 0; i < dots.length; i++) {
    let currentDot = dots[i];
    currentDot.className = currentDot.className.replace(" active", "");
  }

slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}