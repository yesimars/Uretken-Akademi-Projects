import { PlayListContainer } from './PlayListSty'
import { FaMinus } from "react-icons/fa";

function PlayList({song, addToPlayList}) {
  return (
    <>
    <h4>Oynatma Listesi</h4>
            {song.map((song) => {
                return (
                    <>
                        <PlayListContainer>
                            <img src={song.image} alt="" />
                            <h4>{song.artist} - {song.song} </h4>
                            <button onClick={()=> addToPlayList(song)}>
                            <FaMinus />
                            </button>

                        </PlayListContainer>
                    </>
                )
            })}

        </>
  )
}

export default PlayList