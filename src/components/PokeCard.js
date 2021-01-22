import React from "react";

export default function PokeCard(props) {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <img src={props.sprites.front_default} alt={"Normal " + props.name} />
      <img src={props.sprites.front_shiny} alt={"Shiny " + props.name} />
      <br />
      <a href={props.video}>video</a>
    </React.Fragment>
  );
}
