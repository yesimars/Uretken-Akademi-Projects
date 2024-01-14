import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    //Navbar linkleri oluşturuldu. Açma kapama butonu ve iconları ayarlandı.
    const [MobileMenu, setMobileMenu] = useState(false)
    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='categories d_flex'>
                        <span className='fa-solid fa-border-all'></span>
                        <h4>
                            Kategoriler <i className='fa fa-chevron-down'></i>
                        </h4>
                    </div>
                    <div className='navlink'>
                        {/* Alt satırdaki kod Navbar'ın açılıp kapanması için yazılan bir koddur. */}
                        <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                            <li>
                                <Link to='/'>Anasayfa</Link>
                            </li>
                            <li>
                                <Link to='/sayfalar'>Sayfalar</Link>
                            </li>
                            <li>
                                <Link to='/kullanici'>Kullanıcı Hesabı</Link>
                            </li>
                            <li>
                                <Link to='/satici'>Satıcı Hesabı</Link>
                            </li>
                            <li>
                                <Link to='/takip'>Siparişini Takip Et</Link>
                            </li>
                            <li>
                                <Link to='/iletisim'>İletişim</Link>
                            </li>
                        </ul>
                        <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                            {MobileMenu ? 
                            <i className='fas fa-times close home-btn'></i> : 
                            <i className="fa-solid fa-bars open"></i>}
                            
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar