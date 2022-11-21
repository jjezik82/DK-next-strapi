import dynamic from 'next/dynamic';
import Slide from 'react-reveal/Fade';

const MapWithNoSSR = dynamic(() => import('../map/Map'), {
  ssr: false,
});

const Shops = ({ places }) => {
  return (
    <section id='obchody' className='bg-primary bg-opacity-5 min-h-screen'>
      <div className='container mx-auto py-24 text-center relative'>
        <div className='row'>
          <Slide bottom>
            <h1 className='text-6xl font-extrabold font-poppins'>
              obchody s našimi produktami<span className='text-primary'>.</span>
            </h1>
          </Slide>
        </div>
      </div>
      <div className='row flex justify-center'>
        <Slide left>
          <div className='w-full xl:w-2/3 relative min-h-[500px] mb-20'>
            <MapWithNoSSR places={places} />
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Shops;
