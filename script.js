let menu = document.querySelector('#nav-toggle');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('show');
  navlist.classList.toggle('show');
};

window.onscroll = () => {
  menu.classList.remove('show');
  navlist.classList.remove('show');
};