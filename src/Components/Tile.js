import React from 'react'

const Tile = ({resource}) => {
  // const allResources = resources.map( resource => <Tile key={resource.id} resource={resource} />)

  // console.log(resource);

  return(
    <section className='tile'>
      <h2>{resource.title}</h2>
      <p>{resource.description}</p>

    </section>
  )
}

export default Tile;
