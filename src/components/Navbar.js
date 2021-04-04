import React from 'react';
import './navbar.css';
import logo from '.././images/logo.svg';
import { links } from '../constants';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Icons from './Icons';
import { useProductsContext } from '../contexts/products_context';
import { useCartContext } from '../contexts/cart_context';

const Navbar = () => {
  const { showSidebar } = useProductsContext();
  return (
    <div className='navbar'>
      <div className='menu-bar'>
        <div className='nav-header'>
          <Link to='/'>
            <img className='logo' src={logo} alt='logo' />
          </Link>
          <button className='btn'>
            <FaBars onClick={showSidebar} />
          </button>
        </div>
        <div className='menu'>
          <ul>
            {links.map((item) => {
              const { id, text, url } = item;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='icons'>
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
