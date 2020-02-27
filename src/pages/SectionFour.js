import React, { useRef } from "react";
import "../styles/SectionFour.scss";
import gsap from "gsap";
import Navigation from "../components/Navigation";

export default function SectionFour() {
  const previewRef = useRef(null);

  return (
    <div className="sectionFour">
      <div className="navigation-wrapper">
        <div className="project-preview-wrapper">
          <div ref={previewRef} className="project-preview"></div>
        </div>
        <ul className="navigation-list">
          <List refPreview={previewRef} name="Craft" number={1} />
          <List refPreview={previewRef} name="Mouthwash" number={2} />
          <List refPreview={previewRef} name="Offbeat" number={3} />
          <List refPreview={previewRef} name="Expansions" number={4} />
          <List refPreview={previewRef} name="Canals" number={5} />
          <List refPreview={previewRef} name="Asterisks" number={6} />
          <List refPreview={previewRef} name="Charger" number={7} />
          <List refPreview={previewRef} name="Unclocked" number={8} />
        </ul>
      </div>
      <div className="progressbar"></div>
      <Navigation route="/5" />
    </div>
  );
}

function List({ name, number, refPreview }) {
  function mouseEnter() {
    refPreview.current.style.background = `url(${require(`../assets/4/img-${number}.jpg`)}) no-repeat 50% 50%`;
    gsap.to(".project-preview", {
      duration: 0.5,
      width: "600px",
      ease: "expo.inOut"
    });
  }

  function mouseLeave() {
    gsap.to(".project-preview", {
      duration: 0.5,
      width: 0,
      ease: "expo.inOut"
    });
  }

  return (
    <li onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="navigation-item">
      <a className={`navigation-link navigation-link-${number}`} href="!#">
        <span data-text={name}>{name}</span>
      </a>
    </li>
  );
}
