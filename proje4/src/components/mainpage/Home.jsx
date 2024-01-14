import React from 'react'
import Categories from './Categories'
import Slider from './Slider'
import "./Home.css"

function Home() {
  // container oluşturuldu ve categories ve slider sayfalardaki bilgiler bu sayfaya aktarıldı.
  return (
    <>
        <section className='home'>
        <div className='container d_flex'>
          <Categories/>
          <Slider/>
        </div>
      </section>
    </>
  )
}

export default Home