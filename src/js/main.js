(function () {

  window.addEventListener('load', function () {
    $('.scrollspy').scrollSpy({ scrollOffset: 0 });

    mobileMenu();
  });

  function mobileMenu() {
    var btn = document.querySelector('.mobile-menu__btn');
    var cover = document.querySelector('.mobile-menu__cover');
    var aside = document.querySelector('.aside');
    var main = document.querySelector('.main');
    var body = document.body;

    btn.addEventListener('click', toggleMenu);
    cover.addEventListener('click', toggleMenu);

    function toggleMenu() {
      if (aside.style.transform === 'translateX(275px)') {
        aside.style.transform = '';
        main.style.transform = '';
        btn.style.transform = '';
        cover.style.display = '';
        body.style.overflow = '';
      } else {
        aside.style.transform = 'translateX(275px)';
        main.style.transform = 'translateX(275px)';
        btn.style.transform = 'translateX(275px)';
        cover.style.display = 'block';
        body.style.overflow = 'hidden';
      }
    }
  }

})();