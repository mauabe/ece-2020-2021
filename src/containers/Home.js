import React from 'react';
import { Link, withRouter, BrowserRouter } from "react-router-dom";
import * as data from '../assets/data';
import ReactHtmlParser from 'react-html-parser';

function usePanel(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }
    // console.log('React usePanel useEffect ref:', ref)

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };
    console.log('React useEffect state:', state)

    let el = ref.current;
    console.log('React useEffect el:', el)

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
  console.log('React useEffect return ref::', ref)

  return ref;
}

const initialState = {
  panelIndex: 0
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
  //receive a single object form data.panels

  return (
    <div
      className={`panel panel${panel.id}`}
      ref={ref}
      data-active={active}
      style={{
        backgroundImage: `url(${panel.image})`
      }}
    >
      <BrowserRouter basename="/2020-2021"/>
        <div className="panelContent">
          <div className="panelTextBox">
            <div className="panelTitle">{panel.title}</div>
            <div className="panelFirstName">{ReactHtmlParser(panel.firstname)}</div>
            <div className="panelName">{panel.name}</div>
          </div>
            <div className="panelText">{ReactHtmlParser(panel.text)}</div>
        </div>
          <Link to={`/news/${panel.link}`} >
            <div className="panelLinkButton">more > > > </div>
          </Link>
    </div>
  );
}



function Home() {
  const [state] = React.useReducer(panelReducer, initialState);
  // console.log('home state', state)

  return(
    <div className="content-area">
      <div className="panelsContainer">

          {data.panels.map((panel, i) => {
            let offset = data.panels.length + (state.panelIndex - i)+ 1;
            return (
                <Panel
                  panel={panel}
                  offset={offset}
                  key={i}
                />
            );
          })}
      </div>
    </div>
  );
}


export default withRouter(Home);
