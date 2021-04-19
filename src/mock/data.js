import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.canva.com/design/DAEWx4815Yw/dBFyBQLCf9QtKQmfHGhErg/edit?category=tACZCki4tbY#', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Screenshot_1_Kanji.jpeg',
    title: 'Kanjikan',
    info: 'A single page application to learn the Japanese ideograms(kanji) including a knowledge test as well as various external resources getting the information through APIs.',
    info2: 'Technologies: React, Express, Mongo DB, Mongoose, CSS',
    url: 'https://kanjikan.herokuapp.com',
    repo: 'https://github.com/Sotid/Kanjikan-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Cook_Screenshot_1.png',
    title: 'Cook-eat',
    info: 'A web application that works as customizable cook pad and allows search and filtering of recipes by ingredients',
    info2: 'Technologies: Express, Mongo DB, Mongoose, Handlebars, CSS, Javascript',
    url: 'https://cook-ite.herokuapp.com/',
    repo: 'https://github.com/Sotid/Cook-eat', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Screenshot_1_Mr.png',
    title: 'Mr. Miyagi´s dream',
    info: 'A 90`s aesthetic video game with a win/loose logic.',
    info2: 'Technologies: Javascript, HTML, Canvas, CSS',
    url: 'https://sotid.github.io/Mr_Miyagi-s_dream/',
    repo: 'https://github.com/Sotid/Mr_Miyagi-s_dream', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Screenshot_2_Sticky.png',
    title: 'Sticky',
    info: 'A sticky notes app',
    info2: 'Technologies: Express, Mongo DB, Mongoose, React Hooks, Material-UI',
    url: 'https://sticky-n.herokuapp.com/',
    repo: 'https://github.com/Sotid/Sticky_client', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'soti.dialeti@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sotiria-dialeti/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Sotid',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
