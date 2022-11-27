// core version + navigation, pagination modules:
import { useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { Navigation, EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// import products from '../public/products';
import ProductModal from '../modals/ProductModal';
import Slide from 'react-reveal/Fade';

const Products = ({ products }) => {
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(products.data[0]);
  const [activeSlide, setActiveSlide] = useState(1);
  const goToRef = useRef(null);
  const swiperRef = useRef(null);

  const openProductModal = () => setProductModalOpen(true);
  const closeProductModal = () => setProductModalOpen(false);

  const prevSlide = () => {
    swiperRef.current?.swiper.slidePrev();
    setActiveSlide(swiperRef.current?.swiper.activeIndex);
    setActiveProduct(
      products.data[parseInt(swiperRef.current?.swiper.activeIndex)]
    );
  };

  const nextSlide = () => {
    swiperRef.current?.swiper.slideNext();
    setActiveSlide(swiperRef.current?.swiper.activeIndex);
    setActiveProduct(
      products.data[parseInt(swiperRef.current?.swiper.activeIndex)]
    );
  };

  swiperRef.current?.swiper.on('activeIndexChange', function () {
    const activeIndex = swiperRef.current?.swiper.realIndex;
    setActiveProduct(products.data[parseInt(activeIndex)]);
  });

  const goToSlide = (e) => {
    swiperRef.current?.swiper.slideTo(parseInt(e.target.id) + 1);
    setActiveSlide(swiperRef.current?.swiper.activeIndex);
  };

  const pagination = {
    el: '.swiper-custom-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span data-index="${index}" class="${className} pg-btn"> ${products.data[index].attributes.title}</span>`;
    },
  };

  return (
    <section id='produkty' className='bg-primary bg-opacity-5'>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {productModalOpen && (
          <ProductModal
            productModalOpen={productModalOpen}
            closeProductModal={closeProductModal}
            product={activeProduct}
          />
        )}
      </AnimatePresence>
      <div className='container mx-auto py-24 text-center relative'>
        <div className='row'>
          <Slide bottom>
            <h1 className='text-6xl font-extrabold font-poppins'>
              produkty<span className='text-primary'>.</span>
            </h1>
          </Slide>
        </div>
        <div className='row py-8'>
          <div className='swiper-custom-pagination flex justify-center items-center md:block'></div>
        </div>

        <div className='row xl:px-20'>
          <Swiper
            ref={swiperRef}
            modules={[Navigation, EffectFade, Pagination]}
            navigation={false}
            pagination={pagination}
            effect={'fade'}
            loop={false}
            className='mySwiper'
          >
            {products.data.map((product) => (
              <SwiperSlide key={product.id}>
                <div className='each-slide-effect'>
                  <div className='flex flex-col lg:flex-row p-10'>
                    <Slide left>
                      <div className='flex-auto w-full lg:w-60 relative'>
                        <h4 className='bg-primary py-2 text-white font-bold md:hidden rounded-t-md'>
                          {product.attributes.title}
                        </h4>
                        <img
                          src={`${process.env.NEXT_PUBLIC_STRAPI_UPLOADS}${product.attributes.image.data.attributes.url}`}
                          alt='img'
                          className='h-full w-full rounded-b-md md:rounded-md shadow-lg object-cover'
                        />
                        <button
                          className='mt-[-50px] md:hidden flex-initial w-30 my-2 px-10 py-3 text-white font-bold rounded-md bg-primary'
                          onClick={
                            productModalOpen
                              ? closeProductModal
                              : openProductModal
                          }
                        >
                          zisti viac
                        </button>
                        <button
                          className='absolute top-1/2 -translate-y-1/2 left-[-40px]  border-primary md:hidden'
                          onClick={prevSlide}
                        >
                          <MdNavigateBefore className='mx-auto text-4xl text-primary' />
                        </button>
                        <button
                          className='absolute top-1/2  -translate-y-1/2 right-[-40px]  border-primary md:hidden'
                          onClick={nextSlide}
                        >
                          <MdNavigateNext className='mx-auto text-4xl text-primary' />
                        </button>
                      </div>
                    </Slide>
                    <Slide right>
                      <div className='hidden md:block z-10 flex-auto w-full lg:w-40 p-10 '>
                        <div className='mt-[-150px] lg:mt-0 lg:ml-[-100px] shadow-lg bg-white h-full flex flex-col rounded-md'>
                          <h1 className='font-bold font-poppins text-4xl mb-6 pt-20 flex-grow'>
                            {product.attributes.title}
                            <span className='text-primary'>.</span>
                          </h1>
                          <div className='h-[2px] w-[10%] mx-auto bg-primary mb-10'></div>
                          <p className='font-poppins text-lg py-10 px-20 grow md:max-h-[190px] lg:max-h-[230px]'>
                            {product.attributes.description
                              ? product.attributes.description.substring(
                                  0,
                                  200
                                ) + '...'
                              : ''}{' '}
                          </p>
                          <div className='flex justify-center py-5'>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className='flex-initial w-30 my-2 px-10 py-3 text-primary border-2 rounded-md border-primary'
                              onClick={
                                productModalOpen
                                  ? closeProductModal
                                  : openProductModal
                              }
                            >
                              zisti viac
                            </motion.button>
                          </div>
                          <div className='flex'>
                            <button
                              className='flex-auto w-50 p-5 border-t-2 border-r-[1px] border-primary'
                              onClick={prevSlide}
                            >
                              <MdNavigateBefore className='mx-auto text-4xl text-primary' />
                            </button>
                            <button
                              className='flex-auto w-50 p-5 border-t-2 border-l-[1px] border-primary'
                              onClick={nextSlide}
                            >
                              <MdNavigateNext className='mx-auto text-4xl text-primary' />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Products;
