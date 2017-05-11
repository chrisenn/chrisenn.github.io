    var slideIndex = 1;
    showSlides(slideIndex);

function myFunction(x) {
    x.classList.toggle("change");
}

function show(id) {
    var e = document.getElementById(id);
	
	if (e.style.display == 'block')
    {
        e.style.display = 'none';
    }
    else
    {
        e.style.display = 'block';
    }
}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }


    function showSlides(n) 
    {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");

      if (n > slides.length) 
        {
          slideIndex = 1
        } 
      
      if (n < 1) 
        {
          slideIndex = slides.length
        }
      
      for (i = 0; i < slides.length; i++) 
      {
          slides[i].style.display = "none"; 
      }

      for (i = 0; i < dots.length; i++) 
      {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      
      slides[slideIndex-1].style.display = "block"; 
      dots[slideIndex-1].className += " active";
    }
