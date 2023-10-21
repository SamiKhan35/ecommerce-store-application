import React from 'react'
import Navbar from './Navbar'
import pictureOne from "../icons/signupp1.png";
import { Link } from 'react-router-dom';
import Footer from './Footer';


const LogIn = () => {
  

  return (
    <div>
        <Navbar/>
        {/* Main Div */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
        <div className="md:w-[100%] h-auto ">
          <img src={pictureOne}/>
        </div>
        {/* 2nd div */}
        <div>
          <form
            className="flex flex-col p-[30px] mt-[70px] ml-[30px] w-[400px] h-[400px] sm:w-[600px] sm:p-[100px] sm:pt-[50px]
            md:mt-[10px] md:ml-[10px] md:w-[100%] lg:w-[90%] lg:h-[580px] lg:mx-5
            "
            onClick={(e) => e.preventDefault()}
          >
            <h1 className="text-3xl font-bold mb-3">Enter Your Credentials</h1>
            <h1 className="font-semibold mb-3">LogIn</h1>
            {/* <label>Name</label> */}
            <input
              type="text"
              placeholder="First Name "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete='true'
            />

            <input
              type="email"
              placeholder="Email or Phone Number "
              className="placeholder:text-start  w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete='true'
            />

            <input
              type="password"
              placeholder="Password "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete='true'
            />
            <button className="bg-red-500 w-[300px] font-bold h-[40px]">LogIn</button>
            <button className="bg-white w-[300px] mt-3 border-2 h-[40px]"><i className="fa-brands fa-google mx-[10px] text-yellow-600"></i>SignUp with Google</button>
            <h1 className="bg-white w-[300px] mt-3 border-2 h-[40px] lg:pt-[5px] text-center">No Account! SignUp Here! <Link to={'/signup'}> SignUp</Link></h1>
          </form>
        </div>
        {/* 2nd div */}
      </div>
      {/* Miain Div */}
      <Footer/>
      
    </div>
  )
}

export default LogIn
