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

const sectionProjects = document.querySelector('.section-project');

// create mobile popup window//

const popContainer = document.createElement('div');
popContainer.classList.add('pop-window');
sectionProjects.appendChild(popContainer);

// Title and closing cross //
const headerPop = document.createElement('div');
headerPop.classList.add('pop-header');
popContainer.appendChild(headerPop);

const popTitle = document.createElement('h2');
popTitle.classList.add('pop-title');
popTitle.textContent = 'Tonic';
headerPop.appendChild(popTitle);

const closePop = document.createElement('button');
closePop.classList.add('close-cross');
closePop.innerHTML = '<i class="fa-solid fa-xmark"></i>';
headerPop.appendChild(closePop);

// Tags: client, role, year
const popList = document.createElement('ul');
popList.classList.add('list');
popContainer.appendChild(popList);

const elemt1 = document.createElement('li');
elemt1.classList.add('canopy');
elemt1.textContent = 'CANOPY';
popList.appendChild(elemt1);

const elemt2 = document.createElement('li');
elemt2.classList.add('back-end');
elemt2.textContent = 'Back End Dev';
popList.appendChild(elemt2);

const elemt3 = document.createElement('li');
elemt3.classList.add('num');
elemt3.textContent = '2015';
popList.appendChild(elemt3);

// Project image //
const imgPop = document.createElement('img');
imgPop.classList.add('img-pop');
imgPop.src = './images/Snapshoot.png';
imgPop.alt = 'Snaoshoot';
popContainer.appendChild(imgPop);

// Media query container//

const mediaQuery = document.createElement('div');
mediaQuery.classList.add('query-container');
popContainer.appendChild(mediaQuery);

// Project descripcion //
const textPop = document.createElement('div');
textPop.classList.add('information');
mediaQuery.appendChild(textPop);

const pPop = document.createElement('p');
pPop.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
textPop.appendChild(pPop);

// media query sub-container //
const subContainer = document.createElement('div');
subContainer.classList.add('sub-container');
mediaQuery.appendChild(subContainer);

// Languages cards //
const formPop = document.createElement('form');
formPop.classList.add('buttom-pop');
subContainer.appendChild(formPop);

const buttonPop = document.createElement('button');
buttonPop.classList.add('html');
buttonPop.type = 'button';
buttonPop.textContent = 'html';
formPop.appendChild(buttonPop);

const buttonPop2 = document.createElement('button');
buttonPop2.classList.add('css');
buttonPop2.type = 'button';
buttonPop2.textContent = 'css';
formPop.appendChild(buttonPop2);

const buttonPop3 = document.createElement('button');
buttonPop3.classList.add('javaScript');
buttonPop3.type = 'button';
buttonPop3.textContent = 'javaScript';
formPop.appendChild(buttonPop3);

// Link buttons //
const divButton = document.createElement('div');
divButton.classList.add('popbutton');
subContainer.appendChild(divButton);

const liveButton = document.createElement('button');
liveButton.classList.add('live');
liveButton.type = 'button';
liveButton.innerHTML = 'See live <i class="fa-solid fa-arrow-up-right-from-square"></i>';
divButton.appendChild(liveButton);

const liveButton2 = document.createElement('button');
liveButton2.classList.add('live');
liveButton2.type = 'button';
liveButton2.innerHTML = 'See Source <i class="fa-brands fa-github"></i>';
divButton.appendChild(liveButton2);

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

for (let i = 0; i < projects.length; i += 1) {
  const container = document.createElement('div');
  container.classList.add('container-2');
  sectionProjects.appendChild(container);

  const imageHeader = document.createElement('h2');
  imageHeader.classList.add('image-header');
  container.appendChild(imageHeader);

  const imgIntro = document.createElement('img');
  imgIntro.classList.add('img');
  imgIntro.src = projects[i].image;
  imgIntro.alt = 'Snapshoot';
  imageHeader.appendChild(imgIntro);

  const column = document.createElement('div');
  column.classList.add('col');
  container.appendChild(column);

  const titleHeader = document.createElement('div');
  titleHeader.classList.add('title');
  column.appendChild(titleHeader);

  const title = document.createElement('h2');
  title.textContent = projects[i].title;
  titleHeader.appendChild(title);

  const ulList = document.createElement('ul');
  ulList.classList.add('list');
  titleHeader.appendChild(ulList);

  const listItem1 = document.createElement('li');
  listItem1.classList.add('canopy');
  listItem1.textContent = projects[i].articles['0'];
  ulList.appendChild(listItem1);

  const listItem2 = document.createElement('li');
  listItem2.classList.add('back-end');
  listItem2.textContent = projects[i].articles['1'];
  ulList.appendChild(listItem2);

  const listItem3 = document.createElement('li');
  listItem3.classList.add('num');
  listItem3.textContent = projects[i].articles['2'];
  ulList.appendChild(listItem3);

  const text = document.createElement('div');
  text.classList.add('text');
  column.appendChild(text);

  const pText = document.createElement('p');
  pText.textContent = projects[i].text;
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

  seeProject.addEventListener('click', () => {
    popContainer.classList.add('active');
  });
};

// create events //

closePop.addEventListener('click', () => {
  popContainer.classList.remove('active');
});
