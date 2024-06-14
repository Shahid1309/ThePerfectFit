import React from 'react'
import { NavLink } from 'react-router-dom';


import shoe1 from '../../assets/shoes/shoe1.jpeg';
import shoe2 from '../../assets/shoes/shoe2.jpeg';
import shoe3 from '../../assets/shoes/shoe3.jpeg';
import shoe4 from '../../assets/shoes/shoe4.jpeg';
import shoe5 from '../../assets/shoes/shoe5.jpeg';
import shoe6 from '../../assets/shoes/shoe6.jpeg';
import shoe7 from '../../assets/shoes/shoe7.jpeg';
import shoe8 from '../../assets/shoes/shoe8.jpeg';
import TopCompo from '../TopCompo';
import NavBar from '../NavBar';


const shoeItems = [
  { id: 1, image: shoe1, description: 'Stylish Shoe', price: '$59.99' },
  { id: 2, image: shoe2 , description: 'Casual Shoe', price: '$79.99' },
  { id: 3, image: shoe3 , description: 'Elegant Shoe', price: '$199.99' },
  { id: 4, image: shoe4 , description: 'Classic Shoe', price: '$29.99' },
  { id: 5, image: shoe5 , description: 'Leather Shoe', price: '$89.99' },
  { id: 6, image: shoe6 , description: 'Sunglasses', price: '$49.99' },
  { id: 7, image: shoe7 , description: 'Jeans', price: '$69.99' },
  { id: 8, image: shoe8 , description: 'T-Shirt', price: '$19.99' },
]

const Shoes = () => {
  return (

    <div>
      <TopCompo/>
      <NavBar/>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10">
        {shoeItems.map(item => (
          <NavLink
            key={item.id}
            to={item.link}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img src={item.image} alt={item.description} className="w-full h-96 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900">{item.description}</h3>
              
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Shoes


