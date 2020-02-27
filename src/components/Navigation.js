import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.scss";
import gsap from "gsap";

export default function Navigation({ route }) {
  const linkRef = useRef(null);
  useEffect(() => {
    gsap.to(linkRef.current, {
      y: 0,
      duration: 1,
      ease: "expo.in"
    });
  }, []);
  return (
    <div className="navigation">
      <div className="line">
        <Link ref={linkRef} to={`${route}`}>
          Next
        </Link>
      </div>
    </div>
  );
}
