import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <div className='xl:w-1/2 max-w-xl p-10 m-10'>
      <div className='grid grid-cols-1 gap-6'>
        <label className='block'>
          <span>Vaše meno</span>
          <input
            type='text'
            className='
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0
                    border-b-2
                    border-primary
                    border-opacity-50
                    focus:border-primary focus:ring-0
                  '
          />
        </label>
        <label className='block'>
          <span>Email address</span>
          <input
            type='email'
            className='
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0
                    border-b-2
                    border-primary
                    border-opacity-50
                    focus:border-primary focus:ring-0
                  '
            placeholder='john@example.com'
          />
        </label>
        <label className='block'>
          <span>Predmet správy</span>
          <input
            type='text'
            className='
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0
                    border-b-2
                    border-primary
                    border-opacity-50
                    focus:border-primary focus:ring-0
                  '
          />
        </label>
        <label className='block'>
          <span>Vaša správa</span>
          <textarea
            className='
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0
                    border-b-2
                    border-primary
                    border-opacity-50
                    focus:border-primary focus:ring-0
                  '
            rows='3'
          ></textarea>
        </label>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='rounded-md font-bold text-white bg-primary w-full mt-4 px-10 py-3'
          type='submit'
        >
          odoslať
        </motion.button>
      </div>
    </div>
  );
};

export default ContactForm;
