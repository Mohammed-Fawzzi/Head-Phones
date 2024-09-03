import React, { useState } from 'react';
import HeadPhone1 from '../../assets/headphone.webp';
import HeadPhone2 from '../../assets/headphone-green.webp';
import HeadPhone3 from '../../assets/headphone-Blue.webp';
import { FaWhatsapp } from 'react-icons/fa';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: delay,
        ease: easeInOut,
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        delay: delay,
        ease: easeInOut,
      }
    }
  }
}

const Home = () => {

  // Headphones Array
  const headPhonesData = [
    {
      id: 1,
      image: HeadPhone1,
      title: "HeadPhone Wireless",
      subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores illum magni nobis quibusdam eaque ea corrupti id non fuga, mollitia, deleniti dolores, sit sequi illo?",
      price: "$100",
      modal: "Modal Brown",
      bgColor: "#8b5958"
    }, {
      id: 2,
      image: HeadPhone2,
      title: "HeadPhone Wireless",
      subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores illum magni nobis quibusdam eaque ea corrupti id non fuga, mollitia, deleniti dolores, sit sequi illo?",
      price: "$100",
      modal: "Lime Green",
      bgColor: "#638153"
    }, {
      id: 3,
      image: HeadPhone3,
      title: "HeadPhone Wireless",
      subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores illum magni nobis quibusdam eaque ea corrupti id non fuga, mollitia, deleniti dolores, sit sequi illo?",
      price: "$100",
      modal: "Oscan Blue",
      bgColor: "#5d818c"
    }
  ];

  // Display Active HeadPhone
  const [activeData, setActiveData] = useState(headPhonesData[0]);

  // Change Active HeadPhone
  const handleActiveData = (data) => {
    setActiveData(data);
  }

  return (
    <>
      <section className='bg-brandDark text-white font-varela'>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[700px]'>

          {/* Info */}
          <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-lg'>
            <div className='space-y-5 text-center md:text-left'>
              <AnimatePresence mode='wait'> 
                <UpdateFollower mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 0.5,
                  scale: 10,
                  rotate: -720,
                  mixBlendMode: "difference"
                }}>
                  <motion.h1
                    key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className='text-2xl md:text-4xl lg:text-5xl font-bold'>
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence mode='wait'>
                <motion.p
                  key={activeData.id}
                  variants={fadeUp(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className='text-sm md:text-base leading-loose text-white/50'>
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>
              
              <AnimatePresence mode='wait'>
                <UpdateFollower mouseOptions={{
                  backgroundColor: activeData.bgColor,
                  zIndex: 999,
                  followSpeed: 0.5,
                  scale: 6,
                  rotate: -720,
                  backgroundElement: (
                    <div>
                      <img src={activeData.image} alt="headphone" />
                    </div>
                  )
                }}>
                  <motion.button
                    key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className='font-normal rounded-sm px-4 py-2 inline-block' style={{ backgroundColor: activeData.bgColor }}>
                    Buy and Enjoy
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>
            </div>
            {/* HeadPhones List */}
            <div className='flex items-center justify-center md:justify-start gap-4 mt-12 md:mt-24'>
              <div className='w-16 md:w-20 h-[1px] bg-white'></div>
              <div className='uppercase text-xs md:text-sm'>Top Headphones</div>
              <div className='w-16 md:w-20 h-[1px] bg-white'></div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-8 md:mt-12'>
              {headPhonesData.map((item) => {
                return (
                  <UpdateFollower 
                    key={item.id}  
                    mouseOptions={{
                      backgroundColor: item.bgColor,
                      zIndex: 999,
                      followSpeed: 0.5,
                      scale: 5,
                      text: "View Details",
                      textFontSize: "3px"
                    }}>
                    <div
                      className='grid grid-cols-2 place-items-center cursor-pointer'
                      onClick={() => handleActiveData(item)} 
                    >
                      <div className='py-5'>
                        <img src={item.image} alt="Headphone" className='w-[150px] md:w-[200px]' />
                      </div>
                      <div className='space-y-2 text-center md:text-left'>
                        <p className='text-sm md:text-base font-bold'>{item.modal}</p>
                        <p className='text-xs md:text-sm font-normal'>{item.price}</p>
                      </div>
                    </div>
                  </UpdateFollower>
                );
              })}
            </div>
          </div>

          {/* Headphone Image*/}
          <div className='flex flex-col items-center justify-end mt-8 sm:mt-0'>
            <AnimatePresence mode='wait'>
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4 , delay: 0.2 ,ease: easeInOut }}
                exit={{ opacity: 0, scale: 0.9, y: 100, transition: {
                  duration: 0.2
                }}}
                src={activeData.image} alt={activeData.title} className='w-[250px] md:w-[350px] xl:w-[450px]'/>
            </AnimatePresence>
          </div>

          {/* Whatsapp */}
          <div className='text-2xl md:text-3xl fixed bottom-5 right-5 hover:rotate-[360deg] duration-500 z-[9999] mix-blend-difference'>
            <a href="tel:+20121580334" rel="noopener noreferrer" target="_blank">
              <FaWhatsapp/>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
