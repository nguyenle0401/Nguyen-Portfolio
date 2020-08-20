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
    <div id="portfolios">
      <Row className="nguyen-port-style">
        <Carousel className="carousel-all">
          <Carousel.Item>
            <animated.div
              className="card"
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.interpolate(trans) }}
            />
            <Carousel.Caption>
              <a
                href="https://dreamy-colden-5abbf3.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Nguyen's Todos</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <animated.div
              className="card"
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.interpolate(trans) }}
            />

            <Carousel.Caption>
              <a
                href="https://hardcore-wright-d0a0f5.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Number Guessing Game</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <animated.div
              className="card"
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.interpolate(trans) }}
            />
            <Carousel.Caption>
            <a
                href="https://trusting-archimedes-fc5270.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Hungry Up!!!</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
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
