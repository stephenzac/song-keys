// import logo from './logo.svg';
import './App.css';
import KeySongs from '../components/keySongs';
import songData from "../song-data.json";


function App() {

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
      <header className="app-header">
        <h1>Song Keys</h1>
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

export default App;
