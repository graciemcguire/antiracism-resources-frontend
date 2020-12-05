import React from 'react'
import ReactPlayer from "react-player"

const Tile = ({resource}) => {

  const mediaRendering = (url) => {
    if(url.includes('youtu.be')){
      return (<ReactPlayer
              url={`${url}`}
              width={`80%`}
              height={'50%'}
              controls={true}
            />)
    } else {
      return (<button className='tile-button'><a href={url} target="_blank"> READ MORE </a></button>)
    }
  }
  
  return(
    <section className='tile'>
      <h1 className='resource-title'>{resource.title}</h1>
      <p className='resource-description'>{resource.description}</p>
      { mediaRendering(resource.url) }
    </section>
  )
}

export default Tile;
