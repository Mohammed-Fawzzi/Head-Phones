import React from 'react'
import Icon1 from '../../assets/blog1.webp';
import Icon2 from '../../assets/blog3.webp';
import Icon3 from '../../assets/blog2.webp';
import Icon4 from '../../assets/blog4.webp';
import { motion } from 'framer-motion';


const Blog = () => {

    const blogsData = [
        {
            id: 1,
            title: "Animation",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: Icon1,
            delay: 0.3
        },
        {
            id: 2,
            title: "Design",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: Icon2,
            delay: 0.5
        },
        {
            id: 3,
            title: "Print",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: Icon3,
            delay: 0.8
        },
        {
            id: 4,
            title: "Branding",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: Icon4,
            delay: 1.1
        }
    ];

  return (
    <>
        <section className='bg-gray-100 font-poppins py-8'>
            <div className="container  py-14 px-4">
                <h1 className='text-3xl font-bold text-center pb-10'>Blogs</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {blogsData.map((blog) => (
                    <motion.div
                        key={blog.id}  
                        initial={{ opacity: 0 , x: 100 }}
                        animate={{ opacity: 1 , x: 0 }}
                        transition={{ duration: 0.5, delay: blog.delay, ease: "easeInOut"}}
                        className='flex flex-col items-center gap-4 p-4 md:p-6 lg:p-8 shadow-lg bg-white rounded-xl'>
                        <img src={blog.image} alt={blog.title} className='w-[120px] sm:w-[300px] md:w-[200px] border-b-2 py-3' />
                        <h1 className='font-bold text-xl md:text-2xl lg:text-z3xl'>{blog.title}</h1>
                        <p className='text-sm md:text-base'>{blog.content}</p>
                    </motion.div>
                ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Blog