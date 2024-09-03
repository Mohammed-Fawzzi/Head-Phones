import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { UpdateFollower } from 'react-mouse-follower'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Banner from './Components/Banner/Banner'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <UpdateFollower mouseOptions={{
        backgroundColor: "white",
        zIndex: 999,
        followSpeed: 1.5
        }}>
        <Navbar/>
        <Home/>
      </UpdateFollower>

      <UpdateFollower mouseOptions={{
        backgroundColor: "black",
        zIndex: 999,
        followSpeed: 1.5
        }}>
        <About/>
        <Services/>
        <Banner/>
        <Blog/>
        <Footer/>
        </UpdateFollower>
    </main>
  )
}

export default App