import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllResources } from '../utils'
import Tile from '../Components/Tile'

const Home = () => {
  const [ resources, setResource ] = useState([])

  useEffect(() => {
    gatherResources()
  }, [])


  const email = useSelector(state => state.email)

  const gatherResources = async () => {
    const data = await getAllResources();
    setResource(data)
    return data;
  }

  const text = email ? (
    <h1>logged in as { email }</h1>
  ) : (
    <h1>nobody is logged in</h1>
  )

  const allResources = resources.map( resource => <Tile key={resource.id} resource={resource} />)



  return (
    <div>
      { allResources }
    </div>
  )
}
export default Home;
