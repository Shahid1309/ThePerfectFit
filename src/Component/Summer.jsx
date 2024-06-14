import React from "react";
import summer1 from "../assets/summer1.jpg";
import { NavLink } from "react-router-dom";
import summer2 from "../assets/summer2.jpg";
import summer3 from "../assets/summer3.jpg";
import summer4 from "../assets/summer4.jpg";
import summer5 from "../assets/summer5.jpg";

const summerCollection = [
  {
    id: 1,
    image: summer2,
    description: "Stylish Jacket",
    price: "$59.99",
    link: "/men",
  },
  { id: 2, image: summer3, description: "Casual Shoes", price: "$79.99" },
  {
    id: 3,
    image: summer4,
    description: "Elegant Watch",
    price: "$199.99",
    link: "/kids",
  },
  {
    id: 4,
    image: summer5,
    description: "Classic Hat",
    price: "$29.99",
    link: "/women",
  },
];

const Summer = () => {
  return (
    <div className="">
      
      {/* <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {summerCollection.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-full h-96 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.description}
                  </h3>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div> */}

      <div className="flex justify-center items-center h-screen ">
        <div
          className="w-full h-96 bg-cover bg-center flex justify-center items-center "
          style={{ backgroundImage: `url(${summer1})` }}
        >
          <div className="bg-white bg-opacity-75 p-8 rounded-lg text-center shadow-lg max-w-md">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Summer Flash Sale
            </h1>
            <p className="text-xl text-gray-600 mb-2">Live Now</p>
            <p className="text-xl text-gray-600 mb-2">Flat</p>
            <h1 className="text-5xl font-bold text-red-600 mb-4">40% OFF*</h1>
            <p className="text-lg text-gray-700 mb-6">
              Use Code: <span className="font-bold">SUMMER001</span>
            </p>
            <button className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summer;
