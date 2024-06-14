import React from 'react';
import NavBar from './NavBar';


const LoginPage = () => {
  return (
    <>
    <NavBar />
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-slate-200 to-white">
      

      <div className="flex flex-col items-center mt-20 ">
        <div className="bg-white shadow-md rounded-lg p-8 w-96">
          <div className="mb-6">
            <img src="https://via.placeholder.com/400x150" alt="Promo Banner" className="w-full rounded" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Login or Signup</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="+91 | Mobile Number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <p className="text-sm text-gray-600">
              By continuing, I agree to the <a href="#!" className="text-black">Terms of Use</a> & <a href="#!" className="text-black">Privacy Policy</a>
            </p>
            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-black transition">Continue</button>
          </form>
          <div className="mt-4 text-center">
            <a href="#!" className="text-black">Have trouble logging in? Get help</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginPage