import React, { useEffect, useRef } from "react";
import "../styles/SectionThree.scss";
import hoverEffect from "hover-effect";
import Navigation from "../components/Navigation";
import gsap from "gsap";

export default function SectionThree() {
  return (
    <section className="section-3">
      <h1>Hover Image</h1>
      <ImageHover delay={0.4} text="Sable" transition={require("../assets/1.jpg")} classCSS="wrapper-1" />
      <ImageHover delay={0.8} text="Vague" transition={require("../assets/2.png")} classCSS="wrapper-2" />
      <ImageHover delay={1.2} text="Eau" transition={require("../assets/4.jpg")} classCSS="wrapper-3" />
      <ImageHover delay={1.6} text="Lame" transition={require("../assets/7.jpg")} classCSS="wrapper-4" />
      <ImageHover delay={2} text="Point" transition={require("../assets/5.jpg")} classCSS="wrapper-5" />
      <Navigation route="/4" />
    </section>
  );
}

function ImageHover({ text = "default", transition, classCSS, delay = 1 }) {
  const wrapperImgRef = useRef(null);
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);

  function hoverEffectImg(parent, image1, image2, displacementImage) {
    new hoverEffect({
      parent,
      intensity: 0.3,
      image1,
      image2,
      displacementImage
    });
  }

  useEffect(() => {
    hoverEffectImg(wrapperImgRef.current, require("../assets/img_one.jpg"), require("../assets/img_two.jpg"), transition);

    gsap.from(wrapperRef.current, {
      delay,
      y: "random(-200, 200)",
      opacity: 0,
      duration: 3,
      ease: "expo.inOut"
    });

    gsap.from(titleRef.current, {
      x: "random(-200, 200)",
      duration: 3,
      delay: delay + 1,
      opacity: 0,
      ease: "expo.inOut"
    });
  }, []);

  return (
    <div ref={wrapperRef} className={"wrapper " + classCSS}>
      <div className="inner">
        <div ref={wrapperImgRef} className="wrapper-img"></div>
        <div className="title">
          <h2 ref={titleRef} data-text={text}>
            {text}
          </h2>
        </div>
      </div>
    </div>
  );
}
