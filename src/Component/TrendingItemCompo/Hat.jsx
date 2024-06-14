import React from 'react'
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar';
import TopCompo from '../TopCompo';

import hat1 from '../../assets/hats/cap1.jpeg';
import hat2 from '../../assets/hats/cap2.jpeg';
import hat3 from '../../assets/hats/cap3.jpeg';
import hat4 from '../../assets/hats/cap4.jpeg';
import hat5 from '../../assets/hats/cap5.jpeg';
import hat6 from '../../assets/hats/cap6.jpeg';
import hat7 from '../../assets/hats/cap7.jpeg';
import hat8 from '../../assets/hats/cap8.jpeg';
import hat9 from '../../assets/hats/cap9.jpeg';


const hatItems =[
  {id: 1, image: hat1 , description: 'Straw Hat', price: '$59.99'},
  {id: 2, image: hat2 , description: 'Crown', price: '$79.99'},
  {id: 3, image: hat3 , description: 'Hoodie', price: '$199.99'},
  {id: 4, image: hat4 , description: 'Beanie', price: '$29.99'},
  {id: 5, image: hat5 , description: 'Crown', price: '$89.99'},
  {id: 6, image: hat6 , description: 'Crown', price: '$49.99'}, 
  {id: 7, image: hat7 , description: 'Crown', price: '$69.99'},
  {id: 8, image: hat8 , description: 'Crown', price: '$19.99'},
  {id: 9, image: hat9 , description: 'Crown', price: '$39.99'},
]

const Hat = () => {
  return (
    <div>
      <div>
      <TopCompo/>
      <NavBar/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10">
        {hatItems.map(item => (
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
    </div>
  )
}

export default Hat
