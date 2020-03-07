$('.navigation__button').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('navigation__button--active');
  $('.menu').toggleClass('menu--active');
});