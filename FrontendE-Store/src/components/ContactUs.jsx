import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      {/* main div */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  lg:w-[100%]  m-[30px]  ">
        {/*left side div */}
        <div className="m-[50px] w-auto h-auto font-semibold text-justify">
          <i className="fa-solid text-red-600  fa-xl fa-phone"></i>
          <span className="text-2xl mx-3">Call To Us</span>
          <h1 className="pt-3">We are available 24/7, 7 days a week.</h1>
          <h1 className="pt-2">Phone: +92345566778</h1>
          <hr className="w-[300px]"></hr>
          <div className="pt-2">
            <i className="fa-solid fa-xl text-red-600 fa-envelope"></i>
            <span className="text-2xl mx-3">Email To Us</span>
            <h1 className="pt-3">
              Fill out our form and we will contact you within 24 hours.
            </h1>
            <h1 className="pt-3">Emails: customer@exclusive.com</h1>
            <h1 className="pt-3">Emails: support@exclusive.com</h1>
          </div>
        </div>
        {/*left side div ended */}
        {/* Right side div */}
        <form
          className="flex flex-col p-[30px] mt-[70px] ml-[30px] w-[400px] h-[400px] sm:w-[600px] sm:p-[100px] sm:pt-[0px]
            md:mt-[10px] md:ml-[10px] md:w-[100%] lg:w-[90%] lg:pt-[40px] lg:h-[580px] lg:mx-5
            "
          onClick={(e) => e.preventDefault()}
        >
          <h1 className="text-3xl font-bold mb-3">Your Message</h1>
          
          {/* <label>Name</label> */}
        
          <input
            type="text"
            placeholder="First Name  "
            className="placeholder:text-start w-[300px] h-10 border-opacity-25  border-b border-black mb-6 outline-none"
            autoComplete="true"
          /> 
            
          <input
            type="email"
            placeholder="Email or Phone Number "
            className="placeholder:text-start  w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
            autoComplete="true"
          />
      
          <textarea
            type="text"
            placeholder="Your Suggestions to Us "
            className="placeholder:text-start w-[300px] border-opacity-25 border-b border-black mb-6 outline-none"
            autoComplete="true"
          />
          <button className="bg-red-500 w-[300px] font-bold h-[40px] text-white">
         Send Query
          </button>
         
        </form>

        {/* Right side div ended */}
      </div>
      {/* main div ended */}
      <Footer />
    </div>
  );
};

export default ContactUs;
