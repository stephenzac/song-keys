// import logo from './logo.svg';
import './SongsPage.css';
import KeySongs from '../components/keySongs';
import songData from "../song-data.json";


function SongsPage() {

  let BbSongs = songData["Bb"];
  let BSongs = songData["B"];
  let CSongs = songData["C"];
  let DbSongs = songData["Db"];
  let DSongs = songData["D"];
  let EbSongs = songData["Eb"];
  let ESongs = songData["E"];
  let FSongs = songData["F"];
  let GbSongs = songData["Gb"];
  let GSongs = songData["G"];
  let AbSongs = songData["Ab"];
  let ASongs = songData["A"];

  return (
    <div className="app">
      <header className="app-page">
        <h1 id="app-header">Song Keys</h1>
        <div style={{}}>
          <p id="site-description">
          A website to display the musical keys of songs that I've been curating.
          When I listen to music, I like to figure out the key of the song in concert pitch.
          Then, I use a Python script that calls the Spotify API, and stores the song information associated
          with the musical key I provide, into a JSON file, which then gets displayed here.
          Check out which songs I've figured out the key to! :)
          </p>
        </div>
        

        <KeySongs songsList={BbSongs} songKey={"Bb"}></KeySongs>
        <KeySongs songsList={BSongs} songKey={"B"}></KeySongs>
        <KeySongs songsList={CSongs} songKey={"C"}></KeySongs>
        <KeySongs songsList={DbSongs} songKey={"Db"}></KeySongs>
        <KeySongs songsList={DSongs} songKey={"D"}></KeySongs>
        <KeySongs songsList={EbSongs} songKey={"Eb"}></KeySongs>
        <KeySongs songsList={ESongs} songKey={"E"}></KeySongs>
        <KeySongs songsList={FSongs} songKey={"F"}></KeySongs>
        <KeySongs songsList={GbSongs} songKey={"Gb"}></KeySongs>
        <KeySongs songsList={GSongs} songKey={"G"}></KeySongs>
        <KeySongs songsList={AbSongs} songKey={"Ab"}></KeySongs>
        <KeySongs songsList={ASongs} songKey={"A"}></KeySongs>

      </header>
    </div>
  )

}

export default SongsPage;
