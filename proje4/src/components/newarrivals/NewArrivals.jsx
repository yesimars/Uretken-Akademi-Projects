import React from 'react'
import "./style.css"
import Cart from './Cart'


function NewArrivals() {
  //İnternetten icon resim çekildi.
  return (
    <>
        <section className='newarrivals background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row f_flex'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
              <h2>Yeni Ürünler </h2>
            </div>
            <div className='heading-right row '>
              <span>Hepsini gör</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <Cart/>
        </div>
      </section>
    </>
  )
}

export default NewArrivals