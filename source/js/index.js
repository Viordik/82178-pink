const pageHeader = document.querySelector('.page-header');
const mainNav = pageHeader.querySelector('.main-nav');
const mainNavToggle = mainNav.querySelector('.main-nav__toggle');
const siteList = mainNav.querySelector('.site-list');

mainNavToggle.addEventListener('click', function () {
  mainNavToggle.classList.toggle('main-nav__toggle--active');
  siteList.classList.toggle('site-list--active');
  pageHeader.classList.toggle('page-header--active');
});
