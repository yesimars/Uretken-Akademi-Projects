import React from 'react'
import { CardContainer } from './CardSty'
import { FaPlus } from "react-icons/fa";

function Card({song, addToPlayList}) {
    

    return (
        <>
            {song.map((song) => {
                return (
                    <>
                        <CardContainer>
                            <img src={song.image} alt="" />
                            <h4>{song.artist} - {song.song} </h4>
                            <button onClick={()=> addToPlayList(song)}>
                                <FaPlus />
                            </button>

                        </CardContainer>
                    </>
                )
            })}

        </>
    )
}

export default Card