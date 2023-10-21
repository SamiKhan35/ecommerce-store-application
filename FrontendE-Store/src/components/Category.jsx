import React from "react";

const Category = () => {
  return (
    <div>
      {/* browse by categories */}
      <div className="mt-32 pl-[100px] text-2xl font-bold ">
        <h1 className="text-red-500 border-l-4 pl-1 border-red-700">
          Category:
        </h1>
      </div>
      {/* browse by categories */}

      <h1 className="text-2xl font-bold pl-[100px]">Browse By Category</h1>

      <i className="fa-solid fa-xl fa-arrow-right top-[-40px] lg:left-[90px] mx-[30px] xl:left-0 right-8 bg-[#c9bdbd] rounded-xl  p-6 pl-3 w-[50px] h-[20px] float-right relative "></i>
      <i className="fa-solid fa-xl fa-arrow-left top-[-40px] lg:left-[100px] xl:left-0 right-8 bg-[#c9bdbd] rounded-xl  p-6 pl-3 w-[50px] h-[20px] float-right relative "></i>
    
      <div className="grid grid-cols-1  sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:flex lg:flex-row p-[20px] mx-auto items-center pl-[200px] box-border">
        <div className=" w-[300px] h-[120px] mx-1 border-2 rounded-md  ">
          <i className="fa-solid fa-2xl fa-mobile-screen my-10  mx-20"></i>

          <p className=" top-[-10px] relative font-semibold mx-16">Phones</p>
        </div>
        <div className=" w-[300px] h-[120px] mx-1 border-2 ">
          <i className="fa-solid fa-2xl fa-desktop my-10  mx-20"></i>

          <p className=" top-[-10px] relative font-semibold mx-16">Computers</p>
        </div>
        <div className=" w-[300px] h-[120px] mx-1 border-2  ">
          <i className="fa-solid fa-2xl fa-camera my-10  mx-20"></i>

          <p className=" top-[-10px] relative font-semibold mx-16">Camera</p>  
        </div>
        <div className=" w-[300px] h-[120px] mx-1   border-2">
          <i className="fa-solid fa-2xl fa-headphones my-10  mx-20"></i>

          <p className=" top-[-10px] relative font-semibold mx-16">Headphones</p>
        </div>
        <div className=" w-[300px] h-[120px]  mx-1 border-2">
          <i className="fa-solid fa-2xl fa-gamepad my-10  mx-20"></i>

          <p className=" top-[-10px] relative font-semibold mx-16">Gamepad</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
