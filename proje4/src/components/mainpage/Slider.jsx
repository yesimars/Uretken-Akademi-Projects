import React from 'react'
import SlideCard from './SlideCard'

function Slider() {//Sayfa düzeni ayarlanmıştır.
  return (
    <>
      <section className='homeSlide contentWidth'>{/**contentWidth sola dayar.  */}
        <div className='container'>
          <SlideCard />
        </div>
      </section>
    </>
  )
}

export default Slider