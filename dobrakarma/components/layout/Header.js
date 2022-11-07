import { useState, useEffect } from 'react';

import { motion, useScroll } from 'framer-motion';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../public/img/dk-logo.png';

const Header = () => {
  const [nav, setNav] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState();

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return scrollY.onChange(() => update());
  }, [scrollY]);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  /** add this const **/
  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -96 },
  };

  const menuVariants = {
    opened: {
      opacity: 1,
      top: '109px',
    },
    closed: {
      opacity: 0,
      top: '-400px',
    },
  };

  const menuLinks = [
    { url: 'domov', title: 'domov' },
    { url: 'produkty', title: 'produkty' },
    { url: 'o-nas', title: 'o nás' },
    { url: 'obchody', title: 'obchody' },
    { url: 'kontakt', title: 'kontakt' },
  ];

  return (
    <header>
      <motion.div
        variants={variants}
        /** it's right here that we match our boolean state with these variant keys **/
        animate={hidden ? 'hidden' : 'visible'}
        /** I'm also going to add a custom easing curve and duration for the animation **/
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className={`fixed w-full bg-white drop-shadow-xl z-[1001]`}
      >
        <nav className='p-5 md:container md:mx-auto bg-white shadow md:shadow-none md:flex md:items-center md:justify-between'>
          <div className='flex justify-between items-center '>
            <Link href='#home'>
              <div className='w-[120px] h-[70px] cursor-pointer relative'>
                <Image
                  src={logo}
                  alt='dobra-karma-logo'
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>

            <span className='text-3xl cursor-pointer mx-2 md:hidden block'>
              {!nav ? (
                <AiOutlineMenu onClick={handleNav}></AiOutlineMenu>
              ) : (
                <AiOutlineClose onClick={handleNav}></AiOutlineClose>
              )}
            </span>
          </div>

          <motion.ul
            variants={menuVariants}
            /** it's right here that we match our boolean state with these variant keys **/
            animate={!nav && isMobile ? 'closed' : 'opened'}
            /** I'm also going to add a custom easing curve and duration for the animation **/
            transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
            className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px]'
          >
            {menuLinks.map((link) => (
              <li
                key={link.url}
                className='mx-4 my-6 md:my-0 hover:text-primary font-extrabold font-poppins cursor-pointer'
              >
                <ScrollLink
                  activeClass='text-primary'
                  to={link.url}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {link.title}
                </ScrollLink>
              </li>
            ))}
          </motion.ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
