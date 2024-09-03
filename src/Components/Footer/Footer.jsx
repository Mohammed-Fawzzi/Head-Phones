import React from 'react'
import { FaGithub, FaGoogle, FaLinkedin, FaMapLocation, FaPhone, FaTelegram } from 'react-icons/fa6'
import Visa from '../../assets/credit-cards.webp'
import { UpdateFollower } from 'react-mouse-follower'
const Footer = () => {
  return (
    <>
      <footer className='bg-primary pt-12 pb-3 text-white font-varela'>
        <div className="container border-b pb-6">
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            
            <div className="space-y-6">
              <h1 className='text-3xl font-bold uppercase font-varela'>Contact Us</h1>
              <p className='text-sm max-w-[300px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt saepe debitis laboriosam sed repellat reprehenderit ex autem eius mollitia obcaecati.</p>
                <div>
                  <p className='flex items-center gap-2 cursor-pointer py-2'>
                    <FaPhone/>
                    +1 (123) 456-7890
                  </p>
                  <p className='flex items-center gap-2 cursor-pointer'>
                    <FaMapLocation/> Noida, Uttar Pradesh
                  </p>
                </div>
            </div>

            <div className='space-y-6'>
              <h1 className='text-3xl font-bold uppercase font-varela'>Quick Links</h1>
              <ul className='flex flex-col gap-3 ps-3'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Blog</li>
                <li className='cursor-pointer'>Contact</li>
              </ul>
            </div>

            <div className='space-y-6'>
              <h1 className='text-3xl font-bold uppercase font-varela'>Follow Us</h1>
              <div className='flex text-3xl gap-5 cursor-pointer'>
                <FaLinkedin/>
                <FaGithub/>
                <FaTelegram/>
                <FaGoogle/>
              </div>

              <div>
              <p className='text-xl font-varela py-2'>Payment Methods</p>
              <div className='flex text-3xl gap-5 cursor-pointer'>
                <img src={Visa} alt="master-card" className='w-[200px]'/>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <UpdateFollower mouseOptions={{
            backgroundColor: "white",
            zIndex: 999,
            followSpeed: 1.5,
            scale: 5,
            mixBlendMode: "difference"
            }}>
            <p className='text-center pt-3 footer-rights'>© All Rights Reserved <a href="https://www.linkedin.com/in/mohamed-fawzzi-72b962280/" rel="noopener noreferrer" target="_blank" className="fw-bold text-decoration-none">Mohamed Fawzzi.</a></p>
          </UpdateFollower>
        </div>
      </footer>
    </>
  )
}

export default Footer
