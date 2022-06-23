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
    languages: ['html', 'css', 'javascript'],
    button: 'See Project',
  },

  {
    image: './images/Snapshoot2.png',
    title: 'Multi-post Stories',
    articles: ['FACEBOOK', 'Full stack dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
    button: 'See Project',
  },

  {
    image: './images/Snapshoot3.png',
    title: 'Facebook 360',
    articles: ['FACEBOOK', 'Full stack dev', '2015'],
    text: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    languages: ['html', 'css', 'javascript'],
    button: 'See Project',
  },

  {
    image: './images/Snapshoot4.png',
    title: 'Uber Navigation',
    articles: ['UBER', 'Lead Developer', '2018'],
    text: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    languages: ['html', 'css', 'javascript'],
    button: 'See Project',
  },
];

// create the project cards//

const sectionProjects = document.querySelector('.section-project');

const container = document.createElement('div');
container.classList.add('container-2');
sectionProjects.appendChild(container);

const imageHeader = document.createElement('h2');
imageHeader.classList.add('image-header');
container.appendChild(imageHeader);

const imgIntro = document.createElement('img');
imgIntro.classList.add('img');
imgIntro.src = projects[0].image;
imgIntro.alt = 'Snapshoot';
imageHeader.appendChild(imgIntro);

const column = document.createElement('div');
column.classList.add('col');
container.appendChild(column);

const titleHeader = document.createElement('div');
titleHeader.classList.add('title');
column.appendChild(titleHeader);

const title = document.createElement('h2');
title.textContent = 'Tonic';
titleHeader.appendChild(title);

const ulList = document.createElement('ul');
ulList.classList.add('list');
titleHeader.appendChild(ulList);

const listItem1 = document.createElement('li');
listItem1.classList.add('canopy');
listItem1.textContent = 'CANOPY';
ulList.appendChild(listItem1);

const listItem2 = document.createElement('li');
listItem2.classList.add('back-end');
listItem2.textContent = 'Back end dev';
ulList.appendChild(listItem2);

const listItem3 = document.createElement('li');
listItem3.classList.add('num');
listItem3.textContent = '2015';
ulList.appendChild(listItem3);

const text = document.createElement('div');
text.classList.add('text');
column.appendChild(text);

const pText = document.createElement('p');
pText.textContent = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
text.appendChild(pText);

const btProject = document.createElement('form');
btProject.classList.add('buttom');
column.appendChild(btProject);

const btHtml = document.createElement('button');
btHtml.type = 'button';
btHtml.classList.add('html');
btHtml.textContent = 'html';
btProject.appendChild(btHtml);

const btCss = document.createElement('button');
btCss.type = 'button';
btCss.classList.add('css');
btCss.textContent = 'css';
btProject.appendChild(btCss);

const btJs = document.createElement('button');
btJs.type = 'button';
btJs.classList.add('javaScript');
btJs.textContent = 'javascript';
btProject.appendChild(btJs);

const accessDiv = document.createElement('div');
column.appendChild(accessDiv);

const seeProject = document.createElement('input');
seeProject.type = 'button';
seeProject.name = 'boton1';
seeProject.value = 'See Project';
accessDiv.appendChild(seeProject);
