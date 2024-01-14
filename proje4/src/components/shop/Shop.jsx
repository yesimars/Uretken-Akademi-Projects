import React from 'react'
import Catg from './Catg'
import ShopCart from './ShopCart'
import "./style.css"

function Shop({shopItems, addToCart}) {
  // Resimlerin olduğu üçlü kartlar oluşturuldu.
  return (
    <>
    <section className='shop background'>
    <div className='container d_flex'>
        <Catg/>

        <div className='contentWidth'>
        <div className='heading d_flex'>
            <div className='heading-left row f_flex'>
              <h2>Cep Telefonları </h2>
            </div>
            <div className='heading-right row '>
              <span>Hepsini gör</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>

          <div className='product-content grid1'>
            <ShopCart shopItems={shopItems} addToCart={addToCart}/>
          </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Shop