import React from 'react';
import { Link, withRouter, BrowserRouter } from "react-router-dom";
import * as data from '../assets/data';

function usePanel(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }
    console.log('React usePanel useEffect ref:', ref)

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
  console.log('React useEffect return ref::', ref)
  console.log('React useEffect return ref::', ref)
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
      className="panel"
      ref={ref}
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <BrowserRouter basename="/2020-2021"/>
        <div className="panelContent">
          <div
            className={`panelBackground panel${panel.id}`}
            style={{
              backgroundImage: `url(${panel.image})`
            }}
          >
          <p className="panelTitle">{panel.title}</p>
          <p className="panelName">{panel.name}</p>
          <p className="panelText">{panel.text}</p>
          <Link to={`/news/${panel.link}`} > more
            <div className="panelLinkBbutton">
              <span className="panel-link-elipsis">
                <span>.</span><span>.</span><span>.</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}



function Home() {
  const [state, dispatch] = React.useReducer(panelReducer, initialState);
  console.table(data.panels)
  console.log('home state', state)

  return(
    <div className="content-area">
      <div className="panelsContainer">
        {console.log('home content-area panelsContainer data.panels:', data.panels)}
        {console.log('home content-area panelsContainer state.panelIndex:', state)}

          {data.panels.map((panel, i) => {
            let offset = data.panels.length + (state.panelIndex - i)+ 1;
            {console.log('home inside map panel i:', panel)}
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
