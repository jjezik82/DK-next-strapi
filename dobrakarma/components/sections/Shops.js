import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('../map/Map'), {
  ssr: false,
});

const Shops = ({ places }) => {
  return (
    <section id='obchody' className='bg-primary bg-opacity-5 min-h-screen'>
      <div className='container mx-auto py-24 text-center relative'>
        <div className='row'>
          <h1 className='text-6xl font-extrabold font-poppins'>
            obchody s našimi produktami<span className='text-primary'>.</span>
          </h1>
        </div>
      </div>
      <div className='row flex justify-center'>
        <div className='xl:w-2/3 relative min-h-[500px] mb-20'>
          <MapWithNoSSR places={places} />
        </div>
      </div>
    </section>
  );
};

export default Shops;
