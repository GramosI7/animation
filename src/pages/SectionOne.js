import React, { useEffect, useRef } from "react";
import "../styles/SectionOne.scss";
import gsap from "gsap";
import Navigation from "../components/Navigation";

export default function SectionOne() {
  const h1Ref = useRef(null);
  useEffect(() => {
    gsap.from(h1Ref.current, {
      y: -100,
      opacity: 0,
      duration: 3,
      ease: "expo.inOut"
    });
  }, []);
  return (
    <div className="section-1">
      <h1 ref={h1Ref} data-text="Animation">
        Animation
      </h1>
      <Navigation route="/2" />
    </div>
  );
}
