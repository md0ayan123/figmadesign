import React from 'react'
import { useState } from 'react';
import image from '../Components/asset/IMAGE.jpg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav  className="navbar">
<div className='container'>
    <div className='search-container'>
      <img src={image} alt="" />
      <input className='search'type="text" />
    </div>
    <div className={`nav-items  ${isOpen && 'open'}`}>
      <a href="/">Categories</a>
      <a href="/">Website Builders</a>
      <a href="/">Today's deals</a>
    
    </div>
    <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    </div>
  </nav>
);
}
  


export default Navbar
