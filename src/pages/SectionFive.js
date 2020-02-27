import React, { useEffect, useRef } from "react";
import "../styles/SectionFive.scss";
import gsap from "gsap";
import Navigation from "../components/Navigation";

export default function SectionFive() {
  const titleRef = useRef(null);
  const spanRef = useRef(null);
  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 200,
      duration: 1,
      delay: 1,
      ease: "expo.inOut"
    });
  });
  return (
    <div className="SectionFive">
      <Background />
      <div className="container">
        <span className="overflow-inner" ref={spanRef}>
          <h1 ref={titleRef}>
            <span>Javascript</span>
          </h1>
        </span>
      </div>
      <Navigation route="/" />
    </div>
  );
}

function Background() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    gsap.to([line1Ref.current, line3Ref.current], {
      duration: 15,
      x: "130%",
      stagger: 5,
      repeat: -1
    });

    gsap.to(line2Ref.current, {
      duration: 15,
      x: "-130%",
      repeat: -1
    });
  });
  return (
    <div className="background">
      <div ref={line1Ref} className="background-line">
        Animation
      </div>
      <div ref={line2Ref} className="background-line">
        Animation
      </div>
      <div ref={line3Ref} className="background-line">
        Animation
      </div>
    </div>
  );
}
