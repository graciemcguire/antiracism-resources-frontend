import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllResources } from '../utils'
import Nav from '../Components/Nav'
import ResourceContainer from '../Components/ResourceContainer'
import About from '../Components/About'

const Home = () => {

  const [ resources, setResource ] = useState([])
  const [ isUserLoggedIn, userStatus ] = useState(false)

  useEffect(() => {
    gatherResources()
  }, [])


  const email = useSelector(state => state.email)

  const gatherResources = async () => {
      const data = await getAllResources();
      setResource(data)
      return data;
  }


  const checkForUser = () => {
    if(email){
      userStatus(true)
    } else {
      userStatus(false)
    }
  }

  return (
    <div>
      <Nav />
      {/* <Nav isUserLoggedIn={isUserLoggedIn}/> */}
      <About />
      <ResourceContainer resources={ resources }/>
    </div>
  )
}
export default Home;
