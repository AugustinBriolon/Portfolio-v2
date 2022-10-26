import React from "react";
import Button from "../Button/Button";

function Cards({ image, alt, name, description }) {

  return (
    <div
      className="item"
    >
      <img src={image} alt={alt} />
      <h2>{name}</h2>
      <p>
        {description}
      </p>
      <div className="btnContainer">
        <Button link="https://www.zlawyer.fr/logiciel-avocats/" text="Project"/>
      </div>
    </div>
  );
}

export default Cards;
