import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import joystick from "../icons/joystick.png";
import img63 from "../icons/image63.png";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
const ProductDetails = () => {
  const params = useParams()
  const [img, setImage] = useState([])
  const [title, setTitle] = useState()
  const [des, setDes] = useState()
  const [price, setPrice] = useState()
  const fetchingData = async()=>{
    const response = await axios.get(`http://localhost:4000/api1/v2/product/singleproduct/${params.id}`)
   .then((res)=>{
    const result =  res.data.data
    setImage(result.image)
    setTitle(result.title)
    setDes(result.description)
    setPrice(result.price)
    console.log(result)
   })
   .catch((error)=>{
    console.log(error)
   })
  }
  useEffect(()=>{
    fetchingData()
  },[])
  return (
    <div>
      <Navbar />
      {/* Main div */}
      <div className="">
        {/* side div */}
        <div className="flex flex-col w-auto sm:w-auto sm:flex-row md:m-6  ">
          {/* side div images */}
          <div className="w-auto grid grid-rows-2 sm:flex-col md:flex-col lg:flex-col lg:mx-auto">
            <div className="bg-[#F5F5F5]">
              <img src={`http://localhost:4000/Image/${img[1]}`} className="" />
            </div>
            <div className="bg-[#F5F5F5]">
              <img src={`http://localhost:4000/Image/${img[2]}`} />
            </div>
            <div className="bg-[#F5F5F5]">
              <img src={`http://localhost:4000/Image/${img[3]}`} />
            </div>
            <div className="bg-[#F5F5F5]">
              <img src={`http://localhost:4000/Image/${img[4]}`} />
            </div>
          </div>

          {/* side div images ended */}
          {/* big image */}
          <div className=" bg-[#F5F5F5]">
            <img src={`http://localhost:4000/Image/${img[0]}`} className="items-center  mt-8  " />
          </div>

          {/* big image ended */}
          {/* side contents */}
          <div className="w-[260px] md:mx-auto ">
            <h1 className="font-semibold">{title}</h1>
            <span className="">
              <i className="fa-solid text-red-500 fa-star"></i>
            </span>
            <span>
              <i className="fa-solid text-red-500 fa-star"></i>
            </span>
            <span>
              <i className="fa-solid text-red-500 fa-star"></i>
            </span>
            <span>
              <i className="fa-solid text-red-500 fa-star"></i>
            </span>
            <span>
              <i className="fa-solid text-red-500 fa-star"></i>
            </span>
            <span>
              <i className="fa-solid text-red-500 fa-star"></i>
            </span>
            <h1 className="font-semibold">Price:{price}</h1>
            <h1 className="mb-3 text-justify">
             {des}
            </h1>
            <hr></hr>
            <div className="pt-3">
              <span className="font-semibold">Colors:</span>
              <label className="mx-2">Yellow:</label>
              <input type="radio" />
              <label className="mx-2">Blue:</label>
              <input type="radio" />
            </div>
            <div className="pt-3">
              <span className="font-semibold">Size:</span>
              <label className="mx-2">XS:</label>
              <input type="radio" className="mx-2" />
              <label className="mx-2">SM:</label>
              <input type="radio" className="mx-2" />
              <label className="mx-2">M:</label>
              <input type="radio" className="mx-2" />
              <label className="mx-2">L:</label>
              <input type="radio" className="mx-2" />
              <label className="mx-2">XL:</label>
              <input type="radio" className="mx-2" />
            </div>
            <Link to={"/cart"}>
              <button className="bg-red-500 w-[100%] mt-2 font-bold h-[40px] text-white">
                Add To Cart
              </button>
            </Link>
            {/* Free delivery contents */}
            <div className="">
              <div className="mt-2">
                <i className="fa-solid fa-bus"></i> <span className="font-semibold">free delivery</span>
                <h1 className="underline text-[13px] mb-1">Enter your postal code for Delivery Availability</h1>
              </div>

              <hr></hr>
              <div className="mt-2">
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
                <span className="font-semibold mx-1">Return Delivery</span>
                <h1 className="underline text-[13px]">Free 30 Days Delivery Returns. Details</h1>
              </div>
            </div>
            {/* Free delivery contents ended */}
          </div>
          {/* side contents ended */}
        </div>
        {/* side div ended */}
      </div>
      {/* Main div ended */}
      <Footer />
    </div>
  );
};

export default ProductDetails;
