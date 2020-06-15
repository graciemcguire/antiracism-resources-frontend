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
      return (<a href={url}> Read More </a>)
    }
  }

  return(
    <section className='tile'>
      <h2 className='resource-title'>{resource.title}</h2>
      <p className='resource-description'>{resource.description}</p>
      { mediaRendering(resource.url) }
    </section>
  )
}

export default Tile;
