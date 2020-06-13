import React from 'react'
import ReactPlayer from "react-player"
import YouTubePlayer from 'react-player/lib/players/YouTube';

const Tile = ({resource}) => {
  console.log(resource);
  const mediaRendering = (url) => {
    if(url.includes('youtu.be')){
      return (<ReactPlayer
              url={`${url}`}
              width={`70vw`}
              height={'100%'}
            />)
    } else {
      return (<a href={url}> Read More </a>)
    }
  }

  return(
    <section className='tile'>
      <h2>{resource.title}</h2>
      <p>{resource.description}</p>
      <hr />
      {mediaRendering(resource.url)}
    </section>
  )
}

export default Tile;
