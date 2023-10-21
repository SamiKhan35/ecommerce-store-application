import React from "react";
import joystick from "../icons/joystick.png";
import cesar from "../icons/cesar.png";
import camera from '../icons/camera.png'
import laptop from '../icons/laptop.png'
import car from '../icons/car.png'
import shoes from '../icons/shoes.png'
import blackjoystick from '../icons/blackjoystick.png'
import blackcoart from '../icons/blackcoart.png'
import chair from '../icons/chair.png'
import keybord from '../icons/keyboard.png'
import { useNavigate } from "react-router-dom";


const FlashSale = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* Today tag */}
      <div className="mt-32 pl-[100px] text-2xl font-bold ">
        <h1 className="text-red-500 border-l-4 pl-1 border-red-700">
          Today's Best Flash Sale:
        </h1>
      </div>
      {/* Today tag Ended*/}
      {/* Flash Sale Cards */}
      <div className="grid grid-cols-4 pl-[100px] font-bold text-[20px] sm:grid-cols-1 xl:text-[12px] xl:grid-cols-1 ">
        <div className="grid grid-rows-1 sm:grid-cols-5 ">
          <span className="pl-[10px] text-2xl font-bold lg:col-span-1 sm:pt-4">
            Flash Sale:
          </span>

          <span className="relative top-2 p-2">Days: </span>
          <span className="relative top-2 p-1">Hours: </span>
          <span className="relative top-2 p-2">Minutes: </span>
          <span className="relative top-2 p-1">Seconds: </span>
        </div>
        <div>
          <span className="grid grid-rows-1 gap-3 pt-[50px] sm:grid-cols-4 sm:pt-[5px] sm:pl-[130px] md:pl-[170px] lg:pl-[200px] xl:pl-[250px] xl:top-[-15px] relative ">
            <span className="pl-[20px]">03 :</span>
            <span className="pl-[20px]">04 :</span>
            <span className="pl-[20px]">15 :</span>
            <span className="pl-[20px]">30 :</span>
          </span>
        </div>

        <span className="font-bold grid grid-rows-2"></span>
      </div>
      {/* dummy space */}
      <div className="pt-[30px]"></div>
      {/* dummy space */}

     {/* main div */}
     <div className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-2 mx-[100px] my-5 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-5">
        <div className="p-[20px] w-[300px] bg-[#F5F5F5] " >
          <div className=" p-[30px] ">
            <img src={cesar} className="w-[100px] mx-auto cursor-pointer" onClick={()=>navigate('/productdetails')}/>
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
      
      <div className="bg-white w-[200px] mx-auto pt-[200px] pb-[0px] mt-[-100px]">
      <button className="bg-[#DB4444] text-white text-center w-[230px] h-[40px]">View All Products</button>

      </div>
      <hr></hr>
      <br/>
    </div>
  );
};

export default FlashSale;
