function toggleContent() {
    var element = document.getElementById("content");
    element.classList.toggle("active");
}

function toggleContent2() {
    var element = document.getElementById("content2");
    element.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const carousel = document.querySelector('.carousel');
  
    let position = 0;
  
    nextButton.addEventListener('click', function() {
      position -= 100;
      if (position <= -carousel.scrollWidth + carousel.clientWidth) {
        position = 0;
      }
      carousel.style.transform = `translateX(${position}px)`;
    });
  
    prevButton.addEventListener('click', function() {
      position += 100;
      if (position > 0) {
        position = -carousel.scrollWidth + carousel.clientWidth;
      }
      carousel.style.transform = `translateX(${position}px)`;
    });
  });
  
  
  