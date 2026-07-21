document.documentElement.classList.add('is-loading');

document.addEventListener('DOMContentLoaded', () => {
  const loader = document.createElement('div');
  loader.className = 'loader';
  loader.setAttribute('role', 'status');
  loader.setAttribute('aria-label', 'Загрузка страницы');
  loader.innerHTML = '<img src="images/logo.jpg" alt="Логотип">';
  document.body.prepend(loader);

  window.addEventListener('load', () => {
    loader.classList.add('loader--hidden');
    document.documentElement.classList.remove('is-loading');
    window.setTimeout(() => loader.remove(), 350);
  }, { once: true });
});
