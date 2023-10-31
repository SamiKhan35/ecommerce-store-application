import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import pictureOne from "../icons/signupp1.png";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [toast, setToast] = useState(false);

  const handleGettingDadta = (e) => {
    const { name, value } = e.target;
    setSignUp({
      ...signUp,
      [name]: value,
    });
  };
  console.log(signUp);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4000/api/v1/user/createuser", signUp)
      .then((response) => {
        setToast(true);
        setTimeout(() => {
          setToast(false)
        }, 3000);
        if (response.status === 409) {
         alert('User is Already Registered')
        }
      })
      .catch((error) => {
       console.log('Error Found '+error)
       setErrorToast(true)
       setTimeout(() => {
        setErrorToast(false)
       }, 3000);
      });
    setSignUp({name : '', email: '', password: ''})
  };

  return (
    <div>
      <Navbar />
      {/* Main Div */}
     
      {/* Error Toaster Message */}
      {/* {ErrorToast && (
        <div className="absolute top-[100px] w-[100%] bg-green-500 text-white p-3 rounded shadow">
          <h1>You are Registered</h1>
        </div>
      )} */}

      {/* Error Toaster Message ended */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
        <div className="md:w-[100%] h-auto ">
          <img src={pictureOne} />
        </div>
        {/* 2nd div */}
        <div>
          <form
            className="flex flex-col p-[30px] mt-[70px] ml-[30px] w-[400px] h-[400px] sm:w-[600px] sm:p-[100px] sm:pt-[50px]
            md:mt-[10px] md:ml-[10px] md:w-[100%] lg:w-[90%] lg:h-[580px] lg:mx-5
            "
            onSubmit={handleSubmit}
          >
             {/* Toaster Message */}
            {toast && (
              <div className="relative w-[60%] bg-green-500 text-white p-3 rounded shadow text-center">
                <h1>Your are Registered</h1>
              </div>
            )}

             {/* Toaster Message ended */}
            <h1 className="text-3xl font-bold mb-3">Create an Account</h1>
            <h1 className="font-semibold mb-3">Enter your details below</h1>
            {/* <label>Name</label> */}
            <input
              type="text"
              placeholder="First Name "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
              name="name"
              value={signUp.name}
              onChange={handleGettingDadta}
            />

            <input
              type="email"
              placeholder="Email or Phone Number "
              className="placeholder:text-start  w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
              name="email"
              value={signUp.email}
              onChange={handleGettingDadta}
            />

            <input
              type="password"
              placeholder="Password "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
              name="password"
              value={signUp.password}
              onChange={handleGettingDadta}
            />
            <button className="bg-red-500 w-[300px] font-bold h-[40px] text-white">
              Create Account
            </button>
            <button className="bg-white w-[300px] mt-3 border-2 h-[40px] ">
              <i className="fa-brands fa-google mx-[10px] text-yellow-600"></i>
              SignUp with Google
            </button>
            <h1 className="bg-white w-[300px] mt-3 border-2 h-[40px] lg:pt-[5px] text-center">
              Already have an Account! <Link to={"/login"}> LogIn</Link>
            </h1>
          </form>
        </div>
        {/* 2nd div */}
      </div>
      {/* Miain Div */}
      <Footer />
    </div>
  );
};

export default SignUp;
