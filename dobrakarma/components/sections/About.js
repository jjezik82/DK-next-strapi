import Image from 'next/image';
import img1 from '../../public/img/dk-about.jpg';
import img2 from '../../public/img/dk-about2.jpg';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Slide from 'react-reveal/Fade';

const About = () => {
  return (
    <section id='o-nas'>
      <div className='container mx-auto py-24 text-center relative'>
        <div className='row'>
          <Slide bottom>
            <h1 className='text-6xl font-extrabold font-poppins'>
              o nás<span className='text-primary'>.</span>
            </h1>
          </Slide>
        </div>
      </div>
      <div className='row flex flex-wrap lg:flex-nowrap'>
        <div className='w-full xl:w-2/3 relative min-h-[500px] mt-10 xl:my-20 mr-0 xl:mr-[-50px] z-[1]'>
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
        <Slide right>
          <div className='flex flex-col w-full xl:w-1/2 justify-center items-center bg-primary py-20 xl:rounded-l-md shadow-md'>
            <h1 className='text-3xl text-white font-extrabold font-poppins m-10 xl:mx-32 xl:mt-16'>
              nápad vyrábať vegánske pochúťky vznikol v Edinburghu,
            </h1>
            <p className='m-10 xl:mx-32 xl:my-16 text-white lg:max-w-[400px] self-start text-justify'>
              kde roky žila a študovala zakladateľka Dobrej Karmy Andrea. Andrea
              je dlhoročná vegánka, ktorá sa na univerzite venovala odboru
              výživy a technológie jedla. Dlhé roky mala blízky vzťah k zdravej
              životospráve. V zahraničí pracovala v čarovnej vegánskej kaviarni
              a bistre, kde sa prvýkrát stretla s výrobou týchto netradičných
              syrov.
            </p>
          </div>
        </Slide>
      </div>
      <div className='container mx-auto lg:py-24 relative'>
        <div className='row flex justify-center flex-wrap'>
          <Slide bottom>
            <div className='flex flex-col lg:w-1/2 xl:w-1/3 justify-center items-center order-2 lg:order1'>
              <p className='m-10 mr-14 text-2xl max-w-[500px] self-start text-justify'>
                <FaQuoteLeft className='text-primary mb-3' />
                Vždy, keď som prišla na Slovensko navštíviť rodinu, musela som
                sa stravovať o niečo fádnejšie pre nedostatok vegánskych
                produktov v policiach slovenských supermarketov. V Edinburgu
                majú ľudia vegánsku alternatívu čohokoľvek, na čo si len
                spomenú. Jediné rastlinné syry, ktoré sú na Slovensku dostupné,
                obsahujú veľa kokosového oleja a nemajú vôbec lákavú chuť,
                navyše sú aj veľmi drahé. Práve vtedy mi napadlo priniesť
                rastlinné syry z našej kaviarne na slovenský trh.
                <FaQuoteRight className='mt-3 mr-0 ml-auto text-primary' />
              </p>
            </div>
          </Slide>
          <Slide bottom>
            <div className='w-full lg:w-1/2 xl:w-1/3 relative min-h-[600px]'>
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
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default About;
