import './App.css'
import Header from './common/header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Pages from './pages/Pages'
import Data from './components/flashDeals/Data'
import Sdata from './components/shop/Sdata'
import { useState } from 'react'
import Cart from './common/cart/Cart'
import Footer from './common/footer/Footer'

function App() {
  //Burada js(json) dosyasından veri getirildi.
  const { productItems } = Data
  const { shopItems } = Sdata

  const [cartItem, setCardItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id == product.id)

    //Burada + işareti aktif edilmiştir. Sepetteki ürün miktarının arttırılabilmesi için yazıldı.
    if (productExit) {
      setCardItem(cartItem.map((item) =>
        item.id == product.id ? { ...productExit, qty: productExit.qty + 1 } : item))
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  //Burada - işareti aktif edilmiştir. Sepetteki ürün miktarının azaltılabilmesi için yazıldı.
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit.qty == 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCardItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    //Burada likler aktif edildi. Sayfalar ve işlevleri çağırıldı.
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
        </Routes>
        <Routes>
          <Route path='/cart' element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
