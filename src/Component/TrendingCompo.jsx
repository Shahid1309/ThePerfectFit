import React from 'react';
import { NavLink } from 'react-router-dom';
import jacket1 from '../assets/jacket1.jpg';
import shoe1 from '../assets/shoe1.jpg';
import watch1 from '../assets/watch1.jpg';
import hat1 from '../assets/hat1.jpg';
import leatherbag1 from '../assets/leatherBags1.jpg';
import sunglasses1 from '../assets/sunglasses1.jpg';
import jeans1 from '../assets/jeans1.jpg';
import tshirt1 from '../assets/tshirts1.jpg';

const trendingItems = [
  { id: 1, image: jacket1, description: 'women Ethanic ',  link: '/jackets' , discount:'50-70% OFF'},
  { id: 2, image: shoe1, description: 'WFH Casual Ware',  link: '/shoes' , discount:'40-80% OFF'}, 
  { id: 3, image: watch1, description: 'Men Activewear',  link: '/watches' , discount:'30-70% OFF'},
  { id: 4, image: hat1, description: 'Women Activewear',  link: '/hats' , discount:'30-70% OFF'},
  { id: 5, image: leatherbag1, description: 'Western Wear',  link: '/kids' , discount:'40-80% OFF'},
  { id: 6, image: sunglasses1, description: 'SportsWear',  link: '/sunglasses' , discount:'30-80% OFF'},
  { id: 7, image: jeans1, description: 'Loungewear',  link: '/kids' , discount:'30-60% OFF'},
  { id: 8, image: tshirt1, description: 'Innerwear',  link: '/tshirts' , discount:'UP TO 70% OFF'},
  { id: 9, image: jacket1, description: 'Lingerie',  link: '/jackets' , discount:'UP TO 70% OFF'},
  { id: 10, image: shoe1, description: 'Watches',  link: '/shoes' , discount:'UP TO 80% OFF'},
  { id: 11, image: watch1, description: 'Grooming',  link: '/watches' , discount:'UP TO 70% OFF'},
  { id: 12, image: hat1, description: 'Beauty & Makeup',  link: '/hats' , discount:'UP TO 80% OFF'},
  { id: 13, image: leatherbag1, description: 'Kids Wear',  link: '/kids' , discount:'50-70% OFF'},
  { id: 14, image: jeans1, description: 'Men Footwear',  link: '/kids' , discount:'40-70% OFF'},
  { id: 15, image: tshirt1, description: 'Wome Footwear ',  link: '/tshirts' , discount:'40-80% OFF'},
  { id: 16, image: jacket1, description: 'Bags & Wallets',  link: '/jackets' , discount:'40-70% OFF'},
  { id: 17, image: shoe1, description: 'Office Wear',  link: '/shoes' , discount:'40-70% OFF'},
  { id: 18, image: watch1, description: 'Men Ethnic',  link: '/watches' , discount:'Up To 60% OFF'},
  { id: 19, image: hat1, description: 'Home Decor',  link: '/hats' , discount:'40-70% OFF'},
  { id: 20, image: leatherbag1, description: 'Handbags',  link: '/kids' , discount:'40-80% OFF'},
  { id: 21, image: sunglasses1, description: 'Jewellery',  link: '/sunglasses' , discount:'40-70% OFF'},
  { id: 22, image: jeans1, description: 'Watches',  link: '/kids' , discount:'UP TO 70% OFF'},
  { id: 23, image: tshirt1, description: 'Sleepwear',  link: '/tshirts' , discount:'UP TO 80% OFF'},
  { id: 24, image: jacket1, description: 'Eyeware',  link: '/jackets' , discount:'UP TO 70% OFF'},
  
];

const TrendingCompo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6  py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Trending Items</h2>
      <hr className="border-gray-300 w-1/2 mx-auto my-8 border-t-2" />
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {trendingItems.map(item => (
          <div key={item.id} className="bg-gray-800   text-white shadow-lg rounded-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={item.image} alt={item.description} className="w-full h-48 object-cover " />
            <div className=" p-1 flex flex-col items-center justify-center">
              <h3 className="text-lg font-bold ">{item.description}</h3>
              <p className=" text-xl font-bold  ">{item.discount}</p>
              <h1 className=" ">Buy Now</h1>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}

export default TrendingCompo;
