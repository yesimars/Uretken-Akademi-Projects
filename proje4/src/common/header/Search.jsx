import React from 'react'
import logo from "../header/images/logo.svg"
import { Link } from 'react-router-dom'

function Search({ cartItem }) {
    //arama kutusunun içindeki yazı iconu ve tüm kategoriler yazısının yerleri ayarlandı.
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })
    return (
        <>
            <section className='search'>
                <div className='container c_flex'>
                    <div className='logo width'>
                        <img src={logo} alt='' />
                    </div>
                    <div className='search-box f_flex'>
                        <i className='fa fa-search'></i>
                        {/* Bu satırda arama iconu oluşturuldu. 
                        Alt satırdaki kod arama motoru henüz boşken yazan yazıdır. 
                        placeholder ile ayarlanır. */}
                        <input type='text' placeholder='Arayın ve enter tuşuna basın...' />
                        <span>Tüm Kategoriler</span>
                    </div>
                    <div className='icon f_flex width'>
                        {/* Alt satırdaki kod sağ üst köşedeki insan iconunu oluşturur. */}
                        <i className='fa fa-user icon-circle'></i>
                        <div className='cart'>
                            <Link to='/cart'>
                                {/* Alt satırdaki kod sağ üst köşedeki çanta iconunu oluşturur. */}
                                <i className='fa fa-shopping-bag icon-circle'></i>
                                <span>{cartItem.length == 0 ? "" : cartItem.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search