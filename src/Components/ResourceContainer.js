import React, { useState, useEffect } from 'react'
import Tile from './Tile'
import { withRouter } from 'react-router-dom'


const ResourceContainer = (props) => {
  const [ currentResources, setCurrentResource ] = useState([])

  let neededResource = props.location.pathname.replace(/[\|/\$s"<>\(\)\+,]/g, "");


  useEffect(() => {
    renderCurrentResources()

  }, [props.location.pathname, props.resources])

  const renderCurrentResources = () => {
      if(props.location.pathname === '/'){
        setCurrentResource(props.resources)
      } else if (props.location.pathname === `/${neededResource}s`) {
          const data = props.resources.filter( resource => resource.kind === neededResource)
          // console.log(data);
          setCurrentResource(data)
      }
  }

  const allResources = currentResources.map( resource => {
      return <Tile
              key={resource.id}
              resource={resource} />
  })

  return(
    <>
      {allResources}
    </>
  )
}

export default withRouter(ResourceContainer)
