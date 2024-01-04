window.onscroll = () =>{
    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }
}

// nav 
function openNav() {
    // Open the side panel
    var sidepanel = document.getElementById("mySidepanel");
    sidepanel.style.width = "280px";
    
    // Apply overlay to the body, but let the side panel stay on top
    sidepanel.style.boxShadow = "0 0 0 100vw rgba(0,0,0,0.7)";
    let a=document.querySelector('.sidenav');
    a.style.display="block";
  }
  
function CloseNav() {
    // Open the side panel
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.boxShadow="none";
    let a=document.querySelector('.sidenav');
    a.style.display="none";
  
  }

//   dropdown 
let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}



// image slider 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


var swiper = new Swiper(".slide-content", {
  slidesPerView: 5,
  spaceBetween: 10,
  centerSlide:'true',
  loop:'true',
  fade:'true',
 
  grabCursor:'true',
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
   navigation:{
      nextEl:".button-next",
      prevEl:".button-prev",
   },
 
  breakpoints:{
      0:{
          slidesPerView:2,
      },
      500:{
          slidesPerView:3,
      },
      700:{
          slidesPerView:4,
      },
      801:{
          slidesPerView:5,
      },
  },
});