const bntMobile = document.getElementById('btn-mobile')
const navTab = document.querySelectorAll('nav li')

function toggleMenu(event){
  if(event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

}




bntMobile.addEventListener('click', toggleMenu)
bntMobile.addEventListener('touchstart', toggleMenu)


