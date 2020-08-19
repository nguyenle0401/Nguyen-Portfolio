import React from "react";
import { Transition } from "react-spring/renderprops";
import { useTrail, animated } from "react-spring";
import "./style.css";

const fast = { tension: 1200, friction: 40};
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const Home = () => {
  const [trail, set] = useTrail(3, () => ({
    xy: [300, 300],
    config: (i) => (i === 0 ? fast : slow),
  }));
  const items = [
    { key: 1, text: "H" },
    { key: 2, text: "i" },
    { key: 3, text: "\xa0" },
    { key: 4, text: "c" },
    { key: 5, text: "a" },
    { key: 6, text: "l" },
    { key: 7, text: "l" },
    { key: 8, text: "\xa0 " },
    { key: 9, text: "m" },
    { key: 10, text: "e" },
    { key: 11, text: "\xa0" },
    { key: 12, text: "N" },
    { key: 13, text: "g" },
    { key: 14, text: "u" },
    { key: 15, text: "y" },
    { key: 16, text: "e" },
    { key: 17, text: "n" },
    { key: 18, text: "\xa0" },
    { key: 19, text: "L" },
    { key: 20, text: "e" },
  ];

  return (
    <div>
      <div className ="index">
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="30"
            />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
            />
          </filter>
        </svg>
        <div
          className="hooks-main"
          onMouseMove={(e) => set({ xy: [e.clientX, e.clientY] })}
        >
          {trail.map((props, index) => (
            <animated.div
              key={index}
              style={{ transform: props.xy.interpolate(trans) }}
            />
          ))}
        </div>
      </div>
      <section className="my-name size-caro">
        <Transition
          config={{ tension: 10, friction: 2, precision: 0.1 }}
          items={items}
          unique={true}
          reset={true}
          keys={(item) => item.key}
          from={{ transform: "translate3d(0,-80px,0)" }}
          enter={{ transform: "translate3d(0,0px,0)" }}
          leave={{ transform: "translate3d(0,-80px,0)" }}
          trail={100}
        >
          {(item) => (props) => <div style={props}>{item.text}</div>}
        </Transition>
        <div></div>
      </section>
      
    </div>
  );
};

export default Home;
