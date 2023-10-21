import React from 'react'
import SideBar from './SideBar'
import FlashSale from './FlashSale'
import Category from './Category'
import BestSellingProduct from './BestSellingProducts'
import EnhancMusic from './EnhancMusic'
import NewArrivals from './NewArrivals'
import Footer from './Footer'
import Navbar from './Navbar'
import SignUp from './SignUp'

const Total = () => {
  return (
    <div>
        <Navbar/>
        <SideBar />
          <FlashSale />
          <Category />
          <BestSellingProduct />
          <EnhancMusic />
          <NewArrivals />
          <Footer />
    </div>
  )
}

export default Total
