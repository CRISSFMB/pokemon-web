export const languages = (click, classMatch) => {
  document.addEventListener(click, (e) => {
    if (e.target.matches(classMatch)) {
      const language = e.target.parentElement.dataset.languages;
      changeLanguage(language);
    }
  });
};

export const changeLanguage = async (language) => {
  try {
    const textsToChange = document.querySelectorAll('[data-section]');
    const response = await fetch(`../languages/${language}.json`);

    if (response.ok) {
      const data = await response.json();
      textsToChange.forEach((el) => {
        const section = el.dataset.section;
        const value = el.dataset.value;

        el.innerHTML = data[section][value];
      });
    }
  } catch (error) {
    console.log(error);
  }
};
