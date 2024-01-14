import React from 'react'

function Head() {// Navbarın Üzerinde yazılanlar hazırlandı.
    // Sağa ve sola olacak şekilde düzenlemeler yapıldı ve iconlar eklendi.
    return (
        <>
            <section className='head'>
                <div className='container d_flex'>
                    <div className='left row'>
                        <i className='fa fa-phone'></i>
                        <label>+88012 3457 7894</label>
                        <i className='fa fa-envelope'></i>
                        <label>example@gmail.com</label>
                    </div>
                    <div className='right row RText'>
                        <label>S.S.S</label>
                        <label>Yardım & Destek </label>
                        <span><i class="fa-solid fa-globe"></i></span>
                        <label>TR</label>
                        <span><i class="fa-solid fa-earth-americas"></i></span>
                        <label>ENG</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head