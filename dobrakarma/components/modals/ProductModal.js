import { motion } from 'framer-motion';
import * as ReactDOM from 'react-dom';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Navigation, EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { SlEnergy } from 'react-icons/sl';
import { BsListCheck, BsThermometerSnow } from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';

const ProductModal = ({ productModalOpen, toggleProductModal, product }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const pagination = {
    el: '.productModal-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"
      }}> ${paginationItems[index]}</span>`;
    },
  };

  return ReactDOM.createPortal(
    <>
      {productModalOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-50vh' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className='fixed top-0 left-0 right-0 bottom-0 bg-slate-700 z-[1002] overflow-y-scroll'
        >
          <div className='container mx-auto'>
            <div className='row flex justify-center my-5'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='text-primary text-6xl'
                onClick={toggleProductModal}
              >
                <IoMdCloseCircleOutline />
              </motion.button>
            </div>
            <div className='row flex flex-col md:flex-row my-5'>
              <div className='flex-initial w-full md:w-1/2 p-10'>
                <Swiper
                  modules={[Navigation, EffectFade]}
                  navigation={true}
                  effect={'slide'}
                  loop={true}
                  className='mySwiperModal'
                >
                  {product.attributes.gallery.data.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        className='w-full h-auto object-cover'
                        src={`${process.env.NEXT_PUBLIC_STRAPI_UPLOADS}${image.attributes.url}`}
                        alt={`${product.name}-img`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className='flex-initial w-full md:w-1/2 p-10'>
                <h1 className='text-white text-5xl mb-10'>
                  {product.attributes.title}
                </h1>
                <h3 className='text-xl text-white text-justify'>
                  {product.attributes.description}
                </h3>
                <Tabs
                  selectedIndex={tabIndex}
                  onSelect={(index) => setTabIndex(index)}
                  selectedTabClassName='!border-primary !text-primary'
                  className='mt-12'
                >
                  <TabList className='flex'>
                    <Tab className='flex-initial w-1/3 cursor-pointer bg-transparent text-white p-2 mx-3 text-center border-2 rounded-md font-bold border-white hover:scale-110 transition-all'>
                      <BsListCheck className='mx-auto' />
                      <p className='hidden md:block'>zloženie</p>
                    </Tab>
                    <Tab className='flex-initial w-1/3 cursor-pointer bg-transparent text-white p-2 mx-3 text-center border-2 rounded-md font-bold border-white hover:scale-110 transition-all'>
                      <BsThermometerSnow className='mx-auto' />
                      <p className='hidden md:block'>skladovanie</p>
                    </Tab>
                    <Tab className='flex-initial w-1/3 cursor-pointer bg-transparent text-white p-2 mx-3 text-center border-2 rounded-md font-bold border-white hover:scale-110 transition-all'>
                      <SlEnergy className='mx-auto' />
                      <p className='hidden md:block'>energetické hodnoty</p>
                    </Tab>
                  </TabList>
                  <TabPanel>
                    <div className='mx-3 mt-8'>
                      <h4 className='md:hidden my-2 text-2xl font-bold text-primary text-center'>
                        zloženie
                      </h4>
                      <ReactMarkdown className='text-xl text-white text-justify'>
                        {product.attributes.ingredients}
                      </ReactMarkdown>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className='mx-3 mt-8'>
                      <h4 className='md:hidden my-2 text-2xl font-bold text-primary text-center'>
                        skladovanie
                      </h4>
                      <ReactMarkdown className='text-xl text-white text-justify'>
                        {product.attributes.storage}
                      </ReactMarkdown>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className='mx-3 mt-8'>
                      <h4 className='md:hidden my-2 text-2xl font-bold text-primary text-center'>
                        energetické hodnoty
                      </h4>
                      <ReactMarkdown className='text-xl text-white text-justify'>
                        {product.attributes.nutrition}
                      </ReactMarkdown>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>,
    document.getElementById('productModal')
  );
};

export default ProductModal;
