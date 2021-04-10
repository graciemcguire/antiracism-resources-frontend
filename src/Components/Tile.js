import React from 'react'
import ReactPlayer from "react-player"

import Arrows from './Arrows'

const Tile = ({resource}) => {

  // display all the votes. How?
  // option 1: create a middleware in the backend that will count the votes for us
  // frontend makes a get request to that route and get the number of votes
  // /votes/:id << count how many instances of Votes we have created


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
      <Arrows resource={resource.id} />
      <h1 className='resource-title'>{resource.title}</h1>
      <p className='resource-description'>{resource.description}</p>
      { mediaRendering(resource.url) }
    </section>
  )
}

export default Tile;
