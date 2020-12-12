import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];


const tran1 = (x, y) => `translateX(${x / 2}px) translateY(${-y / 2}px)`;
const tran2 = (x, y) => `translateX(${x / 2.5}px) translateY(${-y / 2.5}px)`;
const tran3 = (x, y) => `translateX(${x / 3}px) translateY(${-y / 3}px)`;
const tran4 = (x, y) => `translateX(${x / 3.5}px) translateY(${-y / 3.5}px)`;
const tran5 = (x, y) => `translateX(${x / 4}px) translateY(${-y / 4}px)`;
const tran6 = (x, y) => `translateX(${x / 4.5}px) translateY(${-y / 4.5}px)`;
const tran7 = (x, y) => `translateX(${x / 5}px) translateY(${-y / 5}px)`;
const tran8 = (x, y) => `translateX(${x / 5.5}px) translateY(${-y / 5.5}px)`;
const tran9 = (x, y) => `translateX(${x / 6}px) translateY(${-y / 6}px)`;


const rings = [...Array(8).keys()];

export default function Content() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      className="grid__container"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div class="circle_container">
    
      <animated.div
            class="ring"
            style={{ transform: props.xy.interpolate(tran8) }}
          />

          <animated.div
            class="ring"
            style={{ transform: props.xy.interpolate(tran7) }}
          />

<animated.div
            class="ring"
            style={{ transform: props.xy.interpolate(tran6) }}
          />

<animated.div
            class="ring"
            style={{ transform: props.xy.interpolate(tran5) }}
          />

<animated.div
            class="ring"
            style={{ transform: props.xy.interpolate(tran4) }}
          />

<animated.div
            class="ring"
            style={{ transform: props.xy.interpolate(tran3) }}
          />

<animated.div
            class="ring"
            style={{ transform: props.xy.interpolate(tran2) }}
          />

<animated.div
            class="ring"
            style={{ transform: props.xy.interpolate(tran1) }}
          />



      </div>

      <nav className="main__sidebar">
        <div className="nav__logo">
          <div>
            ishan
            <span>sengupta</span>
          </div>
        </div>
        <div className="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
          >
            <path
              fill-rule="evenodd"
              d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
            ></path>
          </svg>
        </div>
      </nav>
      <div className="flex__info">
        <div className="hero__info">
          Lorem <span>de</span> Ipsimanum
        </div>
        <div className="description__info__container">
          <div className="description__info__items">
            <div className="description__info__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown <span>printer</span> took a
              galley of <span>type</span> and scrambled it to make a type
              specimen book
            </div>
            <button className="description__info__button">
              Aldus PageMaker
            </button>
          </div>
        </div>
      </div>

      <div className="main__footer">
        <div className="footer__container">
          <div className="footer__item">
            A fish than before in the lorem signifies{" "}
            <span>more fishes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
