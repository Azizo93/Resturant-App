import React, { useState } from 'react';
import BookingFormModal from './BookingFormModal';
import { links } from '../data';

const Navbar = ({ setSection }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClick = (e, targetSection) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 100,
    });

    setIsNavOpen(false);
    setSection(targetSection);
  };

  const handleBookNowClick = () => {
    setIsModalOpen(true);
    setIsNavOpen(false);
  };

  return (
    <div className={`app__background_img ${isNavOpen ? 'nav-open' : ''}`}>
      <nav className="navbar">
        <div className="logo-container" onClick={handleToggleNav}>
          <img src="../images/BBsmalllogo.png" alt="Bazaari Bites Logo" className="logo" />
        </div>

        <button className={`menu-btn ${isNavOpen ? 'menu-btn-open' : ''}`} onClick={handleToggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <div className={`nav-links ${isNavOpen ? 'nav-links-open' : ''}`}>
          {links.map((link) => (
            <a href={link.url} key={link.id} onClick={(e) => handleClick(e, link.section)} className='btn-group__item1'>
              {link.text}
            </a>
          ))}
          <button className='book-btn btn-group__item1' onClick={handleBookNowClick}>BOOK NOW</button>
        </div>

        {/* Render the BookingFormModal if isModalOpen is true */}
        {isModalOpen && <BookingFormModal closeModal={() => setIsModalOpen(false)} />}
      </nav>
    </div>
  );
};

export default Navbar;
