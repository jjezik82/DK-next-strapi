import '../styles/globals.css';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
