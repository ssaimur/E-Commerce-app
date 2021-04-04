import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import logo from '.././images/logo.svg';
import Icons from './Icons';
import { links } from '../constants';
import { FaTimesCircle } from 'react-icons/fa';
import { useProductsContext } from '../contexts/products_context';

const Sidebar = () => {
  const { isSidebarOpen, hideSidebar } = useProductsContext();
  return (
    <div className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
      <div className='sidebar-header'>
        <img className='logo' src={logo} alt='logo' />
        <button className='btn'>
          <FaTimesCircle onClick={hideSidebar} />
        </button>
      </div>
      <div className='sidebar-menu'>
        <ul>
          {links.map((item) => {
            const { id, text, url } = item;
            return (
              <li key={id}>
                <Link to={url} onClick={hideSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='sidebar-icons'>
        <Icons />
      </div>
    </div>
  );
};

export default Sidebar;
