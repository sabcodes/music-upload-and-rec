import { useState } from 'react';
import './App.css';

function App() {

  const [song, setSong] = useState("");
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("")
  const [genre, setGenre] = useState("")
  const [rank, setRank] = useState(0)

  const displayInfo = () =>{
    console.log(song + album + artist + genre + rank);
  };
  return (
    <div className ="App">
      <div className='information' W>
      <label>Song:</label>
      <input type = "text" onChange={(event) => {
        setSong(event.target.value);
      }}
      />
      <label>Album:</label>
      <input type = "text" onChange={(event) => {
        setAlbum(event.target.value);
      }}
      />
      <label>Artist:</label>
      <input type = "text" onChange={(event) => {
        setArtist(event.target.value);
      }}
      />
      <label>Genre:</label>
      <input type = "text" onChange={(event) => {
        setGenre(event.target.value);
      }}
      />
      <label>Rank:</label>
      <input type = "number" onChange={(event) => {
        setRank(event.target.value);
      }}
      />
      <button onClick={displayInfo}> Add Song</button>
    </div>
    </div>
  );
}

export default App;
