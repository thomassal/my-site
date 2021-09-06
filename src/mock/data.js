import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Thomas\'s personal website', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Thomas Saltos',
  subtitle: 'I\'m Software Engineer',
  cta: 'More about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I\'m an experienced software engineer who constantly seeks out innovative solutions \ ' +
  'to everyday problems. Currently, I serve as software engineer for Synelixis Solutions. While working there, I obtained my MSc degree from Athens University of Economics and Business at the field of Data Science and Machine Learning.',
  paragraphTwo: 'Before my current position, I worked as Intern at Citrix Systems. I have also completed my (5-year) studies at the University of Patras in the Computer Engineering & Informatics department.',
  paragraphThree: ' ',
  resume: './pdf/ThSaltosCV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'apachesparklogo.jpg',
    title: 'Thesis Project',
    info: 'Sentiment analysis in Twitter data with Apache Spark (Spark-streaming, spark-sql, GraphX).',
    info2: 'I trained a Naive Bayes classifier in order to detect the sentiment of incoming tweets.',
    url: '',
    repo: 'https://github.com/thomassal/Twitter-Sentiment-Analysis', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'network.jpg',
    title: 'Citation Prediction',
    info: 'Given a citation network of papers, I developed a citation link prediction model using various features such as bert embedding and variation GAE. Finally, the Logistic regression classifier was used for the final prediction.',
    info2: 'This project was part of my master program for the course of Data Science challenge.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Abnormality detection in bone X-Rays',
    info: 'Given a study (3-6 x-rays) I developed a deep learning model (Python, Tensorflow) that classify the study as normal or subnormal.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Do you have any question?',
  btn: '',
  email: 'thomasal14@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/tom_saltos',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/thomas-saltos',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/thomassal/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
