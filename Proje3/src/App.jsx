import { useState } from 'react'
import './App.css'
import card from './card.json'


function App() {
  const [search, setSearch] = useState("");

  return (
    <>
    
      <div class="navbar">
        <a href="#">Movies </a>
        <a href="#">Profile</a>
      </div>
      <main class="container">

        <hgroup>
          <h2>Movie Search </h2>
          <p></p>
        </hgroup>

        <div className="inputContainer">
          <input className="search" type="search" placeholder="Search"
            onChange={(e)=> setSearch(e.target.value)}
           />
        </div>

        <div className="cardContainer">
          {
            card
            .filter((val)=>{
              if(search==""){
                return val;
              }else if(val.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                return val;
              }
                
            }).map((val)=>{
              return(
                <div className="data" key={val.id}>
                  <img src={val.imgSrc}/>
                  <h3>{val.title}</h3>
                  <p>{val.imgAlt}</p>
                </div>
              )

            })
              
          }
        </div>

        

      </main>



    </>


  )

}

export default App
