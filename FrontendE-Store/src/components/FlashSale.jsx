import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../myredux/userSlice";

const FlashSale = () => {
  const [product, setProducts] = useState([]);
  const [message, setMessage] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const dispatch = useDispatch();

  const handleAddClick = (id) => {
    dispatch(add(id));
    setMessage(true)
    setTimeout(() => {
      setMessage(false)
    }, 2000);
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
        {product.map((items) => {
          return (
            <div className="  p-[20px] w-[300px] bg-[#F5F5F5] " key={items.id}>
              <img
                src={items.image}
                className="w-[200px] h-[200px] mx-auto cursor-pointer p-[30px] "
                onClick={() => navigate("/productdetails")}
              />

              <h1 className="font-semibold">{items.title.slice(0, 20)}...</h1>
              <span className="text-red-600 font-semibold">{items.price}</span>
              <span className="text-yellow-300">
                <i className="fa-solid fa-star-half-stroke"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                <i className="text-black">(35)</i>
              </span>
              <br></br>
              <button
                className="bg-black text-white w-[100%] h-[30px] text-[15px]"
                onClick={() => handleAddClick(items)}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>

      <div className="bg-white w-[200px] mx-auto pt-[200px] pb-[0px] mt-[-100px]">
        <button className="bg-[#DB4444] text-white text-center w-[230px] h-[40px]">
          View All Products
        </button>
      </div>
      <hr></hr>
      <br />
      {message && (
        <div
          className="fixed top-0 p-4 w-[100%] text-center mx-auto h-auto text-md bg-green-500 rounded-lg text-white dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <strong className=" text-center font-semibold">Products is Added to the Cart</strong> 
        </div>
      )}
    </div>
  );
};

export default FlashSale;
