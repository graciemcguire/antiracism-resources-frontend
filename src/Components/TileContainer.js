import React, { useState, useEffect } from 'react';
import Tile from './Tile';

const TileContainer = (props) => {

  const allTiles = props.currentResources.map(resource => {
    return <Tile
      key={resource.id}
      resource={resource}
    />;
  });

  return (
    <section className={`tile-container`}>
      {allTiles}
    </section>
  );
};

export default TileContainer;
