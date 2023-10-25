import React, { useState } from "react";
import Navbar from "./Navbar";
import pictureOne from "../icons/signupp1.png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

const LogIn = () => {
  const [loginData, setlogInData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [toast, setToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);

  const navigate = useNavigate();
  const handleGettingData = (e) => {
    const { name, value } = e.target;
    setlogInData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      loginData.name === "waqas" &&
      loginData.email ==='waqas@gmail.com' &&
      loginData.password === "112233"
    ) 
    {
      navigate('/')
    } else {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/user/loginuser",
          loginData
        );
        console.log("Data Checked" + response);

        setToast(true);
        setTimeout(() => {
          setToast(false);
          setTimeout(() => {
            navigate("/dashboard");
          });
        }, 1000);
        if (response.status === 409) {
          alert("User is Already Registered");
        }
      } catch (error) {
        setErrorToast(true);
        setTimeout(() => {
          setErrorToast(false);
        }, 2000);
      }
    }
    setlogInData({name:'', email:'', password:''})
  };

  return (
    <div>
      <Navbar />
      {/* Main Div */}
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
            {toast && (
              <div className="relative w-[60%] bg-green-500 text-white p-3 rounded shadow text-center">
                <h1>login Succesful</h1>
              </div>
            )}
            {errorToast && (
              <div className="relative w-[60%] bg-red-500 text-white p-3 rounded shadow text-center">
                <h1>Error While login Please Check your Credentials</h1>
              </div>
            )}
            <h1 className="text-3xl font-bold mb-3">Enter Your Credentials</h1>
            <h1 className="font-semibold mb-3">LogIn</h1>
            {/* <label>Name</label> */}
            <input
              type="text"
              placeholder="First Name "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
              name="name"
              value={loginData.name}
              onChange={handleGettingData}
            />

            <input
              type="email"
              placeholder="Email or Phone Number "
              className="placeholder:text-start  w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
              name="email"
              value={loginData.email}
              onChange={handleGettingData}
            />

            <input
              type="password"
              placeholder="Password "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
              name="password"
              value={loginData.password}
              onChange={handleGettingData}
            />
            <button className="bg-red-500 w-[300px] text-white font-bold h-[40px]">
              LogIn
            </button>
            <button className="bg-white w-[300px] mt-3 border-2 h-[40px]">
              <i className="fa-brands fa-google mx-[10px] text-yellow-600"></i>
              SignUp with Google
            </button>
            <h1 className="bg-white w-[300px] mt-3 border-2 h-[40px] lg:pt-[5px] text-center">
              No Account! SignUp Here! <Link to={"/signup"}> SignUp</Link>
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

export default LogIn;
