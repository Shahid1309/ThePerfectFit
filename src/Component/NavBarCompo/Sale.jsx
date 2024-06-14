import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'

import sale1 from '../../assets/sale/sale1.jpeg';
import sale2 from '../../assets/sale/sale2.jpeg';
import sale3 from '../../assets/sale/sale3.jpeg';
import sale4 from '../../assets/sale/sale4.jpeg';
import sale5 from '../../assets/sale/sale5.jpeg';
import sale6 from '../../assets/sale/sale6.jpeg';
import sale7 from '../../assets/sale/sale7.jpeg';
import sale8 from '../../assets/sale/sale8.jpeg';
import sale9 from '../../assets/sale/sale9.jpeg';
import sale10 from '../../assets/sale/sale10.jpeg';
import sale11 from '../../assets/sale/sale11.jpeg';
import sale12 from '../../assets/sale/sale12.jpeg';
import sale13 from '../../assets/sale/sale13.jpeg';
import sale14 from '../../assets/sale/sale14.jpeg';
import sale15 from '../../assets/sale/sale15.jpeg';
import sale16 from '../../assets/sale/sale16.jpeg';
import sale17 from '../../assets/sale/sale17.jpeg';
import sale18 from '../../assets/sale/sale18.jpeg';
import sale19 from '../../assets/sale/sale19.jpeg';
import sale20 from '../../assets/sale/sale20.jpeg';
import sale21 from '../../assets/sale/sale21.jpeg';
import sale22 from '../../assets/sale/sale22.jpeg';
import sale23 from '../../assets/sale/sale23.jpeg';
import sale24 from '../../assets/sale/sale24.jpeg';
import sale25 from '../../assets/sale/sale25.jpeg';
import NewSale from '../../assets/Newsale.jpg'


const trendingItems = [
  { id: 1, image: sale1, description: 'Stylish Jacket', price: '$59.99' },
  { id: 2, image: sale2, description: 'Casual Shoes', price: '$79.99' },
  { id: 3, image: sale3, description: 'Elegant Watch', price: '$199.99' },
  { id: 4, image: sale4, description: 'Classic Hat', price: '$29.99' },
  { id: 5, image: sale5, description: 'Leather Bag', price: '$89.99' },
  { id: 6, image: sale6, description: 'Sunglasses', price: '$49.99' },
  { id: 7, image: sale7, description: 'Jeans', price: '$69.99' },
  { id: 8, image: sale8, description: 'T-Shirt', price: '$19.99' },
  { id: 9, image: sale9, description: 'Blouse', price: '$39.99' },
  { id: 10, image: sale10, description: 'Dress', price: '$59.99' },
  { id: 11, image: sale11, description: 'Shoes', price: '$79.99' },
  { id: 12, image: sale12, description: 'Watch', price: '$199.99' },
  { id: 13, image: sale13, description: 'Hat', price: '$29.99' },
  { id: 14, image: sale14, description: 'Bag', price: '$89.99' },
  { id: 15, image: sale15, description: 'Sunglasses', price: '$49.99' },
  { id: 16, image: sale16, description: 'Jeans', price: '$69.99' }, 
  { id: 17, image: sale17, description: 'T-Shirt', price: '$19.99' },
  { id: 18, image: sale18, description: 'Blouse', price: '$39.99' },
  { id: 19, image: sale19, description: 'Dress', price: '$59.99' },
  { id: 20, image: sale20, description: 'Shoes', price: '$79.99' },
  { id: 21, image: sale21, description: 'Watch', price: '$199.99' },
  { id: 22, image: sale22, description: 'Hat', price: '$29.99' },
  { id: 23, image: sale23, description: 'Bag', price: '$89.99' },
  { id: 24, image: sale24, description: 'Sunglasses', price: '$49.99' },
  { id: 25, image: sale25, description: 'Jeans', price: '$69.99' },
];

const Sale = () => {
  return (
    <div>
        
        <NavBar/>
        <div style={{ backgroundImage: `url(${NewSale})` }} className="h-96 bg-cover w-full " >
      <h1 className='text-8xl font-bold text-white mt-2 pt-36 pl-9'>CREATE YOUR<br />OWN OUTFITS </h1>

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

export default Sale
