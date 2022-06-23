const hamburger = document.querySelector('.menu');
const navMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const cross = document.querySelector('.close');

cross.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

const closeMenu = document.querySelector('.navClose');

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

// create an array //

const projects = [
  {
    image: './images/Snapshoot.png',
    title: 'tonic',
    articles: ['CANOPY', 'Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html' ,'css' ,'javascript'],
    button: 'See Project', 
  },

  {
    image: './images/Snapshoot2.png',
    title: 'Multi-post Stories',
    articles: ['FACEBOOK', 'Full stack dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html' ,'css' ,'javascript'],
    button: 'See Project', 
  },

  {
    image: './images/Snapshoot3.png',
    title: 'Facebook 360',
    articles: ['FACEBOOK', 'Full stack dev', '2015'],
    text: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    languages: ['html' ,'css' ,'javascript'],
    button: 'See Project', 
  },

  {
    image: './images/Snapshoot4.png',
    title: 'Uber Navigation',
    articles: ['UBER', 'Lead Developer', '2018'],
    text: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    languages: ['html' ,'css' ,'javascript'],
    button: 'See Project', 
  },
];


