import React from 'react'
import FlashCard from './FlashCard'

function FlashDeals({productItems, addToCart}) { 
    //productItems ile bağlantı kuruldu.
    //container oluşturularak sayfa düzeni ayarlandı.
    return (
        <>
        
            <section className='flash background'>
                <div className='container'>
                    <div className='heading f_flex'>
                        <i className='fa fa-bolt'></i>
                        <h1>Muhteşem Fırsatlar</h1>
                    </div>
                    <FlashCard productItems={productItems} addToCart={addToCart}/>
                </div>
            </section>
        </>
    )
}

export default FlashDeals