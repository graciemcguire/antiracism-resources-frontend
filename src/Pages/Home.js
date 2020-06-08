import React from 'react'
import { useSelector } from 'react-redux'



const Home = () => {
  const email = useSelector(state => state.email)

  const text = email ? (
    <h1>logged in as { email }
  ) : (
    <h1>nobody is logged in</h1>
  )

  return (
    <div>
      { text }
    </div>
  )
}
export default Home;
