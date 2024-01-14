import React from 'react'
import "./Header.css"
import Head from './Head'
import Search from './Search'
import Navbar from './Navbar'


function Header({cartItem}) {
    //Head Search ve Navbar sayfaları çağırıldı.
    return (
        <>
            <Head />
            <Search cartItem={cartItem} />
            <Navbar />
            
        </>
    )
}

export default Header