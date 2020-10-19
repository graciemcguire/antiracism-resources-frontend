import React, { useState, useEffect } from 'react'
import Tile from './Tile'
import { withRouter } from 'react-router-dom'

//hello
const ResourceContainer = (props) => {
  const [ currentResources, setCurrentResource ] = useState([])

  // let neededResource = props.location.pathname.replace(/[/s"]/g, "");
  let neededResource = props.location.pathname.slice(1, -1);

  // console.log('props.location.pathname', props.location.pathname)
  // console.log('neededResource', neededResource)
  // console.log('neededResource2', neededResource2)
  // console.log(neededResource2 == neededResource)

  useEffect(() => {
    renderCurrentResources()

  }, [props.location.pathname, props.resources])

  const renderCurrentResources = () => {
      if(props.location.pathname === '/'){
        setCurrentResource(props.resources)
      } else if (props.location.pathname === `/${neededResource}s`) {
          const data = props.resources.filter( resource => resource.kind === neededResource)
          console.log(data)
          setCurrentResource(data)
      }
  }

  const allResources = currentResources.map( resource => {
      return <Tile
              key={resource.id}
              resource={resource} />
  })

  return(
    <section className='resource-container'>
      { allResources }
    </section>
  )
}

export default withRouter(ResourceContainer)
