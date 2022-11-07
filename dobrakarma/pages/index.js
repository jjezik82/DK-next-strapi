import ScrollToTop from 'react-scroll-to-top';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Hero from '../components/sections/Hero';
import Products from '../components/sections/Products';
import Shops from '../components/sections/Shops';
import { fetcher } from '../lib/api';

export default function Home({ products, places }) {
  return (
    <>
      <Hero />
      <Products products={products} />
      <About />
      <Shops places={places} />
      <Contact />
      <ScrollToTop
        smooth
        color='#02979e'
        className='flex justify-center items-center'
      />
    </>
  );
}

export async function getStaticProps() {
  const prodsuctsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?populate=*`
  );
  const placesResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/places`
  );
  return {
    props: {
      products: prodsuctsResponse,
      places: placesResponse,
    },
  };
}
