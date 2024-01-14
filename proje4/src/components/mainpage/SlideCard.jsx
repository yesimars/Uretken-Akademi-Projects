import React from 'react'
import Sdata from "./Sdata"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SlideCard() {
    //otomatik kaydırma yapılması için yazılan bir koddur.
    //yukarıda import edilenler önce indirilmiştir.
    const settings = {// birer birer otomatik kadırma yapılması için ayarlamalar yapıldı.
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
          },
        
    };
    return (//Slider kodu ile kaydırma yapıldı.
        <>
            <Slider {...settings}>
                {Sdata.map((value, index) => {
                    return (
                        <>

                            <div className='box d_flex top' key={index}>
                                <div className='left'>
                                    <h1>{value.title}</h1>
                                    <p>{value.desc}</p>
                                    <button className='btn-primary'>Koleksiyonlar</button>
                                </div>
                                <div className='right'>
                                    <img src={value.cover} alt="" />
                                </div>
                            </div>

                        </>
                    )
                })}
            </Slider>
        </>
    )
}

export default SlideCard