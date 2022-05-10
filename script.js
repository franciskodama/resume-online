const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
}); 

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
}); 

/**
* Fixed menu after scrolling
*/
scrollIntervalID = setInterval(stickIt, 100);

function stickIt() {
    var orgElementPos = $('#profile').offset();
    var orgElementTop = orgElementPos.top;

    if (($(window).scrollTop() >= (orgElementTop))) {
        $('.nav').addClass('fixed');
    } else {
        $('.nav').removeClass('fixed');
    }
}

/**
* Active smooth scrolling
*/
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
        event.preventDefault();
        var heightTarget = target.offset().top;

        $('html, body').animate({
            scrollTop: heightTarget
        }, 1000, function() {
            var $target = $(target);
            $target.focus();
            
            if ($target.is(":focus")) {
            return false;
            } else {
            /*$target.attr('tabindex','-1');*/
            $target.focus();
            };
        });
        }
    }
});

/**
 * Activate menu-item
 */
$('.nav-link').on('click', function(k, v){
    $('.nav-link').removeClass('current');
    $(this).addClass('current');
});





// // Reflect scrolling in navigation

// var navActive = function(section) {

//     var $el = jQuery('.navbar-nav');
//     $el.find('li').removeClass('active');
//     $el.each(function(){
//         jQuery(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
//     });

// };

// var navigationSection = function() {

//     var $section = jQuery('section[data-section]');
    
//     $section.waypoint(function(direction) {
//           if (direction === 'down') {
//             navActive(jQuery(this.element).data('section'));
//           }
//     }, {
//           offset: '150px'
//     });

//     $section.waypoint(function(direction) {
//           if (direction === 'up') {
//             navActive(jQuery(this.element).data('section'));
//           }
//     }, {
//           offset: function() { return -jQuery(this.element).height() - 155; }
//     });

// };

// jQuery(function(){
//     contentWayPoint();
//     navbarState();
//     if (jQuery('.probootstrap-gallery').length > 0) {
//         initPhotoSwipeFromDOM('.probootstrap-gallery');
//     }
//     galleryMasonry();
//     stellarInit();
//     dateTimePicker();
//     clickMenu();
//     navigationSection();
// });

// jQuery(window).load(function(){
//     owlCarousel();
//     flexSlider();
// });

// })();