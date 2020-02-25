import React, { useRef, useEffect } from "react";
import { ScrollScene, addIndicators } from "scrollscene";
import gsap from "gsap";
import List from "./List";
import "./styles/Lists.scss";

export default function Lists() {
  const listsRef = useRef(null);
  const containerRef = useRef(null);

  const tl = gsap.timeline({ paused: true });

  useEffect(() => {}, []);

  return (
    <div ref={containerRef} className="container-skills">
      <h1>Display onScroll</h1>
      <ul ref={listsRef} className="lists">
        {listArray.map((element, index) => (
          <List position={element.position} name={element.name} type={element.type} key={index} />
        ))}
      </ul>
    </div>
  );
}

const listArray = [
  {
    name: "HTML5",
    type: "Developpment",
    position: [10, 10]
  },
  {
    name: "CSS3",
    type: "Developpment",
    position: [20, 40]
  },
  {
    name: "JAVASCRIPT",
    type: "Developpment",
    position: [30, 30]
  },
  {
    name: "REACTJS",
    type: "Developpment",
    position: [40, 60]
  },
  {
    name: "NODEJS",
    type: "Developpment",
    position: [50, 10]
  },
  {
    name: "NEXTJS",
    type: "Developpment",
    position: [60, 30]
  },
  {
    name: "GATSBYJS",
    type: "Developpment",
    position: [70, 50]
  },
  {
    name: "GSAP",
    type: "Animation",
    position: [80, 20]
  }
];
