(function () {
  'use strict';

  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hero = document.querySelector('.hero-visual');

  if (hero && !reducedMotion) {
    hero.addEventListener('pointermove', function (event) {
      var rect = hero.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width - 0.5;
      var y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.style.transform = 'perspective(900px) rotateX(' + (-y * 2.2) + 'deg) rotateY(' + (x * 3.2) + 'deg) translateZ(0)';
    });

    hero.addEventListener('pointerleave', function () {
      hero.style.transform = '';
    });
  }

  document.querySelectorAll('.project-card').forEach(function (card) {
    card.addEventListener('pointermove', function (event) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((event.clientX - rect.left) / rect.width * 100) + '%');
      card.style.setProperty('--my', ((event.clientY - rect.top) / rect.height * 100) + '%');
    });
  });
})();
