import React from 'react'
import './style.css'

function Wrapper() {
    //Burada veriler oluşturuldu.
    const data = [
        {
            cover: <i class='fa-solid fa-truck-fast'></i>,
            title: "Dünya Çapında Teslimat",
            decs: "100 milyondan fazla ürün yelpazemizde rekabetçi fiyatlar sunuyoruz.",
        },
        {
            cover: <i class='fa-solid fa-id-card'></i>,
            title: "Güvenli Ödeme",
            decs: "100 milyondan fazla ürün yelpazemizde rekabetçi fiyatlar sunuyoruz.",
        },
        {
            cover: <i class='fa-solid fa-shield'></i>,
            title: "Güvenle Alışveriş Yapın ",
            decs: "100 milyondan fazla ürün yelpazemizde rekabetçi fiyatlar sunuyoruz.",
        },
        {
            cover: <i class='fa-solid fa-headset'></i>,
            title: "7/24 Destek ",
            decs: "100 milyondan fazla ürün yelpazemizde rekabetçi fiyatlar sunuyoruz.",
        },
    ]
    return (
        //Yukarıdaki veriler burada çağırıldı.
        <>
            <section className='wrapper background'>
                <div className='container grid2'>
                    {data.map((val, index) => {
                        return (
                            <>
                                <div className='product' key={index}>
                                    <div className='img icon-circle'>
                                        <i>{val.cover}</i>
                                    </div>
                                    <h3>{val.title}</h3>
                                    <p>{val.decs}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Wrapper