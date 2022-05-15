export function buttonScroll(btn) {
  window.addEventListener('scroll', (e) => {
    let $nodoButton = document.querySelector(btn);
    let scrollEnd = 865;
    let scrollWindow = window.pageYOffset;

    if (scrollWindow > scrollEnd) {
      $nodoButton.classList.remove('hidden');
    } else {
      $nodoButton.classList.add('hidden');
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    }
  });
}
