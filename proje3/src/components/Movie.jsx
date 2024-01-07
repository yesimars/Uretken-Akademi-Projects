import { useState } from 'react'
import card from './card.json'
import NavBar from './NavBar';

function Movie() {
    const [search, setSearch] = useState("");
    return (
        <>
        <NavBar/>
            <main class="container">
                

                <hgroup>
                    <h2>Movie Search </h2>
                    <p></p>
                </hgroup>

                <div className="inputContainer">
                    <input className="search" type="search" placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                

            </main>
            <div className="cardContainer">
                    {
                        card
                            .filter((val) => {
                                if (search == "") {
                                    return val;
                                } else if (val.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                                    return val;
                                }

                            }).map((val) => {
                                return (
                                    <div className="cardStyle" key={val.id}>
                                        <img src={val.imgSrc} />
                                        <h3>{val.title}</h3>
                                        <p>{val.imgAlt}</p>
                                    </div>
                                )

                            })

                    }
                </div>

        </>
    )
}

export default Movie