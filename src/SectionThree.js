import React, { useEffect, useRef } from "react";
import "./styles/SectionThree.scss";
import hoverEffect from "hover-effect";

export default function SectionThree() {
  return (
    <section className="section-3">
      <h1>Hover Image</h1>
      <ImageHover text="Sable" transition={require("./assets/1.jpg")} classCSS="wrapper-1" />
      <ImageHover text="Vague" transition={require("./assets/2.png")} classCSS="wrapper-2" />
      <ImageHover text="Eau" transition={require("./assets/4.jpg")} classCSS="wrapper-3" />
      <ImageHover text="Lame" transition={require("./assets/7.jpg")} classCSS="wrapper-4" />
      <ImageHover text="Point" transition={require("./assets/5.jpg")} classCSS="wrapper-5" />
    </section>
  );
}

function ImageHover({ text = "default", transition, classCSS }) {
  const wrapperRef = useRef(null);

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
    hoverEffectImg(wrapperRef.current, require("./assets/img_one.jpg"), require("./assets/img_two.jpg"), transition);
  }, []);

  return (
    <div className={"wrapper " + classCSS}>
      <div className="inner">
        <div ref={wrapperRef} className="wrapper-img"></div>
        <div className="title">
          <h2 data-text={text}>{text}</h2>
        </div>
      </div>
    </div>
  );
}
