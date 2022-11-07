import React from 'react';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

const Hero = () => {
  const goToProducts = () => {
    console.log('gotoproducts');
    scroller.scrollTo('produkty', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div
      id='domov'
      className='w-full h-screen lg:h-[800px] flex flex-col md:flex-row shadow-xl'
    >
      <div className='flex-initial w-full md:w-1/2 h-full md:order-1 bg-hero-pattern2 bg-cover bg-top mt-[108px] md:mt-0'></div>
      <div className=' bg-primary flex-initial w-full md:w-1/2 mx-auto text-center flex flex-col justify-center items-center'>
        <div className='flex xl:w-1/2 w-full p-10 lg:p-20 xl:p-0 justify-center flex-col '>
          <h1 className='md:text-7xl sm:text-5xl text-4xl font-extrabold py-4 md:py-6 font-poppins text-white lowercase text-left'>
            Ručne Vyrábané Vegánske Syry.
          </h1>
          <p className='text-xl font-poppins text-white text-left'>
            našim cieľom je ponúkať kvalitné vegánske syry, ktorých základom sú
            predovšetkým kvalitné ingrediencie
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='border-2 rounded-md font-bold border-white text-white w-auto sm:w-1/2 mt-4 px-10 py-3'
            onClick={goToProducts}
          >
            produkty
          </motion.button>
          <div className='flex mt-10'>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href='https://www.facebook.com/people/Dobr%C3%A1-Karma-veg%C3%A1nske-syry/100063637614894/'
              target='blank'
            >
              <FiFacebook className='text-6xl text-white' />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href='https://www.instagram.com/dobrakarma_sk/?fbclid=IwAR1dxjy0o-WtcfxfzdmF-9zFa1mvon6bheoD7MRQAvPyNJfn0sNAvnFAmAw'
              target='blank'
            >
              <FiInstagram className='text-6xl text-white' />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
