import React, { useState } from 'react';
import Menu from './menuApi';

const MenuNavbar = ({ setMenuData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filterItem = (category) => {
    if (category === 'ALL') {
      setMenuData(Menu);
      // Close the menu if "ALL" is selected
      setIsMenuOpen(false);
    } else {
      const updatedData = Menu.filter((loopcard) => loopcard.category === category);
      setMenuData(updatedData);
    }
  };

  const toggleMenu = () => {
    // Toggle the menu state
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="second-navbar">
        <div className={`btn-group ${isMenuOpen ? 'open' : ''}`}>
          <button className='btn-group__item' onClick={toggleMenu}>
            CATEGORIES
          </button>
          {isMenuOpen && (
            <div className='menu-options'>
              <button className='btn-group__item' onClick={() => filterItem("breakfast")}>BREAKFAST</button>
              <button className='btn-group__item' onClick={() => filterItem("lunch")}>LUNCH</button>
              <button className='btn-group__item' onClick={() => filterItem("dinner")}>DINNER</button>
              <button className='btn-group__item' onClick={() => filterItem("sides")}>SIDES</button>
              <button className='btn-group__item' onClick={() => filterItem("sweets")}>SWEETS</button>
              <button className='btn-group__item' onClick={() => filterItem("ALL")}>ALL</button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default MenuNavbar;

