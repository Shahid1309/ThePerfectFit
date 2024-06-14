import React, { useContext } from 'react';
import { RiAccountCircleFill } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { CartContext } from './Context/CartContext';

const TopCompo = () => {
  const { items } = useContext(CartContext);

  return (
    <div className="bg-white shadow-md">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <NavLink to='/' className="text-3xl font-bold">The Perfect Fit</NavLink>
        
        <form className="flex items-center w-full max-w-md mx-4">
          <input 
            type="text" 
            placeholder="Search for products" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button type="submit" className="ml-2 text-indigo-600 hover:text-indigo-800 focus:outline-none">
            <IoSearch size={30} />
          </button>
        </form>

        <ul className="flex justify-between items-center gap-4">
          <NavLink to='/login' className='hover:bg-slate-400 p-2 rounded-md'><li><RiAccountCircleFill size={30} /></li></NavLink>
          <NavLink to='/cart' className=' p-2 rounded-md relative'>
            <FaCartArrowDown size={30} />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {items.length}
            </span>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default TopCompo;
