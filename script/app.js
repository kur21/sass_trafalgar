$('.review-list').slick({
   dots: true,
   infinite: false,
   speed: 800,
   slidesToShow: 1,
   slidesToScroll: 1,
   fade: true,
   prevArrow:`<button type='button' class='slick-prev slick-arrow'><i class="fal fa-long-arrow-left"></i></button>`,
   nextArrow:`<button type='button' class='slick-next slick-arrow'><i class="fal fa-long-arrow-right"></i></button>`,
   responsive: [
      {
         breakpoint: 480,
         settings: {
            arrows: false,
            fade: false,
            infinite: true,
         }
      }
   ]
});

window.addEventListener('load', function() {
   const menu = document.querySelector('.menu')
   const menuItems = document.querySelectorAll('.menu-item')
   const menuBg = document.querySelector('.menu-bg')
   const menuToggle = document.querySelector('.menu-toggle')
   menuToggle.onclick = function() {
      menuToggle.classList.toggle('is-active')
      if (menuToggle.className.includes('is-active')) {
         menuBg.classList.add('is-active')
         menu.classList.add('is-active')
         menuItems.forEach(function(item) {
            item.classList.add('is-active')
         })
      } else {
         menuBg.classList.remove('is-active')
         menu.classList.remove('is-active')
         menuItems.forEach(function(item) {
            item.classList.remove('is-active')
         })
      }
   }
})
