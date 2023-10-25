import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const select = useSelector((state)=> state.eCart)

  let timeOut;

  const handleOpen = () => {
    clearTimeout(timeOut);
    setisOpen(true);
  };
  const handleClose = () => {
    timeOut = setTimeout(() => {
      setisOpen(false);
    }, 1000);
  };
  return (
    <div>
      {/* Upper Black Navbar */}
      <div className="flex bg-black flex-col items-center p-2   w-[100%] h-auto sm:flex sm:flex-row md:pl-11 md:text-2xl lg:pl-[100px] lg:text-2xl 2xl:pl-[300px]">
        <span className=" text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <div className="flex md:flex-nowrap lg:pl-[200px]">
          <Link to={"/cart"}>
            <button className="bg-black text-white w-[100%] h-[30px] text-[20px]">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="pl-[10px]">
          <select className="bg-black text-white cursor-pointer outline-none text-[20px]">
            <option>English</option>
            <option>Urdu</option>
            <option>Arabic</option>
            <option>French</option>
          </select>
        </div>
      </div>
      {/* Upper Black Navbar */}
      {/* Lower White Navbar */}

      <div className=" bg-white grid grid-cols-2 gap-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-9 text-center mx-[40px] font-semibold">
        <Link to={"/"}>
          <h1 className="text-3xl cursor-pointer">ExclusiveStore</h1>
        </Link>

        <NavLink to={"/"} className={"mx-[90px] pt-[10px]"}>
          Home
        </NavLink>
        <NavLink className={"mx-[50px] pt-[10px]"} to={"/contactus"}>
          Contact
        </NavLink>
        <NavLink className={"mx-[50px] pt-[10px]"} to={"/aboutus"}>
          About
        </NavLink>
        <NavLink to={"/signup"} className={"mx-[50px] pt-[10px]"}>
          SignUp
        </NavLink>
        <NavLink to={"/login"} className={"mx-[50px] pt-[10px]"}>
          LogIn
        </NavLink>

        <input
          type="text"
          className="text-center rounded-full bg-[#F5F5F5] w-[150px] h-[30px] placeholder:text-center placeholder:text-[15px] mx-[20px] mt-[10px]"
          placeholder="Search with me"
        />
        <Link to={"/cart"}>
          {/* badges */}
          <p className="relative inline-flex items-center p-3 text-sm font-medium text-center   rounded-lg  ">
            <i className="fa-solid fa-xl fa-cart-shopping cursor-pointer text-red-600 mx-[20px] mt-[20px] "></i>

            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full ml-[35px] mb-5   dark:border-gray-900">
              {select.length}
            </div>
          </p>

          {/* badges */}
          
        </Link>
        <i
          className="fa-solid fa-xl fa-arrow-right-to-bracket mx-[10px] cursor-pointer mt-[20px] text-red-400 rounded-full hover:underline"
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        ></i>
      </div>

      {/* Lower White Navbar ended */}
      {/* Hr Lines started */}
      <div className="pt-[20px]">
        <hr />
      </div>
      {/* Hr Lines Ended */}
      {isOpen && (
        <div
          className="absolute top-[100px] right-6 w-[200px] h-auto bg-black  text-white "
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          <i className="fa-solid fa-user"></i>
          <span className="mx-[30px] cursor-pointer hover:underline">
            <Link to={"/dashboard"}> My Account</Link>
          </span>
          <br></br>
          <i className="fa-brands fa-jedi-order"></i>
          <span className="mx-[30px] cursor-pointer hover:underline">
            My Orders
          </span>
          <br></br>
          <i className="fa-solid fa-right-from-bracket"></i>
          <span className="mx-[30px] cursor-pointer hover:underline">
            LogOut
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
