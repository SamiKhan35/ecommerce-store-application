import React from "react";
import Navbar from "./Navbar";
import lcd from "../icons/lcd.png";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className=" mt-[50px] w-[300px] lg:w-[500px] md:mx-auto lg:mx-auto text-center items-center font-semibold">
        <table className=" bg-white border border-gray-300 ">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Product/ID</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2  border-b flex">
                <img src={lcd} className="w-[50px] h-[30px] mx-1" />
                1. LCD
              </td>
              <td className="py-2 border-b">$25</td>
              <td className="py-2 border-b">
                <input type="number" placeholder="Quantity" className="text-center" />
              </td>
              <td className="py-2  border-b">$25</td>
            </tr>
            <tr>
              <td className="py-2  border-b flex">
                <img src={lcd} className="w-[50px] h-[30px] mx-1" />
                1. LCD
              </td>
              <td className="py-2  border-b">$30</td>
              <td className="py-2  border-b">
                <input
                  type="number"
                  placeholder="Quantity"
                  className="text-center"
                />
              </td>
            
              <td className="py-2  border-b">$30</td>
            </tr>
            <tr>
              <td className="py-2  border-b flex">
                <img src={lcd} className="w-[50px] h-[30px] mx-1" />
                1. LCD
              </td>
              <td className="py-2  border-b">$35</td>
              <td className="py-2  border-b">
                <input type="number" placeholder="Quantity" className="text-center" />
              </td>
             
              <td className="py-2  border-b">$25</td>
            </tr>
          </tbody>
        </table>
        {/* Buttons */}
        <div>
          <NavLink to={"/"}>
            <button className="bg-[#DB4444] mt-11 text-[15px] relative  text-white text-center w-[230px] h-[40px] sm:mx-3">
              Return To Shop
            </button>
          </NavLink>
          <button className="bg-[#DB4444] text-[15px] relative  text-white text-center w-[230px] h-[40px]">
            Update The Cart
          </button>
        </div>
        {/* Buttons Ended */}
      </div>

      {/* Cart SubTotal */}
      <div className="m-[70px] mx-[10px] mt-[40px] w-[310px] md:mx-auto h-auto border-2 lg:relative lg:mx-auto">
        <h1 className="text-2xl">Cart Total:</h1>
        <div className="border-b-2 w-[300px] mt-2">
          <span>SubTotal</span>
          <span className="float-right">$30</span>
        </div>
        <div className="border-b-2 w-[300px] mt-2">
          <span>Shipping</span>
          <span className="float-right">Free</span>
        </div>
        <div className="w-[300px] mt-2">
          <span>Total</span>
          <span className="float-right">$30</span>
        </div>

        <NavLink to={"/checkout"}>
          <button className="bg-[#DB4444]  mt-2 text-[15px] relative  text-white text-center w-[100%] h-[40px]">
            Proceed To Checkout
          </button>
        </NavLink>
      </div>
      {/* Cart SubTotal Ended */}
      <Footer />
    </div>
  );
};

export default Cart;
