const navSlide = () => {
  const burger = document.querySelector('.humberger-menu');
  const nav = document.querySelector('.primary-navigation');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
  document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
  }));
};
// single Project section modal

navSlide();
const modalBtn = document.querySelector('.project-button');

const modalBg = document.querySelector('.modal-section');
const modalClose = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
  modalBg.classList.add('modal-active');
});
modalClose.addEventListener('click', () => {
  modalBg.classList.remove('modal-active');
});

// Card modals

const popupBtn = document.querySelectorAll('.card-button');

const popupTitle = [];
document.querySelectorAll('div.flex-container > h4').forEach((item) => {
  popupTitle.push(item.textContent);
});

const popupTechno = ['HTML', 'Bootstrap', 'Ruby on Rails'];

const popupDescrip = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";

const popupLive = 'https://sediqullahbadakhsh.github.io/badakhsh-portfolio/';

const popupSource = 'https://github.com/sediqullahbadakhsh/badakhsh-portfolio';

const popupObj = {};
for (let i = 0; i < popupTitle.length; i += 1) {
  popupObj[`Project${i}`] = {};
  popupObj[`Project${i}`].title = popupTitle[i];
  popupObj[`Project${i}`].technologies = popupTechno;
  popupObj[`Project${i}`].description = popupDescrip;
  popupObj[`Project${i}`].liveLink = popupLive;
  popupObj[`Project${i}`].sourceLink = popupSource;
}

const popupSection = document.createElement('section');
popupSection.className = 'popup-section';
document.body.appendChild(popupSection);

const modal = document.createElement('div');
modal.className = 'modal';
popupSection.appendChild(modal);

const newCloseImg = document.createElement('img');
newCloseImg.className = 'new-close-img';
newCloseImg.src = 'image/x-icon.png';
newCloseImg.alt = 'Close icon';
modal.appendChild(newCloseImg);

const newTitle = document.createElement('h3');
newTitle.className = 'new-title';
modal.appendChild(newTitle);

const newTechno = document.createElement('div');
newTechno.classList.add('new-techno', 'tags');
modal.appendChild(newTechno);
for (let i = 0; i < popupTechno.length; i += 1) {
  const newTechnoItem = document.createElement('h6');
  newTechnoItem.textContent = popupObj.Project0.technologies[i];
  newTechno.appendChild(newTechnoItem);
}

const modalContainer = document.createElement('div');
modalContainer.className = 'sec-container';
modal.appendChild(modalContainer);

const newProjectImg = document.createElement('img');
newProjectImg.className = 'new-project-img';
newProjectImg.src = 'image/snapshot.jpg';
newProjectImg.alt = 'project image';
modalContainer.appendChild(newProjectImg);

const newDescription = document.createElement('p');
newDescription.className = 'new-description';
newDescription.textContent = popupObj.Project0.description;
modalContainer.appendChild(newDescription);

const newBtns = document.createElement('div');
newBtns.className = 'new-btns';
modalContainer.appendChild(newBtns);
const firstBtn = document.createElement('a');
firstBtn.href = popupObj.Project0.liveLink;
firstBtn.className = 'button';
firstBtn.textContent = 'See Live';
newBtns.appendChild(firstBtn);
const secondBtn = document.createElement('a');
secondBtn.href = popupObj.Project0.sourceLink;
secondBtn.className = 'button';
secondBtn.textContent = 'See Source';
newBtns.appendChild(secondBtn);

const openPopup = (item) => {
  popupSection.classList.toggle('popup');
  popupSection.classList.toggle('popup-section');

  for (let i = 0; i < popupTitle.length; i += 1) {
    if (item.target === popupBtn[i]) {
      newTitle.textContent = popupObj[`Project${i}`].title;
    }
  }
};

popupBtn.forEach((item) => {
  item.addEventListener('click', openPopup);
});

const closeBtn = document.querySelectorAll('.new-close-img');
closeBtn.forEach((item) => {
  item.addEventListener('click', openPopup);
});
