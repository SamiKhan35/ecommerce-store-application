import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, hideMessage } from "../myredux/userSlice";
import {Link} from 'react-router-dom'
import axios from "axios";

const FlashSale = () => {
  const [fetchData, setFetchData] = useState([]);
  const [loader, setLoader] = useState(false);
  const showMessage = useSelector((state) => state.eCart.productsCart);
  const dispatch = useDispatch();

  const fethingSingleData = async () => {
    setLoader(true);
    const data = await axios
      .get("http://localhost:4000/api1/v2/product/getproducts")
      .then((res) => {
        if (Array.isArray(res.data.product)) {
          const data = res.data.product.slice(0,10);
          
          setFetchData(data);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
   fethingSingleData() ;
  }, []);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoader(true);
  //     const res = await fetch("https://fakestoreapi.com/products");
  //     const data = await res.json();
  //     setProducts(data);
  //     setLoader(false);
  //   };
  //   fetchProducts();
  // }, []);

  


  const handleAddClick = (id) => {
   
    dispatch(add(id));
  };

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
        {/* loader */}
        {loader ? (
          <div className="text-center mx-[500px]">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          fetchData.map((items) => {
          
            return (
              <div
                className="  p-[20px] w-[300px] bg-[#F5F5F5] "
                key={items.id}
               >
                <Link to={'/productdetails/' + items._id}>
               
                <img
                  src={`http://localhost:4000/Image/${items.image[0]}`}
                  className="w-[200px] h-[200px] mx-auto cursor-pointer p-[30px] inset-0 transform  hover:scale-75 transition duration-300 "
                />

                <h1 className="font-semibold">{items.title.slice(0,5)}...</h1>
                <span className="text-red-600 font-semibold">
                  {items.price}
                </span>
                <span className="text-yellow-300">
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="text-black">(35)</i>
                </span>
                </Link>
                <br></br>
                <button className="bg-black text-white w-[100%] h-[30px] text-[15px] hover:bg-red-600" onClick={()=>handleAddClick(items)}>
                  Add To Cart
                </button>
              </div>
            );
          })
        )}

        {/* loader */}
      </div>

      <div className="bg-white w-[200px] mx-auto pt-[120px] pb-[0px] mt-[-100px]">
        <button className="bg-[#DB4444] text-white text-center w-[230px] h-[40px] hover:bg-red-900">
          View All Products
        </button>
      </div>
      <hr></hr>
      <br />

    </div>
  );
};

export default FlashSale;
