import React from "react";
import { useSpring, animated } from "react-spring";
import "./style.css";
import { Row, Carousel } from "react-bootstrap";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Portfolios = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <div id="portfolios" className="position-port">
      <h1 style={{ fontSize: "32px" }}>Portfolio</h1>
      <Row className="port-style">
        <Carousel className="carousel-all position-Item">
          <Carousel.Item className="position-Item">
            <animated.div
              className="card1"
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.interpolate(trans) }}
            />
            <Carousel.Caption className = "bg-descrip">
              <a
                href="https://dreamy-colden-5abbf3.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="color-port">Nguyen's Todos</h3>
                <p style={{ color: "black" }}>
                  This app helps us remember things to do.
                </p>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="position-Item">
            <animated.div
              className="card2"
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.interpolate(trans) }}
            />

            <Carousel.Caption className = "bg-descrip">
              <a
                href="https://hardcore-wright-d0a0f5.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="color-port">Number Guessing Game</h3>
                <p style={{ color: "black" }}>
                  Let play guessing random numbers with me!
                </p>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="position-Item">
            <animated.div
              className="card3"
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.interpolate(trans) }}
            />
            <Carousel.Caption className = "bg-descrip">
              <a
                href="https://trusting-archimedes-fc5270.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="color-port">Hungry Up!!!</h3>
                <p style={{ color: "black" }}>
                  Come and feed the hungry Dorarmon and help him avoid scary mice!
                </p>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      </Row>
    </div>
  );
};

export default Portfolios;
