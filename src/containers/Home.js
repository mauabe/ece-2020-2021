import React from 'react';
import { Link, withRouter, BrowserRouter } from "react-router-dom";
import * as data from '../assets/data';
// import {panels} from '../assets/data';

// import Carousel from './Carousel'
// import eceblue from '../assets/images/ECE_logo_blue.svg';
// import ecewhite from '../assets/images/ECE_logo_white.svg';


function usePanel(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  panelIndex: 1
};

const panelReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      panelIndex: (state.panelIndex + 1) % data.panels.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      panelIndex:
        state.panelIndex === 0 ? data.panels.length - 1 : state.panelIndex - 1
    };
  }
};


function Panel({ panel, offset }) {
  const active = offset === 0 ? true : null;
  const ref = usePanel(active);

  return (
    <div
      ref={ref}
      className="panel"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="panelBackground"
        // style={{
        //   backgroundImage: `url('${slide.image}')`
        // }}
      />
      <BrowserRouter basename="/2020-2021"/>
      <Link to={`/news/${panel.link}`} >
        <div
          className="panelContent"
          style={{
            backgroundImage: `url('${panel.image}')`
          }}
        >
          <div className="panelContentInner">
            <h2 className="panelTitle">{panel.title}</h2>
            <h3 className="panelName">{panel.name}</h3>
            <p className="panelText">{panel.text}</p>
          </div>
        </div>
      </Link >
    </div>
  );
}

// const togglePanels = () => {
//   const panels = document.querySelectorAll('.panel');

//   function toggleOpen() {
//     console.log('Hello, I\'ve been toggled!');
//     this.classList.toggle('open');
//   }

//   function toggleActive(e) {
//     console.log(e.propertyName);
//     if (e.propertyName.includes('flex')) {
//       this.classList.toggle('open-active');
//     }
//   }

//   panels.forEach(panel => panel.addEventListener('click', toggleOpen))

//   panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))
// };


function Home() {
  const [state, dispatch] = React.useReducer(panelReducer, initialState);
  console.table(data.panels)


  return(
    <div className="panelsContainer">
      {/* <Panel
        panel={panel}
        offset={offset}
        key={i}
      /> */}

      <button onClick={() => dispatch({ type: "PREV" })}>‹‹</button>

      {[...data.panels].map((panel, i) => {
        let offset = data.panels.length + (state.panelIndex - i)+ 1;
        return (
            <Panel
              panel={panel}
              offset={offset}
              key={i}
            />
        );
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>››</button>
    </div>
  );
}


export default withRouter(Home);
