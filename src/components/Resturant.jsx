import React, { useState } from 'react';
import MenuCard from './MenuCard';
import '../components/styles.css';
import Navbar from './Navbar';
import Menu from './menuApi';
import MenuNavbar from './MenuNavbar';
import About from './About';
import Contact from './Contact.JSX';
import SocialFollow from './SocialFollow';

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  

  return (
    <>
      <main id='home'>
        <section className='header' id='header'>
          <Navbar />
        </section>
        <section className='about' id='about'>
          <About />
        </section>
        <section className='menunavbar' id='menunavbar'>
          <MenuNavbar setMenuData={setMenuData} />
          <MenuCard menuData={menuData} />
        </section>
        <section className='contact' id='contact'>
          <Contact />
        </section>
        <section>
          <SocialFollow />
        </section>
      </main>
    </>
  );
};

export default Restaurant;
