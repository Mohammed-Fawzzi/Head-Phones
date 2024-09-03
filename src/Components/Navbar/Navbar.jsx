import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { CiHeadphones, CiMenuFries } from 'react-icons/ci'
import { UpdateFollower } from 'react-mouse-follower';


const Navbar = () => {
    // Open & Close Menu
    const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <>
        <nav className='bg-brandDark text-white py-7 font-varela'>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 , delay: 0.5 }}
            className="container flex justify-between items-center">
                <div className="logo flex">
                <UpdateFollower mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 999,
                        followSpeed: 1.5,
                        scale: 5,
                        mixBlendMode: "difference"
                        }}>
                    <p className='flex items-center text-xl font-bold uppercase'>
                        Playing / <span className='font-extralight text-white/70 ml-2'>Market</span>
                    </p>
                </UpdateFollower>
                </div>

                <div className="nav-links">
                    <UpdateFollower mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 999,
                        followSpeed: 1.5,
                        scale: 5,
                        mixBlendMode: "difference"
                        }}>
                        <ul className='hidden md:flex gap-7'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li className='text-2xl'><CiHeadphones/></li>
                        </ul>
                    </UpdateFollower>
                </div>

                <div className="nav-toggle flex md:hidden text-3xl">
                <UpdateFollower mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference"
                    }}>
                    <button onClick={() => setisMenuOpen(!isMenuOpen)} className='cursor-pointer'>
                        <CiMenuFries/>
                    </button>
                </UpdateFollower>
                </div>
            </motion.div>

            {isMenuOpen ? <>
                <UpdateFollower mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 999,
                        followSpeed: 1.5,
                        scale: 5,
                        mixBlendMode: "difference"
                        }}>
                        <ul className='flex flex-col items-center md:hidden gap-7 mt-5'>
                        <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li className='text-2xl'><CiHeadphones/></li>
                        </ul>
                    </UpdateFollower>
            </> : null}
        </nav>
    </>
  )
}

export default Navbar