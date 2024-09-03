import React from 'react'
import Headphone from '../../assets/headphone-red.webp'
import { motion } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'
import { fadeUp } from '../Home/Home'

const About = () => {
  return (
    <>
        <section className='bg-gray-50 font-poppins'>
            <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">

                <motion.div
                initial={{ opacity: 0, x: -100, rotate: -180 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, ease:"easeInOut", delay: 0.2}}
                >
                  <img src={Headphone} alt="Headphone" className='w-[300px] md:w-[400px]'/>
                </motion.div>

                <div className='flex flex-col justify-center space-y-4 text-center md:text-left'>
                  <motion.h1
                  variants={fadeUp(0.5)}
                  initial="hidden"
                  whileInView="show"
                  className='text-3xl lg:text-4xl font-semibold'>The Latest Headphones With The Latest Technology</motion.h1>
                  <motion.p
                  variants={fadeUp(0.7)}
                  initial="hidden"
                  whileInView="show"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis facere temporibus esse ratione fugit eligendi doloribus sunt itaque perferendis.
                  </motion.p>
                  <UpdateFollower mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    scale: 5,
                    rotate:720,
                  }}>

                  </UpdateFollower>
                  <UpdateFollower mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference"
                  }}>
                    <motion.button
                    initial={{ opacity: 0, y: 100}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                    className='border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white me-auto block transition-all duration-500'>
                      Shop Now
                    </motion.button>
                  </UpdateFollower>
                </div>
            </div>
        </section>
    </>
  )
}

export default About