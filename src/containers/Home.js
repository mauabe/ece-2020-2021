import React from 'react';
import { Link, withRouter, BrowserRouter } from "react-router-dom";
import * as data from '../assets/data';
import {panels} from '../assets/data';

// import Carousel from './Carousel'
// import eceblue from '../assets/images/ECE_logo_blue.svg';
// import ecewhite from '../assets/images/ECE_logo_white.svg';


// function useTilt(active) {
//   const ref = React.useRef(null);

//   React.useEffect(() => {
//     if (!ref.current || !active) {
//       return;
//     }

//     const state = {
//       rect: undefined,
//       mouseX: undefined,
//       mouseY: undefined
//     };

//     let el = ref.current;

//     const handleMouseMove = (e) => {
//       if (!el) {
//         return;
//       }
//       if (!state.rect) {
//         state.rect = el.getBoundingClientRect();
//       }
//       state.mouseX = e.clientX;
//       state.mouseY = e.clientY;
//       const px = (state.mouseX - state.rect.left) / state.rect.width;
//       const py = (state.mouseY - state.rect.top) / state.rect.height;

//       el.style.setProperty("--px", px);
//       el.style.setProperty("--py", py);
//     };

//     el.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       el.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [active]);

//   return ref;
// }

// const initialState = {
//   slideIndex: 0
// };

// const slidesReducer = (state, event) => {
//   if (event.type === "NEXT") {
//     return {
//       ...state,
//       slideIndex: (state.slideIndex + 1) % data.slides.length
//     };
//   }
//   if (event.type === "PREV") {
//     return {
//       ...state,
//       slideIndex:
//         state.slideIndex === 0 ? data.slides.length - 1 : state.slideIndex - 1
//     };
//   }
// };


// function Slide({ slide, offset }) {
//   const active = offset === 0 ? true : null;
//   const ref = useTilt(active);

//   return (
//     <div
//       ref={ref}
//       className="slide"
//       data-active={active}
//       style={{
//         "--offset": offset,
//         "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
//       }}
//     >
//       <div
//         className="slideBackground"
//         // style={{
//         //   backgroundImage: `url('${slide.image}')`
//         // }}
//       />
//       <BrowserRouter basename="/2020-2021"/>
//       <Link to={`/news/${slide.link}`} >
//         <div
//           className="slideContent"
//           style={{
//             backgroundImage: `url('${slide.image}')`
//           }}
//         >
//           <div className="slideContentInner">
//             <h2 className="slideTitle">{slide.title}</h2>
//             <h3 className="slideSubtitle">{slide.subtitle}</h3>
//             <p className="slideDescription">{slide.description}</p>
//           </div>
//         </div>
//       </Link >
//     </div>
//   );
// }

const togglePanels = () => {
  const panels = document.querySelectorAll('.panel');

  function toggleOpen() {
    console.log('Hello, I\'ve been toggled!');
    this.classList.toggle('open');
  }

  function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }

  panels.forEach(panel => panel.addEventListener('click', toggleOpen))

  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))
};


function Home() {
  // const [state, dispatch] = React.useReducer(slidesReducer, initialState);
console.table(panels)
 togglePanels();

  return(
    <div>

  <div className="panels">
    <div className="panel panel1">
      <p>Professor Suhas </p>
      <p>Diggavi</p>
      <p><span>more -></span></p>
      <p>Received Amazon Research Award and Guggenheim Fellowship </p>
    </div>
    <div className="panel panel2">
      <p>Professor Achuta </p>
      <p>Kadambi</p>
      <p><span>more -></span></p>
      <p>Featured in Science Journal and Received NSF Career Award </p>
    </div>
    <div className="panel panel3">
      <p>Professor  Xiang Anthony </p>
      <p>Chen</p>
      <p><span>more -></span></p>
      <p>Received NSF Career and Young Investigator Awards</p>
    </div>
    <div className="panel panel4">
      <p>Professor Sam</p>
      <p> Emaminejad</p>
      <p><span>more -></span></p>
      <p>Research Featured on Cover of Lab on a Chip</p>
    </div>
    <div className="panel panel5">
      <p>Professor Kang</p>
      <p> Wang</p>
      <p><span>more -></span></p>
      <p>Received NSF Grant to Improve Quantum Computing Chips</p>
    </div>
    <div className="panel panel6">
      <p>Distinguished Professor Yahya</p>
      <p> Rahmat-Samii</p>
      <p><span>more -></span></p>
      <p>Released New Book and Co-authored Best Paper Award of AIAA </p>
    </div>
    <div className="panel panel7">
      <p>Alumni Adrian</p>
      <p> Tang</p>
      <p><span>more -></span></p>
      <p>Recognized as 2021 Outstanding Young Engineer by IEEE MTT-S</p>
    </div>
    <div className="panel panel8">
      <p>UCLA Alumna</p>
      <p> Alumni</p>
      <p><span>more -></span></p>
      <p> Inspiring Others through Work at NASA JPL</p>
    </div>
  </div>

</div>
  );
}


export default withRouter(Home);
