export const sliderfn = () => {
  const slider = null || document.querySelector('#slider');
  if (!slider) {
    return;
  }
  let section = null || document.querySelectorAll('.slider__section');
  let lastSection = null || section[section.length - 1];
  slider.insertAdjacentElement('afterbegin', lastSection);

  document.addEventListener('click', (e) => {
    if (e.target.matches('#btn--right')) {
      slider.style.marginLeft = '-200%'; // move the image from -100% default to -200%
      slider.style.transition = 'all 1s'; // 5 seconds transition
      let sectionFirst = document.querySelectorAll('.slider__section')[0]; // select the section to move
      setTimeout(() => {
        slider.style.transition = 'none'; // remove transition
        slider.insertAdjacentElement('beforeend', sectionFirst); // insert the section that we were going to move
        slider.style.marginLeft = '-100%'; // and focus the slider
      }, 1000);
    }

    if (e.target.matches('#btn--left')) {
      let section = document.querySelectorAll('.slider__section');
      let lastSection = section[section.length - 1];
      slider.style.marginLeft = '0';
      slider.style.transition = 'all 1s';
      setTimeout(() => {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', lastSection);
        slider.style.marginLeft = '-100%';
      }, 1000);
    }
  });
};
