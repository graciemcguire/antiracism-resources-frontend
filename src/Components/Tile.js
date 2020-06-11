import React from 'react';

const Tile = (props) => {
  console.log(props);

  return(
    <h1> {props.resource.title} </h1>
  )
}

export default Tile;
