import React from 'react'
import NavBar from '../NavBar' 
import Footer from '../Footer'

import women1 from '../../assets/womens/women1.jpeg';
import women2 from '../../assets/womens/women2.jpeg';
import women3 from '../../assets/womens/women3.jpeg';
import women4 from '../../assets/womens/women4.jpeg';
import women5 from '../../assets/womens/women5.jpeg';
import women6 from '../../assets/womens/women6.jpeg';
import women7 from '../../assets/womens/women7.jpeg';
import women8 from '../../assets/womens/women8.jpeg';
import women9 from '../../assets/womens/women9.jpeg';
import women10 from '../../assets/womens/women10.jpeg';
import women11 from '../../assets/womens/women11.jpeg';
import women12 from '../../assets/womens/women12.jpeg';
import WomenBanner from '../../assets/womenbanner.png';





const trendingItems = [
  { id: 1, image: women1, description: 'WFH Casual wear', price: '$59.99', discount : '40-80% OFF'},
  { id: 2, image: women2 , description: 'Ethnic wear', price: '$79.99', discount : '50-70% OFF'},
  { id: 3, image: women3 , description: 'Western wear', price: '$199.99', discount : '50-70% OFF'},
  { id: 4, image: women4 , description: 'Lingerie ', price: '$29.99', discount : 'UP TO 70% OFF'},
  { id: 5, image: women5 , description: 'Activewear', price: '$89.99', discount : '40-70% OFF'},
  { id: 6, image: women6 , description: 'Beauty & Makeup', price: '$49.99', discount : 'UP TO 80%OFF'},
  { id: 7, image: women7 , description: 'Kids Wear', price: '$69.99', discount : '40-70% OFF'},
  { id: 8, image: women8 , description: 'Footwear', price: '$19.99', discount : '40-80% OFF'},
  { id: 9, image: women9 , description: 'Handsbags & Bags', price: '$39.99', discount : '40-80% OFF'},
  { id: 10, image: women10 , description: 'Watches', price: '$59.99', discount : 'UP TO 70% OFF'},
  { id: 11, image: women11 , description: 'Jewellery', price: '$79.99', discount : 'UP TO 80% OFF'},
  { id: 12, image: women12 , description: 'Sunglasses', price: '$79.99', discount : '40-70% OFF'},

  
];

const Women = () => {
  return (
    <div>
      
      <NavBar/>

      <div style={{ backgroundImage: `url(${WomenBanner})` }} className="h-96 bg-cover w-full " >
      <h1 className='text-8xl font-bold text-white mt-2 pt-36 pl-9'>SELECT YOUR <br />PERFECT STYLE</h1>

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

export default Women
