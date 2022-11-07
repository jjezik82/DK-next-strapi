import Image from 'next/image';
import img1 from '../../public/img/dk-about.jpg';
import img2 from '../../public/img/dk-about2.jpg';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const About = () => {
  return (
    <section id='o-nas'>
      <div className='container mx-auto py-24 text-center relative'>
        <div className='row'>
          <h1 className='text-6xl font-extrabold font-poppins'>
            o nás<span className='text-primary'>.</span>
          </h1>
        </div>
      </div>
      <div className='row flex'>
        <div className='xl:w-2/3 relative min-h-[500px] my-20 mr-[-50px]'>
          <Image
            src={img1}
            alt='dobra-karma-o-nas'
            fill
            style={{
              objectFit: 'cover',
              borderTopRightRadius: '6px',
              borderBottomRightRadius: '6px',
              boxShadow:
                '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            }}
          />
        </div>
        <div className='flex flex-col xl:w-1/2 justify-center items-center bg-primary py-20 rounded-l-md shadow-md'>
          <h1 className='text-5xl text-white font-extrabold font-poppins mx-32 mt-16'>
            nápad vyrábať vegánske pochúťky vznikol v Edinburghu,
          </h1>
          <p className='mx-32 my-16 text-white max-w-[400px] self-start'>
            kde roky žila a študovala zakladateľka Dobrej Karmy Andrea. Andrea
            je dlhoročná vegánka, ktorá sa na univerzite venovala odboru výživy
            a technológie jedla. Dlhé roky mala blízky vzťah k zdravej
            životospráve. V zahraničí pracovala v čarovnej vegánskej kaviarni a
            bistre, kde sa prvýkrát stretla s výrobou týchto netradičných syrov.
          </p>
        </div>
      </div>
      <div className='container mx-auto py-24 relative'>
        <div className='row flex justify-center'>
          <div className='flex flex-col xl:w-1/3 justify-center items-center'>
            <p className='m-10 mr-14 text-2xl max-w-[500px] self-start'>
              <FaQuoteLeft className='text-primary mb-3' />
              Vždy, keď som prišla na Slovensko navštíviť rodinu, musela som sa
              stravovať o niečo fádnejšie pre nedostatok vegánskych produktov v
              policiach slovenských supermarketov. V Edinburgu majú ľudia
              vegánsku alternatívu čohokoľvek, na čo si len spomenú. Jediné
              rastlinné syry, ktoré sú na Slovensku dostupné, obsahujú veľa
              kokosového oleja a nemajú vôbec lákavú chuť, navyše sú aj veľmi
              drahé. Práve vtedy mi napadlo priniesť rastlinné syry z našej
              kaviarne na slovenský trh.
              <FaQuoteRight className='mt-3 mr-0 ml-auto text-primary' />
            </p>
          </div>
          <div className='xl:w-1/3 relative min-h-[600px]'>
            <Image
              src={img2}
              alt='dobra-karma-o-nas'
              fill
              style={{
                objectFit: 'cover',
                borderTopRightRadius: '6px',
                borderBottomRightRadius: '6px',
                borderTopLeftRadius: '6px',
                borderBottomLeftRadius: '6px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
