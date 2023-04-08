// Nav -
import Nav from './Nav';
import Hero from './Hero';
import Courses from './Courses';
import Learn from './Learn';
import Learniverse from './Learniverse';
import Testimonials from './Testimonials';
import Footer from './Footer';

// Hero
import arrow from '../assets/bent-arrow.svg';
import upArrow from '../assets/Up-arrow.png';
import Play from '../utils/Play';
import stairs from '../assets/stairs.svg';
import robot from '../assets/robot.png';
import man from '../assets/Man.png';
import woman from '../assets/Woman.png';
import swirl from '../assets/swirl.svg';
import heroCard from '../assets/Hero-card.svg';
import mask from '../assets/mask.png';
import sphere from '../assets/sphere.png';

// Courses
import { coursesInfo } from '../utils/data';
import stars from '../assets/stars.png';

// Creative Experts
import card from '../assets/creative-card.svg';
import contentCenter from '../assets/creative-content.png';
import creativeGlobe from '../assets/globe.svg';
import mobile from '../assets/mobile-ui.svg';
import star from '../assets/star.svg';
import community from '../assets/community.svg';
import stats from '../assets/stats.svg';

// Learniverse {}
// TODO : ICONS
import personalization from '../assets/personalization.svg';
import progressTracking from '../assets/progress-tracking.svg';
import interactiveContent from '../assets/interactive-content.svg';
import realTime from '../assets/real-time.svg';
import collaboration from '../assets/collaboration.svg';
import analytics from '../assets/analytics.svg';

const navItems = [
  {
    name: 'Courses',
    id: 'courses',
  },
  {
    name: 'Why Us',
    id: 'why-us',
  },
  {
    name: 'Testimonial',
    id: 'testimonial',
  },
];

const content = [
  {
    title: 'Personalization',
    description: `offers personalized learning experiences based on the student's abilities and interests can help students learn at their own pace and level.`,
    icons: personalization,
    unique: false,
  },
  {
    title: 'Real time Tracking',
    description: `Real-time feedback from teachers and peers can help students understand their mistakes and learn from them.`,
    icons: realTime,
    unique: true,
  },
  {
    title: 'Progress Tracking',
    description: `This platform that allows students to track their progress and see their strengths and weaknesses can help them identify areas where they need to improve and focus their efforts.`,
    icons: progressTracking,
    unique: true,
  },
  {
    title: 'Collaboration Tools',
    description: `Collaboration tools such as discussion forums, group projects, and live chat features can help students work together and learn from each other.`,
    icons: collaboration,
    unique: false,
  },
  {
    title: 'Interactive Content',
    description: `Interactive content such as videos, quizzes, simulations, and games can make learning more engaging and enjoyable for students.`,
    icons: interactiveContent,
    unique: false,
  },
  {
    title: 'Analytics',
    description: `Analytics tools that provide insights into student behavior and performance can help teachers make data-driven decisions and improve their teaching methods.`,
    icons: analytics,
    unique: true,
  },
];

// About
import barcode from '../assets/about/barcode.png';
import downarrow from '../assets/about/down-arrow.png';
import resize from '../assets/about/resize.png';
import strips from '../assets/about/strips-horizantal.png';

// Testiomonials
// #F7B84B, #BB67E8 , #EB5757 ,
const testimonialLeft = [
  {
    name: 'John Doe',
    designation: 'CEO, ABC Company',
    description: `I never thought I could learn so much in such a short amount of time.`,
    rotate: '12deg',
    bgColor: '#F7B84B',
  },
  {
    name: 'John Doe',
    designation: 'CEO, ABC Company',
    description: `learniverse is amazing!`,
    rotate: '-12deg',
    bgColor: '#BB67E8',
  },
  {
    name: 'John Doe',
    designation: 'CEO, ABC Company',
    description: `I love the way the courses are presented.`,
    rotate: '12deg',
    bgColor: '#EB5757',
  },
];

// #E8A5FF, #7DA0FA,##67E8BA
const testimonialRight = [
  {
    name: 'John Doe',
    designation: 'CEO, ABC Company',
    description: `Learniverse helped me to achieve my goals and take my career to the next level. I highly recommend it.`,
    rotate: '-12deg',
    bgColor: '#E8A5FF',
  },
  {
    name: 'John Doe',
    designation: 'CEO, ABC Company',
    description: `The material is easy to understand and the instructors are knowledgeable and engaging.`,
    rotate: '12deg',
    bgColor: '#7DA0FA',
  },
  {
    name: 'John Doe',
    designation: 'CEO, ABC Company',
    description: `I have learned so much and I am grateful for the opportunity to grow and develop my skills.`,
    rotate: '-12deg',
    bgColor: '#67E8BA',
  },
];

// ! Exports

export {
  // Courses
  Nav,
  Hero,
  Courses,
  Learn,
  Learniverse,
  Testimonials,
  Footer,
  //Others
  arrow,
  upArrow,
  Play,
  stairs,
  robot,
  man,
  woman,
  swirl,
  heroCard,
  mask,
  stars,
  coursesInfo,
  sphere,

  // Cretive experts
  card,
  contentCenter,
  creativeGlobe,
  mobile,
  star,
  community,
  stats,

  // Learniverse
  content,

  // About
  barcode,
  downarrow,
  resize,
  strips,

  // Testimonials
  testimonialLeft,
  testimonialRight,

  // NAVMenu Data
  navItems,
};
