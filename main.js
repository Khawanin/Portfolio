const mobileMenu = document.getElementById('mobile-menu');
const closeButton = document.getElementById('close-button');
const techList = document.getElementById('tech-list');
const modal = document.getElementById('popup-modal');
const openButton = document.querySelector('.bt');
const links = document.querySelectorAll('.mobile-menu li > a');
const modalCloseBtn = document.querySelector('span.close');
const buttons = document.querySelectorAll('button');
const modalTitle = document.querySelector('#modal-project-name');
const modalImage = document.querySelector('img.modal-image');
const projectButtons = [];

const projects = [{
  id: 'project-1',
  name: 'Tonic',
  featured_image: 'Images/project1.svg',
  technologies: ['HTML', 'CSS', 'javascript', 'Github', 'Ruby', 'Bootsrap'],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis.',
},
{
  id: 'project-2',
  name: 'Multi-Post Stories',
  featured_image: 'Images/project2.svg',
  technologies: ['HTML', 'CSS', 'javascript'],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis.',
},
{
  id: 'project-3',
  name: 'Facebook 360',
  featured_image: 'Images/project3.svg',
  technologies: [
    'HTML',
    'CSS',
    'javascript',
    'Github',
    'Ruby',
    'Bootsrap',
    'Node.js',
  ],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis.',
},
{
  id: 'project-4',
  name: 'Uber Navigation',
  featured_image: 'Images/project4.svg',
  technologies: ['HTML', 'CSS', 'javascript', 'Github', 'Bootsrap'],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis.',
},
];

buttons.forEach((button) => {
  const {
    id,
  } = button;
  const idName = id.split('-')[0]; // project-1
  if (idName === 'project') projectButtons.push(button);
});
const openModal = (id) => {
  modal.style.display = 'block';
  const project = projects.find((project) => project.id === id);
  modalTitle.textContent = project.name;
  modalImage.src = project.featured_image;
  let li = '';
  project.technologies.forEach((tech) => {
    li += `<li class="tags">${tech}</li>`;
  });
  techList.innerHTML = li;
};
projectButtons.forEach((button) => {
  const {
    id,
  } = button;
  button.addEventListener('click', () => openModal(id));
});

function openOverlay() {
  mobileMenu.style.display = 'block';
}

function closeOverlay() {
  mobileMenu.style.display = 'none';
}
openButton.addEventListener('click', openOverlay);
closeButton.addEventListener('click', closeOverlay);
links.forEach((node) => node.addEventListener('click', closeOverlay));
modalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// form validation
const contactForm = document.querySelector('.contact-form');
const emailInput = document.getElementById('email');
const errorMsg = contactForm.querySelector('.error');

const isValid = (email) => email.toLowerCase() === email;

emailInput.addEventListener('input', () => {
  if (isValid(emailInput.value)) {
    errorMsg.textContent = '';
    errorMsg.className = 'error';
  } else {
    errorMsg.textContent = 'Just lowecase letters are allowed in email';
    errorMsg.className = 'error active';
  }
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (isValid(emailInput.value)) {
    errorMsg.textContent = '';
    errorMsg.className = 'error';
    contactForm.submit();
  }
});
