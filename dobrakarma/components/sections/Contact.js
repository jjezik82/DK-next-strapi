import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../public/img/dk-logo.png';
import { GoLocation } from 'react-icons/go';
import { GiShakingHands } from 'react-icons/gi';
import { MdOutlineEmail, MdLocalPhone } from 'react-icons/md';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import ContactForm from '../form/ContactForm';

const Contact = () => {
  return (
    <section id='kontakt' className='bg-white'>
      <div className='container mx-auto py-24 text-center relative'>
        <div className='row'>
          <h1 className='text-6xl font-extrabold font-poppins'>
            kontakt<span className='text-primary'>.</span>
          </h1>
        </div>
      </div>
      <div className='container mx-auto mb-20'>
        <div className='row flex justify-center'>
          <div className='flex items-center'>
            <h3 className='text-2xl font-bold font-poppins'>tu nás nájdete</h3>
          </div>
          <div className='flex items-center mx-5'>
            <div className='w-52 border-t-[1px] border-black'></div>
          </div>
          <div className='flex'>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href='https://www.facebook.com/people/Dobr%C3%A1-Karma-veg%C3%A1nske-syry/100063637614894/'
              target='blank'
            >
              <FiFacebook className='text-6xl hover:text-primary transition-colors' />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href='https://www.instagram.com/dobrakarma_sk/?fbclid=IwAR1dxjy0o-WtcfxfzdmF-9zFa1mvon6bheoD7MRQAvPyNJfn0sNAvnFAmAw'
              target='blank'
            >
              <FiInstagram className='text-6xl hover:text-primary transition-colors' />
            </motion.a>
          </div>
        </div>
        <div className='row flex justify-center'>
          <div className='w-1/2 flex justify-center items-center'>
            <div className='mx-16 my-20 max-w-lg bg-primary rounded-md shadow-xl hover:shadow-2xl transition-shadow flex flex-col'>
              <div className='w-[200px] h-[120px] cursor-pointer relative self-center bg-white shadow-md rounded-b-md border-t-[1px] border-gray-50'>
                <Image
                  src={logo}
                  alt='dobra-karma-logo'
                  fill
                  style={{ objectFit: 'contain', padding: '20px' }}
                />
              </div>
              <div className='m-20'>
                <h3 className='text-3xl font-poppins font-bold text-white mb-4'>
                  Dobrá Karma s.r.o.
                </h3>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href='https://goo.gl/maps/GbFDWStWBQQjRPvg7'
                  target='_blank'
                  className='block text-white font-bold mb-2 ml-2'
                >
                  <GoLocation className='text-white text-2xl inline-block mr-2' />{' '}
                  J. Gagarina 139, 960 01 Zvolen
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href='mailto:ahoj@dobra-karma.sk'
                  className='block text-white font-bold mb-2 ml-2'
                >
                  <MdOutlineEmail className='text-white text-2xl inline-block mr-2' />{' '}
                  ahoj@dobra-karma.sk
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href='phone:+421904275876'
                  className='block text-white font-bold mb-2 ml-2'
                >
                  <MdLocalPhone className='text-white text-2xl inline-block mr-2' />{' '}
                  +421 904 275 876
                </motion.a>
                <h4 className='text-2xl font-poppins text-white font-bold my-4'>
                  Pre obchodnú spoluprácu:
                </h4>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href='mailto:obchod@dobra-karma.sk'
                  className='block text-white font-bold mb-2 ml-2'
                >
                  <GiShakingHands className='text-white text-2xl inline-block mr-2' />{' '}
                  obchod@dobra-karma.sk
                </motion.a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
