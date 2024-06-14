import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-slate-900 text-white'>
      <div className='flex justify-between items-center pl-4 pr-4'>
        <NavLink to ='/' className='text-xl font-bold'>ThePerfectFit</NavLink>
        <div className='block lg:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}></path>
            </svg>
          </button>
        </div>

        <ul className={`lg:flex lg:items-center lg:gap-5 p-2 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <li>
            <NavLink
              to='/sale'
              className={({ isActive }) => isActive ? 'bg-slate-400 p-2 rounded-md' : 'hover:bg-slate-400 p-2 rounded-md'}
            >
              SALE
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/new'
              className={({ isActive }) => isActive ? 'bg-slate-400 p-2 rounded-md' : 'hover:bg-slate-400 p-2 rounded-md'}
            >
              NEW
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/women'
              className={({ isActive }) => isActive ? 'bg-slate-400 p-2 rounded-md' : 'hover:bg-slate-400 p-2 rounded-md'}
            >
              WOMEN
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/men'
              className={({ isActive }) => isActive ? 'bg-slate-400 p-2 rounded-md' : 'hover:bg-slate-400 p-2 rounded-md'}
            >
              MEN
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/kids'
              className={({ isActive }) => isActive ? 'bg-slate-400 p-2 rounded-md' : 'hover:bg-slate-400 p-2 rounded-md'}
            >
              KIDS
            </NavLink>
          </li>
          <NavLink to='/login' className='hover:bg-slate-400 p-2 rounded-md'><li><CiUser size={25} /></li></NavLink>
          <NavLink to='/search' className='hover:bg-slate-400 p-2 rounded-md'><li><CiSearch size={25} /></li></NavLink>
          <NavLink to='/cart' className='hover:bg-slate-400 p-2 rounded-md'> <li><CiShoppingCart size={25} /></li></NavLink>          
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
