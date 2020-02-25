import React, { useEffect } from "react";
import "./styles/SectionOne.scss";
import gsap from "gsap";

export default function SectionOne() {
  useEffect(() => {
    gsap.from(".section-1 h1", {
      y: -100,
      opacity: 0,
      duration: 3,
      ease: "expo.inOut"
    });
  }, []);
  return (
    <div className="section-1">
      <h1 data-text="Animation">Animation</h1>
    </div>
  );
}
