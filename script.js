const cursorUrls = [
    'cursors/figma.svg',
    'cursors/js.svg',
    'cursors/mongo.svg',
    'cursors/react.svg',
    'cursors/sql.svg',
    'cursors/tailwind.svg',
    'cursors/py.svg',

  ]

  function changeCursor () {
    const randomIndex = Math.floor(Math.random()*cursorUrls.length);
    const randomCursorUrl = cursorUrls[randomIndex];
    document.body.style.cursor = `url('${randomCursorUrl}'), auto`;

    setTimeout(changeCursor,5000);
  }
  
  changeCursor();
  
  
  document.addEventListener('DOMContentLoaded',function (){
  document.getElementById('li1').classList.add('icons-animation');
  document.getElementById('li2').classList.add('icons-animation');
  document.getElementById('li3').classList.add('icons-animation');
  document.getElementById('li4').classList.add('icons-animation');
  document.getElementById('li5').classList.add('icons-animation');
  document.getElementById('li6').classList.add('icons-animation');
});

document.addEventListener('DOMContentLoaded', function () {
  function lazyLoad(elementId, className) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        }
      });
    }, options);

    const element = document.getElementById(elementId);
    if (element) {
      observer.observe(element);
    }
  }

  lazyLoad('profile-pic', 'zoom');

  lazyLoad('clg-logo1', 'tilting');
  lazyLoad('clg-logo2', 'tilting');

  lazyLoad('star1', 'popup');
  lazyLoad('star2', 'popup');
  lazyLoad('star3', 'popup');
  lazyLoad('star4', 'popup');
  lazyLoad('star5', 'popup');
  lazyLoad('star6', 'popup');
  lazyLoad('project-1', 'projects-animation');
  lazyLoad('project-2', 'projects-animation');
  lazyLoad('project-3', 'projects-animation');
  lazyLoad('project-4', 'projects-animation');
  lazyLoad('project-5', 'projects-animation');
  lazyLoad('project-6', 'projects-animation');
  lazyLoad('clg-name1','text-ani');
  lazyLoad('clg-name2','text-ani');


});

function toggleMenu() {
  var navbarMenu = document.getElementById("navbarMenu");
  navbarMenu.style.display = navbarMenu.style.display === "flex" ? "none" : "flex";
}


// skills animation
const programmingElement = document.querySelector('.programming');
const fullStack = document.querySelector('.FS');
const UIUX = document.querySelector('.UI');
const openSource = document.querySelector('.opensource');

const LogoElement = document.getElementById('c');
const LogoElement1 = document.getElementById('c++');
const LogoElement2 = document.getElementById('js');
const LogoElement3 = document.getElementById('php');
const LogoElement4 = document.getElementById('html');
const LogoElement5 = document.getElementById('css');
const LogoElement6 = document.getElementById('node');
const LogoElement7 = document.getElementById('py');
const LogoElement8 = document.getElementById('wordp');
const LogoElement9 = document.getElementById('figma');
const LogoElement10 = document.getElementById('mongo');
const LogoElement11= document.getElementById('bs');
const LogoElement12= document.getElementById('git');
const LogoElement13= document.getElementById('github');
const LogoElement14= document.getElementById('react');
const LogoElement15= document.getElementById('mysql');


// programming skill animation

programmingElement.addEventListener('mouseover', () => {
  LogoElement.classList.add('bounce-animation');
  LogoElement1.classList.add('bounce-animation');
  LogoElement2.classList.add('bounce-animation');
  LogoElement3.classList.add('bounce-animation');
});

programmingElement.addEventListener('mouseout', () => {
  LogoElement.classList.remove('bounce-animation');
  LogoElement1.classList.remove('bounce-animation');
  LogoElement2.classList.remove('bounce-animation');
  LogoElement3.classList.remove('bounce-animation');
});

// fullStack skill animation

fullStack.addEventListener('mouseover', () => {
  LogoElement2.classList.add('bounce-animation');
  LogoElement3.classList.add('bounce-animation');
  LogoElement4.classList.add('bounce-animation');
  LogoElement5.classList.add('bounce-animation');
  LogoElement6.classList.add('bounce-animation');
  LogoElement7.classList.add('bounce-animation');
  LogoElement10.classList.add('bounce-animation');
  LogoElement11.classList.add('bounce-animation');
  LogoElement14.classList.add('bounce-animation');
  LogoElement15.classList.add('bounce-animation');
});

fullStack.addEventListener('mouseout', () => {
  LogoElement2.classList.remove('bounce-animation');
  LogoElement3.classList.remove('bounce-animation');
  LogoElement4.classList.remove('bounce-animation');
  LogoElement5.classList.remove('bounce-animation');
  LogoElement6.classList.remove('bounce-animation');
  LogoElement7.classList.remove('bounce-animation');
  LogoElement10.classList.remove('bounce-animation');
  LogoElement11.classList.remove('bounce-animation');
  LogoElement14.classList.remove('bounce-animation');
  LogoElement15.classList.remove('bounce-animation');
});

// UI/UX skill animation

UIUX.addEventListener('mouseover', () => {
  LogoElement8.classList.add('bounce-animation');
  LogoElement9.classList.add('bounce-animation');
});

UIUX.addEventListener('mouseout', () => {
  LogoElement8.classList.remove('bounce-animation');
  LogoElement9.classList.remove('bounce-animation');
});

// opensource skill animation

openSource.addEventListener('mouseover',() => {
  LogoElement12.classList.add('bounce-animation');
  LogoElement13.classList.add('bounce-animation');
});

openSource.addEventListener('mouseout',() => {
  LogoElement12.classList.remove('bounce-animation');
  LogoElement13.classList.remove('bounce-animation');
});