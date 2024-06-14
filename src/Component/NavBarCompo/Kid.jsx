import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'

import kid1 from '../../assets/kids/kid1.jpeg';
import kid2 from '../../assets/kids/kid2.jpeg';
import kid3 from '../../assets/kids/kid3.jpeg';
import kid4 from '../../assets/kids/kid4.jpeg';
import kid5 from '../../assets/kids/kid5.jpeg';
import kid6 from '../../assets/kids/kid6.jpeg';
import kid7 from '../../assets/kids/kid7.jpeg';
import kid8 from '../../assets/kids/kid8.jpeg';
import kid from '../../assets/kids.jpg';

const trendingItems = [
  { id: 1, image: kid1, description: 'Stylish Jacket', price: '$59.99',  discount : '40-80% OFF' },
  { id: 2, image: kid2 , description: 'Casual Shoes', price: '$79.99', discount : '50-70% OFF'},
  { id: 3, image: kid3 , description: 'Elegant Watch', price: '$199.99', discount : '50-70% OFF'},
  { id: 4, image: kid4 , description: 'Classic Hat', price: '$29.99', discount : '50-70% OFF'},
  { id: 5, image: kid5 , description: 'Leather Bag', price: '$89.99', discount : '50-70% OFF'},
  { id: 6, image: kid6 , description: 'Sunglasses', price: '$49.99', discount : '50-70% OFF'},
  { id: 7, image: kid7 , description: 'Jeans', price: '$69.99', discount : '50-70% OFF'},
  { id: 8, image: kid8 , description: 'T-Shirt', price: '$19.99', discount : '50-70% OFF'},
  
  
];

const Kid = () => {
  return (
    <div>
      
      <NavBar/>
      <div style={{ backgroundImage: `url(${kid})` }} className="h-96 bg-cover w-full " >
      <h1 className='text-8xl font-bold text-white mt-2 pt-36 pl-9'>STYLE KIDS IN <br />THEIR PERFECT STYLE </h1>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {trendingItems.map(item => (
          <div key={item.id} className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={item.image} alt={item.description} className="w-full h-48 object-cover" />
            <div className="p-2 flex flex-col items-center justify-center">
              <h3 className="text-lg font-bold">{item.description}</h3>
              <p className="text-xl">{item.discount}</p>
              <h1>Buy Now</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Kid
