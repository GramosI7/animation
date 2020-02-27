import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "../styles/SectionTwo.scss";
import Navigation from "../components/Navigation";
import { LiquidDistortionText } from "react-text-fun";

export default function SectionTwo() {
  let titleRef = useRef(null);
  useEffect(() => {
    gsap.from(titleRef.current, {
      x: -70,
      opacity: 0,
      duration: 3,
      ease: "expo.inOut"
    });
  }, []);
  return (
    <div className="container-skills">
      <h1 ref={titleRef}>Display onScroll</h1>
      <ul className="lists">
        {listArray.map((element, index) => (
          <List position={element.position} name={element.name} type={element.type} key={index} />
        ))}
      </ul>
      <Navigation route="/3" />
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

function List({ position, name, type }) {
  const listRef = useRef(null);
  const spanNameRef = useRef(null);
  const spanTypeRef = useRef(null);
  const coverRef = useRef(null);

  const tl = gsap.timeline({ paused: true });

  useEffect(() => {
    const options = {
      threshold: 0.1,
      rootMargin: "0px 0px -20% 0px"
    };

    const observer = new IntersectionObserver(scrollAnimation, options);

    observer.observe(listRef.current);

    tl.from(coverRef.current, {
      duration: 1,
      scaleX: 0,
      transformOrigin: "left",
      ease: "power3.out"
    })
      .to(
        coverRef.current,
        {
          duration: 1,
          scaleX: 0,
          transformOrigin: "right",
          ease: "power3.in"
        },
        "reveal"
      )
      .to(
        spanNameRef.current,
        {
          opacity: 1
        },
        "reveal"
      )
      .to(
        spanTypeRef.current,
        {
          y: 0,
          duration: 2,
          delay: -1,
          ease: "expo.inOut"
        },
        "reveal"
      );
  }, []);

  function scrollAnimation(entries) {
    entries.forEach(entrie => {
      if (entrie.intersectionRatio > 0.1) {
        tl.play();
      } else {
        tl.reverse();
      }
    });
  }

  return (
    <li ref={listRef} style={{ top: `${position[0]}%`, left: `${position[1]}%` }} className="list">
      <div className="name">
        <div ref={coverRef} className="cover"></div>
        <span ref={spanNameRef}>{name}</span>
      </div>
      <div className="type">
        <span ref={spanTypeRef}>{type}</span>
      </div>
    </li>
  );
}
