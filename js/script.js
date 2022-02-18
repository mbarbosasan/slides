import {SlideNav} from './slide.js';

const slide = new SlideNav('.slide', '.wrapper');
slide.init();
console.log(slide);
slide.addArrow('.prev', '.next')