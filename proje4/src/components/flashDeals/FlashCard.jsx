import React, { useState } from 'react'
import Slider from "react-slick";

const NextArrow = (props) => {//next butonu, iconu ayarlandı.
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}

const PrevArrow = (props) => {//prev butonu, iconu ayarlandı.
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}

function FlashCard({ productItems, addToCart }) {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  //sayfada kaç tane kart görüneceği ayarlandı.
  //next ve prev butonları çağırıldı.
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
    //Slider ile kaydırma işlemi yapıldı.
    //kutular oluşturuldu, resimler, oran, isim oluşturulan json dostasından aktarıldı.
    //iconlar eklendi.
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{productItems.discount}% Off</span>
                  <img src={productItems.cover} alt='' />
                  <div className='product-like'>
                    <label>0</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{productItems.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className="price">
                    <h4>{productItems.price}.00</h4>
                    <button onClick={()=> addToCart(productItems)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard