// // Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });

export function setNavOpacity(id){
    const navbar = document.getElementById('navbar');
    const navHeight = navbar.offsetHeight;
    const tittle = document.getElementById(id).offsetHeight;

    window.addEventListener('scroll', function(){
        const bg1 = "#585d65ac"
        const bg2 = "#585d65"

        if(Math.ceil(tittle) <= Math.ceil(this.window.scrollY + navHeight) && (bg1 == navbar.style.backgroundColor || navbar.style.backgroundColor == 0)){
            navbar.style.backgroundColor = bg2
        }
        else if (Math.ceil(tittle) > Math.ceil(this.window.scrollY + navHeight) && bg2 == navbar.style.backgroundColor) {
            navbar.style.backgroundColor = bg1
        }
    })
}

var a = document.querySelectorAll(".nav-link");
var drop = document.getElementById("navbarNavAltMarkup");
a.forEach((e)=>{
    e.addEventListener("click",()=>{
        var delayInMilliseconds = 500; //1 second

        setTimeout(function() {
         //your code to be executed after 1 second
            drop.classList.remove("show");
        }, delayInMilliseconds);
    });
})



// 1. tangkap element dengan class menu
const menu = document.querySelectorAll(".nav-link");
var data = 0;
menu.forEach((e,i)=>{
    e.addEventListener('click',()=>{
        data = i;
        
        for(a = 0 ; a < menu.length ; a++){
            if(data == a){
                menu[a].classList.add('active')
            }else{
                menu[a].classList.remove('active')
            }
        }

    })
})

var isMobile = window.matchMedia && window.matchMedia('(max-device-width: 960px)').matches || screen.width <= 960;
if (isMobile == false) {
    $('.arrow').on('click', function(e){
        var href = $(this).attr('name');
        var elementHref = $(href);
        if (href == 'about') {
            $('.kanan').animate({
                scrollTop: 497
            },800,'swing');
        }
    })
    $('.nav-logo').on('click', function(e){
        var href = $(this).attr('name');
        var elementHref = $(href);
        if (href == 'home') {
            $('.kanan').animate({
                scrollTop: 0
            },800,'swing');
        }
    })

// $('.nav-link').on('click', function(e){
//     var href = $(this).attr('name');
//     var elementHref = $(href);


//         if (href == 'home') {
//             $('.kanan').animate({
//                 scrollTop: 0
//             },800,'swing');
//         }
//         if (href == 'about') {
//             $('.kanan').animate({
//                 scrollTop: 477
//             },800,'swing');
//         }
//         if (href == 'educate') {
//             $('.kanan').animate({
//                 scrollTop: 900
//             },800,'swing');
//         }
//         if (href == 'code') {
//             $('.kanan').animate({
//                 scrollTop: 1550
//             },800,'swing');
//         }
//         if (href == 'porto') {
//             $('.kanan').animate({
//                 scrollTop: 2401
//             },800,'swing');
//         }
//         if (href == 'contact') {
//             $('.kanan').animate({
//                 scrollTop: 2984
//             }, 800,'swing');
//         }

        
//         e.preventDefault
//     })
}

