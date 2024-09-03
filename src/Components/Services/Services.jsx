import React from 'react';
import Icon1 from '../../assets/obj1.webp';
import Icon2 from '../../assets/obj2.webp';
import Icon3 from '../../assets/obj3.webp';
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from 'framer-motion';

const Services = () => {
    const servicesIcons = [
        {
            id: 1,
            title: "Security",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur modi delectus porro nesciunt.",
            image: Icon1,
            delay: 0.3
        },
        {
            id: 2,
            title: "Quality",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur modi delectus porro nesciunt.",
            image: Icon2,
            delay: 0.5
        },
        {
            id: 3,
            title: "Safety",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur modi delectus porro nesciunt.",
            image: Icon3,
            delay: 0.8
        }
    ];

    return (
        <section className='bg-gray-100 font-poppins py-8' id='services'>
            <div className="container py-14 px-4">
                <h1 className='text-3xl font-bold text-center pb-10'>Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesIcons.map((item) => (
                        <UpdateFollower
                            key={item.id}
                            mouseOptions={{
                            backgroundColor: "transparent",
                            zIndex: 9999,
                            followSpeed: 0.5,
                            scale: 5,
                            rotate:720,
                                backgroundElement: (
                                    <div>
                                        <img src={item.image} alt={item.title} className="w-full" />
                                    </div>
                                )
                            }}
                        >
                            <motion.div
                            initial={{ opacity: 0 , x: 100 }}
                            animate={{ opacity: 1 , x: 0 }}
                            transition={{ duration: 0.5, delay: item.delay, ease: "easeInOut"}}
                            className='flex flex-col items-center gap-4 p-4 md:p-6 lg:p-8 shadow-lg bg-white rounded-xl'>
                                <img src={item.image} alt={item.title} className='w-[120px] md:w-[150px] border-b-2 py-3' />
                                <h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>{item.title}</h1>
                                <p className='text-sm md:text-base lg:text-lg'>{item.content}</p>
                            </motion.div>
                        </UpdateFollower>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
