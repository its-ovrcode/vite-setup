// Cards  ==  img
import card01 from '../assets/Course-card-01.svg';
import card02 from '../assets/Course-card-02.svg';
import card03 from '../assets/Course-card-03.svg';

// Profile Images  == profile
import ml from '../assets/01-ML.png';
import ds from '../assets/02-DS.png';
import ar from '../assets/03-AR.png';

const coursesInfo = [
  {
    course: '01',
    title: 'Machine Learning',
    details: `In this course, you will learn how to build machine learning models that can analyze and make predictions on large datasets. You will also learn how to use popular machine learning libraries like TensorFlow and PyTorch.`,
    profile: ml,
    img: card01,
    imgUrl: '../assets/Course-card-01.svg',
  },
  {
    course: '02',
    title: 'Data Science',
    details: `This course covers the basics of data analysis, including data sclence, visualization, and modeling. You will also learn how to use popular data analysis tools like Python and R.`,
    profile: ds,
    img: card02,
    imgUrl: '../assets/Course-card-02.svg',
  },
  {
    course: '03',
    title: 'AR courses',
    details: `teach how to develop interactive digital experiences by blending virtual and real-world elements. They cover AR technology basics, such as creating 3D models, tracking real-world objects, and designing user interfaces.`,
    profile: ar,
    img: card03,
    imgUrl: '../assets/Course-card-03.svg',
  },
];

export { coursesInfo };
