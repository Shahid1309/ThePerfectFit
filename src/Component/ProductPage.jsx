import React from 'react';
import NavBar from './NavBar';



const ProductPage = () => {
  return (
    <>
   <NavBar/>
    <div className="min-h-screen bg-white">
      

      <div className="container mx-auto p-8">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2 p-4">
            <div className="mb-4">
              <img src="https://via.placeholder.com/300x400" alt="Product Main" style={{ width: '100%', height: '490px' }} className="w-full rounded-md" />
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              <img src="https://via.placeholder.com/100" alt="Product Thumbnail" className="w-24 h-24 object-cover rounded-md" />
              <img src="https://via.placeholder.com/100" alt="Product Thumbnail" className="w-24 h-24 object-cover rounded-md" />
              <img src="https://via.placeholder.com/100" alt="Product Thumbnail" className="w-24 h-24 object-cover rounded-md" />
              <img src="https://via.placeholder.com/100" alt="Product Thumbnail" className="w-24 h-24 object-cover rounded-md" />
              <img src="https://via.placeholder.com/100" alt="Product Thumbnail" className="w-24 h-24 object-cover rounded-md" />
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-3xl font-bold text-gray-800">Loren Epsum</h1>
            <p className="text-xl text-gray-700 mt-2">INR 999</p>
            <p className="text-sm text-gray-500">(incl. of all taxes)</p>

            <div className="mt-4 space-y-2">
              <p>Get this for <span className="font-bold text-green-600">INR 899</span> Buy 2 & Get Flat 10% Off! Code: BUY2</p>
              <p>Get this for <span className="font-bold text-green-600">INR 799</span> Buy 5 & Get Flat 20% Off! Code: BUY5</p>
              <p>Get this for <span className="font-bold text-green-600">INR 849</span> Flat 15% Off on minimum purchase of 2699/- Code: FLAT15</p>
              <p>Get this for <span className="font-bold text-green-600">INR 799</span> Flat 20% Off on minimum purchase of 3999/- Code: FLAT20</p>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-bold text-gray-800">Select a Size</h2>
              <div className="flex space-x-4 mt-2">
                <button className="px-4 py-2 border rounded-md">S</button>
                <button className="px-4 py-2 border rounded-md">M</button>
                <button className="px-4 py-2 border rounded-md">L</button>
                <button className="px-4 py-2 border rounded-md">XL</button>
              </div>
              <button className="mt-4 text-sm text-blue-500 underline">SIZE CHART</button>
            </div>

            <button className="w-full mt-6 bg-black text-white py-2 rounded-md">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductPage
