import React from "react";
import Navbar from "./Navbar";
import lcd from "../icons/lcd.png";
import joystick from "../icons/joystick.png";
import Footer from "./Footer";

const CheckOut = () => {
  return (
    <div>
      <Navbar />
      {/* Main Div */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Billing Div */}
        <div className="sm:mx-auto">
          <form
            className="flex flex-col p-[30px] mt-[70px] ml-[30px] w-[400px] h-[400px] sm:w-[600px] sm:p-[100px] sm:pt-[50px]
            md:mt-[10px] md:ml-[10px] md:w-[100%] lg:w-[90%] lg:h-[580px] lg:mx-5
            "
            onClick={(e) => e.preventDefault()}
          >
            <h1 className="text-3xl font-bold mb-3">Billing Details</h1>
            {/* <label>Name</label> */}
            <input
              type="text"
              placeholder="First Name "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
            />

            <input
              type="text"
              placeholder="Company Name "
              className="placeholder:text-start  w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
            />

            <input
              type="text"
              placeholder="Street Address "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
            />
            <input
              type="text"
              placeholder="Appartment or Floor Number "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
            />
            <input
              type="text"
              placeholder="Town or City "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
            />
            <input
              type="text"
              placeholder="Phone Number "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
            />
            <input
              type="email"
              placeholder="Email "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
            />
            
          </form>
        </div>
        {/* Billing Div Ended */}
        {/* Shipping Details */}
        <div className="mx-4 sm:mx-auto">
          <div className="flex flex-row w-[450px]  mt-[70px]">
            <img src={lcd} className="w-[70px] h-[60px] mx-4" />
            <span className="font-semibold"> 1. LCD</span>
            <span className=" mx-auto font-semibold">$30</span>
          </div>

          <div className=" flex flex-row w-[450px]  mt-[20px]">
            <img src={joystick} className="w-[70px] h-[60px] mx-4" />
            <span className="font-semibold"> 1. LCD</span>
            <span className=" mx-auto font-semibold">$30</span>
          </div>
          <div className="border-b-2 w-[300px] mt-2 mx-4">
          <span>SubTotal</span>
          <span className="float-right">$30</span>
        </div>
          <div className="border-b-2 w-[300px] mt-2 mx-4">
          <span>Shipping</span>
          <span className="float-right">Free</span>
        </div>
        <div className="w-[300px] mt-2 mx-4">
          <span>Total</span>
          <span className="float-right">$30</span>
        </div>
        <div className="w-[300px] mt-2 mx-4">
          <input type="radio"/> <span>Bank</span>
        </div>
        <div className="w-[300px] mt-2 mx-4">
          <input type="radio"/> <span>Cash On Delivery</span>
        </div>
        <button className="bg-red-500 w-[300px] font-bold h-[40px] mt-2">
              Place Order
            </button>
        </div>
        {/* Shipping Details Ended */}
      </div>
      {/* Main Div */}
      <Footer/>
    </div>
  );
};

export default CheckOut;
