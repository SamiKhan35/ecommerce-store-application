import React from "react";
import radioimg from "../icons/radioimg.png";
import cesar from "../icons/cesar.png";
import camera from '../icons/camera.png'
import laptop from '../icons/laptop.png'
import car from '../icons/car.png'
import shoes from '../icons/shoes.png'
import blackjoystick from '../icons/blackjoystick.png'
import blackcoart from '../icons/blackcoart.png'
import joystick from '../icons/joystick.png'
import chair from '../icons/chair.png'
import keybord from '../icons/keyboard.png'
const EnhancMusic = () => {
  return (
    <div>
      {/* Enhance your music experince */}
      <div className="flex flex-col w-[100%] md:grid md:grid-cols-2 md:w-[100%] lg:w-[100%] bg-black text-white justify-center mt-[210px] lg:mt-[70px] h-auto">
        {/* contents */}
        <div className="md:w-[100%]">
          <h1 className="text-[#0F6] text-3xl m-[40px] mx-10 ">Category</h1>
          <h1 className="text-[48px] pt-[5px] mx-11">
            Enhance Your Music Experience
          </h1>
          {/* hours and minuts */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row mx-11 text-2xl md:m-3">
            <div className="border-2 rounded-full w-[100px] h-[100px] justify-center bg-slate-50 text-black">
              <h1 className="pl-[30px] pt-2 font-bold">23</h1>
              <span className="pl-[20px] font-semibold ">Hours</span>
            </div>
            <div className="border-2 rounded-full w-[100px] h-[100px] justify-center bg-slate-50 text-black">
              <h1 className="pl-[30px] pt-2 font-bold">05</h1>
              <span className="pl-[20px] font-semibold ">Days</span>
            </div>
            <div className="border-2 rounded-full w-[100px] h-[100px] justify-center bg-slate-50 text-black">
              <h1 className="pl-[30px] pt-2 font-bold">59</h1>
              <span className="pl-[20px] font-semibold ">Min</span>
            </div>
            <div className="border-2 rounded-full w-[100px] h-[100px] justify-center bg-slate-50 text-black">
              <h1 className="pl-[30px] pt-2 font-bold">35</h1>
              <span className="pl-[20px] font-semibold ">Sec</span>
            </div>
          </div>
          {/* hours and minutes */}
          <button className="bg-[#0f56] text-2xl m-8 w-[200px] h-[70px] mx-11">
            Buy Now
          </button>
        </div>

        {/* contents */}
        {/* picutur */}
        <div>
          <img
            src={radioimg}
            className="w-[500px] h-[300px]  pb-6 md:mt-[80px] md:w-[500px] md:h-[400px]"
          />
        </div>
        {/* picture ended */}
      </div>
      {/* Enhance your music experince ended */}
      {/* explore Products */}
      {/* browse by categories */}
      <div className="mt-16 pl-[100px] text-2xl font-bold ">
        <h1 className="text-red-500 border-l-4 pl-1 border-red-700">
          Our Products:
        </h1>
      </div>
      {/* browse by categories */}
      <h1 className="text-2xl flex flex-col font-bold pl-[100px]">
        Explore Our Products
      </h1>

      <i className="fa-solid mt-[40px]  sm:mt-[5px] fa-xl fa-arrow-right top-[-40px] lg:left-[90px] mx-[30px] xl:left-0 right-8 bg-[#c9bdbd] rounded-xl  p-6 pl-3 w-[50px] h-[20px] float-right relative "></i>
      <i className="fa-solid fa-xl mt-[40px] sm:mt-[5px] fa-arrow-left top-[-40px] lg:left-[100px] xl:left-0 right-8 bg-[#c9bdbd] rounded-xl  p-6 pl-3 w-[50px] h-[20px] float-right relative "></i>

      {/* main div */}
      <div className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-2 mx-[50px] my-5 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-5">
        <div className="p-[20px] w-[300px] bg-[#F5F5F5]">
          <div className=" p-[30px] ">
            <img src={cesar} className="w-[100px] mx-auto" />
          </div>
          <h1 className="font-semibold">Breed Dry Dog Food</h1>
          <span className="text-red-600 font-semibold">$120</span>
          <span className="text-yellow-300">
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="text-black">(35)</i>
          </span>
          <br></br>
          <button className="bg-black text-white w-[100%] h-[30px] text-[15px]">
            Add To Cart
          </button>
        </div>
        {/* Camera */}
        <div className="p-[20px] w-[300px] bg-[#F5F5F5] ">
          <div className=" p-[30px] h-[220px]">
            <img src={camera} className="w-[100px] mx-auto" />
          </div>
          <h1 className="font-semibold">CANON EOS DSLR Camera</h1>
          <span className="text-red-600 font-semibold">$120</span>
          <span className="text-yellow-300">
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="text-black">(35)</i>
          </span>
          <br></br>
          <button className="bg-black text-white w-[100%] h-[30px] text-[15px]">
            Add To Cart
          </button>
        </div>
        {/* Camera */}
          {/* laptop */}
          <div className="p-[20px] w-[300px] bg-[#F5F5F5] ">
          <div className=" p-[30px] h-[220px]">
            <img src={laptop} className="w-[100px] mx-auto" />
          </div>
          <h1 className="font-semibold">CANON EOS DSLR Camera</h1>
          <span className="text-red-600 font-semibold">$120</span>
          <span className="text-yellow-300">
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="text-black">(35)</i>
          </span>
          <br></br>
          <button className="bg-black text-white w-[100%] h-[30px] text-[15px]">
            Add To Cart
          </button>
        </div>
        {/* laptop */}
          {/* Car */}
          <div className="p-[20px] w-[300px] bg-[#F5F5F5] ">
          <div className=" p-[30px] h-[220px]">
            <img src={car} className="w-[100px] mx-auto" />
          </div>
          <h1 className="font-semibold">CANON EOS DSLR Camera</h1>
          <span className="text-red-600 font-semibold">$120</span>
          <span className="text-yellow-300">
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="text-black">(35)</i>
          </span>
          <br></br>
          <button className="bg-black text-white w-[100%] h-[30px] text-[15px]">
            Add To Cart
          </button>
        </div>
        {/* Car */}
          {/* shoes */}
          <div className="p-[20px] w-[300px] bg-[#F5F5F5] ">
          <div className=" p-[30px] h-[220px]">
            <img src={shoes} className="w-[100px] mx-auto" />
          </div>
          <h1 className="font-semibold">CANON EOS DSLR Camera</h1>
          <span className="text-red-600 font-semibold">$120</span>
          <span className="text-yellow-300">
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="text-black">(35)</i>
          </span>
          <br></br>
          <button className="bg-black text-white w-[100%] h-[30px] text-[15px]">
            Add To Cart
          </button>
        </div>
        {/* shoes */}
         {/* blackjoystick */}
         <div className="p-[20px] w-[300px] bg-[#F5F5F5] ">
          <div className=" p-[30px] h-[220px]">
            <img src={blackjoystick} className="w-[100px] mx-auto" />
          </div>
          <h1 className="font-semibold">CANON EOS DSLR Camera</h1>
          <span className="text-red-600 font-semibold">$120</span>
          <span className="text-yellow-300">
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="text-black">(35)</i>
          </span>
          <br></br>
          <button className="bg-black text-white w-[100%] h-[30px] text-[15px]">
            Add To Cart
          </button>
        </div>
        {/* blackjoystick */}
         {/* blackcoart */}
         <div className="p-[20px] w-[300px] bg-[#F5F5F5] ">
          <div className=" p-[30px] h-[220px]">
            <img src={blackcoart} className="w-[100px] mx-auto" />
          </div>
          <h1 className="font-semibold">CANON EOS DSLR Camera</h1>
          <span className="text-red-600 font-semibold">$120</span>
          <span className="text-yellow-300">
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="text-black">(35)</i>
          </span>
          <br></br>
          <button className="bg-black text-white w-[100%] h-[30px] text-[15px]">
            Add To Cart
          </button>
        </div>
        {/* blackcoart */}

         {/* blackcoart */}
         <div className="p-[20px] w-[300px] bg-[#F5F5F5] ">
          <div className=" p-[30px] h-[220px]">
            <img src={joystick} className="w-[100px] mx-auto" />
          </div>
          <h1 className="font-semibold">CANON EOS DSLR Camera</h1>
          <span className="text-red-600 font-semibold">$120</span>
          <span className="text-yellow-300">
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="text-black">(35)</i>
          </span>
          <br></br>
          <button className="bg-black text-white w-[100%] h-[30px] text-[15px]">
            Add To Cart
          </button>
        </div>
        {/* blackcoart */}
         {/* blackcoart */}
         <div className="p-[20px] w-[300px] bg-[#F5F5F5] ">
          <div className=" p-[30px] h-[220px]">
            <img src={chair} className="w-[100px] mx-auto" />
          </div>
          <h1 className="font-semibold">CANON EOS DSLR Camera</h1>
          <span className="text-red-600 font-semibold">$120</span>
          <span className="text-yellow-300">
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="text-black">(35)</i>
          </span>
          <br></br>
          <button className="bg-black text-white w-[100%] h-[30px] text-[15px]">
            Add To Cart
          </button>
        </div>
        {/* blackcoart */}
         {/* blackcoart */}
         <div className="p-[20px] w-[300px] bg-[#F5F5F5] ">
          <div className=" p-[30px] h-[220px]">
            <img src={keybord} className="w-[100px] mx-auto" />
          </div>
          <h1 className="font-semibold">CANON EOS DSLR Camera</h1>
          <span className="text-red-600 font-semibold">$120</span>
          <span className="text-yellow-300">
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="text-black">(35)</i>
          </span>
          <br></br>
          <button className="bg-black text-white w-[100%] h-[30px] text-[15px]">
            Add To Cart
          </button>
        </div>
        {/* blackcoart */}
       
        
      </div>
      <div className="w-[100%] text-center">
      <button className="bg-[#DB4444] text-white w-[200px] h-[35px] text-[15px]">View All Products</button>

      </div>
      
      {/* main div ended */}
      {/* explore Products Ended*/}
    </div>
  );
};

export default EnhancMusic;
