import React from 'react'
import Dcard from './Dcard'

function Discount() {
    //internetten hediye resmi çekildi ve Dcard dosyası çağırıldı. 
    return (
        <>
            <section className='disocunt background newarrivals'>
                <div className='container'>
                    <div className='heading d_flex'>
                        <div className='heading-left row f_flex'>
                            <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
                            <h2>Büyük İndirimler</h2>
                        </div>
                        <div className='heading-right row '>
                            <span>Hepsini gör</span>
                            <i className='fa-solid fa-caret-right'></i>
                        </div>
                    </div>
                    <Dcard/>
                </div>
            </section>
        </>
    )
}

export default Discount