// header wrapper toggle==========
$('#headRightBtn').click(function () {
    $('#rightWrapper').addClass('right-wrapper-active');
    // $('#rightWrapper').
})
$('#right-cls-btn').click(function () {
    $('#rightWrapper').removeClass('right-wrapper-active');
})
$('#mainBtnNav').click(function () {
    $('#leftMainNav').addClass('man-left-active')
})
$('#leftNavClose').click(function () {
    $('#leftMainNav').removeClass('man-left-active')
})
// header wrapper toggle end here ===============

// after scroll fixed nav ===============
var navbar = document.getElementById("mainHeader");



window.onscroll = function () {
    $('#leftMainNav').removeClass('man-left-active')
    $('#rightWrapper').removeClass('right-wrapper-active');
    var scrollVal = window.scrollY;

    // console.log(scrollVal);
    if (scrollVal >= 450 && scrollVal < 800) {
        navbar.classList.add('nav-effect')
    } else if (scrollVal >= 800) {
        navbar.classList.remove('nav-effect')
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('nav-effect')
        navbar.classList.remove('fixed-nav')
    }
}




var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// typing effect -----------------------
var type = new TypeIt("#typing", {
    lifeLike: false,
    speed: 0,
    loop: true,
})

function typing_stuff(typing_string) {

    var typing_string_len = typing_string.length;
    for (var i = 0; i < typing_string_len; i++) {
        type.type(typing_string[i])
        type.pause(100)
    }
    type.pause(2000)
    for (var i = 0; i < typing_string_len; i++) {
        type.delete(1)
        type.pause(100)
    }
}

typing_stuff("a Aspiring Full Stack Web Developer ")
typing_stuff("a React Developer ")


type.go();


// behivor smooth =========================================
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'auto'
        });
      });
    });
  });
  

//   document.addEventListener('DOMContentLoaded', (event) => {
//     document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', function (e) {
//         e.preventDefault();
  
//         const targetElement = document.querySelector(this.getAttribute('href'));
//         const headerOffset = 80; // Adjust this value to match the height of your fixed header
//         const elementPosition = targetElement.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
//         window.scrollTo({
//           top: offsetPosition,
//           behavior: 'smooth'
//         });
//       });
//     });
//   });
  

