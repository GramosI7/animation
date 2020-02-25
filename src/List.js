import React, { useRef, useEffect } from "react";
import "./styles/List.scss";
import gsap from "gsap";

export default function List({ position, name, type }) {
  const listRef = useRef(null);
  const spanNameRef = useRef(null);
  const spanTypeRef = useRef(null);
  const coverRef = useRef(null);

  const options = {
    threshold: 1,
    rootMargin: "0px 0px -20% 0px"
  };

  const tl = gsap.timeline({ paused: false });

  useEffect(() => {
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
      if (entrie.intersectionRatio === 1) {
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
