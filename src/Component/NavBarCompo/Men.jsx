import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import men1 from '../../assets/Mens/Men1.jpeg';
import men2 from '../../assets/Mens/Men2.jpeg';
import men3 from '../../assets/Mens/Men3.jpeg';
import men4 from '../../assets/Mens/Men4.jpeg';
import men5 from '../../assets/Mens/Men5.jpeg';
import men6 from '../../assets/Mens/Men6.jpeg';
import men7 from '../../assets/Mens/Men7.jpeg';
import men8 from '../../assets/Mens/Men8.jpeg';
import men9 from '../../assets/Mens/Men9.jpeg';
import men10 from '../../assets/Mens/Men10.jpeg';
import men11 from '../../assets/Mens/Men11.jpeg';
import Menbanner from '../../assets/menbanner.jpg';

const trendingItems = [
  { id: 1, image: men1, description: 'Track pants', price: '$59.99' , discount : '30-40%OFF'},
  { id: 2, image: men2 , description: 'Shirts', price: '$79.99' , discount : '30-40%OFF' },
  { id: 3, image: men3 , description: 'Trousers', price: '$199.99' , discount : '30-40%OFF' },
  { id: 4, image: men4 , description: 'jeans', price: '$29.99' , discount : '30-40%OFF' },
  { id: 5, image: men5 , description: 'Belts & wallets', price: '$89.99' , discount : '30-40%OFF' },
  { id: 6, image: men6 , description: 'Sunglasses & frames', price: '$49.99' , discount : '30-40%OFF' },
  { id: 7, image: men7 , description: 'Jeans', price: '$69.99' , discount : '30-40%OFF' },
  { id: 8, image: men8 , description: 'T-Shirt', price: '$19.99' , discount : '30-40%OFF' },
  { id: 9, image: men9 , description: 'Sports Shoes', price: '$39.99' , discount : '30-40%OFF' },
  { id: 10, image: men10 , description: 'Innerwear', price: '$59.99' , discount : '30-40%OFF' },
  { id: 11, image: men11 , description: 'kurta & Sets', price: '$79.99' , discount : '30-40%OFF' },
  { id: 12, image: men11 , description: 'Kids wear', price: '$79.99' , discount : '30-40%OFF' },

  
];

const Men = () => {
  return (
    <div>
      
      <NavBar/>
      <div style={{ backgroundImage: `url(${Menbanner})` }} className="h-96 bg-cover w-full " >
      <h1 className='text-8xl font-bold text-white mt-2 pt-36 pl-9'>CREATE YOUR<br />OWN OUTFITS </h1>

      </div>
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
      <Footer/>
    </div>
  )
}

export default Men
