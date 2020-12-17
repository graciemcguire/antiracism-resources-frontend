import React, { useState, useEffect } from 'react'
import Tile from './Tile'
import { withRouter } from 'react-router-dom'

//hello
const ResourceContainer = (props) => {
  const [ currentResources, setCurrentResource ] = useState([])
// make a new state thats an object, keys are resource names, value is the array of said resource
// slice array into 4 resources 
//spread the arrays into one big array and return on page
  let neededResource = props.location.pathname.slice(1, -1);

  useEffect(() => {
    renderCurrentResources()

  }, [props.location.pathname, props.resources])

  const renderCurrentResources = () => {
      if(props.location.pathname === '/'){
        setCurrentResource(props.resources)
      } else if (props.location.pathname != '/parents' && props.location.pathname === `/${neededResource}s`) {
        const data = props.resources.filter( resource => resource.kind === neededResource)
        setCurrentResource(data)
      } else if (props.location.pathname === '/parents'){
        const data = props.resources.filter(data => !!data.for_kids)
        setCurrentResource(data)
      }
  }

  const allResources = currentResources.map( resource => {
      return <Tile
              key={resource.id}
              resource={resource} 
            />
  })

  return(
    <section className='resource-container'>
     { allResources }
    </section>
  )
}

export default withRouter(ResourceContainer)
