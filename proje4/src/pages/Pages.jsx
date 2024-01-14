import React from 'react'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpage/Home'
import TopCate from '../components/top/TopCate'
import NewArrivals from '../components/newarrivals/NewArrivals'
import Discount from '../components/discount/Discount'
import Shop from '../components/shop/Shop'
import Annu from '../components/annocuments/Annu'
import Wrapper from '../components/wrapper/Wrapper'


function Pages({ productItems, cartItem, addToCart, shopItems }) {//Sayfaları alt alta çağırıldı.
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annu />
      <Wrapper />
    </>
  )
}

export default Pages