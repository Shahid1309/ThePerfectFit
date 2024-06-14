




import React from 'react'
import TopCompo from '../TopCompo';
import NavBar from '../NavBar';
import { NavLink } from 'react-router-dom';

import watch1 from '../../assets/watches/watch1.jpeg';
import watch2 from '../../assets/watches/watch2.jpeg';
import watch3 from '../../assets/watches/watch3.jpeg';
import watch4 from '../../assets/watches/watch4.jpeg';
import watch5 from '../../assets/watches/watch5.jpeg';
import watch6 from '../../assets/watches/watch6.jpeg';
import watch7 from '../../assets/watches/watch7.jpeg';
import watch8 from '../../assets/watches/watch8.jpeg';
import watch9 from '../../assets/watches/watch9.jpeg';
import watch10 from '../../assets/watches/watch10.jpeg';
import watch11 from '../../assets/watches/watch11.jpeg';
import watch12 from '../../assets/watches/watch12.jpeg';
import watch13 from '../../assets/watches/watch13.jpeg';
import watch14 from '../../assets/watches/watch14.jpeg';
import watch15 from '../../assets/watches/watch15.jpeg';


const watchItems = [
  { id: 1, image: watch1, description: 'Stylish Shoe', price: '$59.99' },
  { id: 2, image: watch2 , description: 'Casual Shoe', price: '$79.99' },
  { id: 3, image: watch3 , description: 'Elegant Shoe', price: '$199.99' },
  { id: 4, image: watch4 , description: 'Classic Shoe', price: '$29.99' },
  { id: 5, image: watch5 , description: 'Leather Shoe', price: '$89.99' },
  { id: 6, image: watch6 , description: 'Sunglasses', price: '$49.99' },
  { id: 7, image: watch7 , description: 'Jeans', price: '$69.99' },
  { id: 8, image: watch8 , description: 'T-Shirt', price: '$19.99' },
  { id: 9, image: watch9 , description: 'Jacket', price: '$59.99' },
  { id: 10, image: watch10 , description: 'Watch', price: '$199.99' },
  { id: 11, image: watch11 , description: 'Hat', price: '$29.99' },
  { id: 12, image: watch12 , description: 'Bag', price: '$89.99' },
  { id: 13, image: watch13 , description: 'Sunglasses', price: '$49.99' },
  { id: 14, image: watch14 , description: 'Jeans', price: '$69.99' },
  { id: 15, image: watch15 , description: 'T-Shirt', price: '$19.99' },
  
]


const Watch = () => {
  return (
    <div>
      <TopCompo/>
      <NavBar/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10">
        {watchItems.map(item => (
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

export default Watch










