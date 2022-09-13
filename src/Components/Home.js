import React from 'react'
import cover from './assets/cover.jpg'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='container d-flex flex-column' style={{
        marginTop: "7vh",
        backgroundImage: `url(${cover})`,
        minHeight: "93vh",
        minWidth: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top , center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
    }}>
      <h1 className='text-center text-dark py-3' style={{fontSize: "3rem"}}>Welcome to News App </h1>
      <p className='text-center text-dark' style={{fontSize: "1.5rem"}}>A whole New world of News...</p>
      <Link className='btn btn-success' to="/auth" style={{minWidth: "15%", marginInline: "auto"}}>Get Started</Link>
    </div>
  )
}

export default Home
