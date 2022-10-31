import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "../Button/Button";

function Cards({ image, alt, name, description, link }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
  });

  return (
    <animated.div
      className="item"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={image} alt={alt} />
      <h2>{name}</h2>
      <p>
        {description}
      </p>
      <div className="btnContainer">
        <Button link={link} text="Project"/>
      </div>
    </animated.div>
  );
}

export default Cards;
