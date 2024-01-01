import '../styles/SongsPage.css';
import SongsInKey from '../components/SongsInKey';
import SongCount from '../components/SongCount';
import songData from "../song-data.json";
import { Grid } from '@mui/material';


function SongsPage() {

  return (
    <div className="app">
      <header className="app-page">
        <h1 id="app-header">Song Keys</h1>
        <p id="site-description">
          A website to display the musical keys of songs that I've been curating.
          When I listen to music, I like to figure out the key of the song in concert pitch.
          Then, I use a Python script that calls the Spotify API, and stores the song information associated
          with the musical key I provide, into a JSON file, which then gets displayed here.
          Check out which songs I've figured out the key to! :)
        </p>

        <SongCount songData={songData}></SongCount>
        

        <Grid
          container
          rowSpacing={5}
        >
          {Object.entries(songData).map((songInfo) => {
            const songKeyProp = songInfo[0];
            const songsListProp = songInfo[1];
            return (
              <Grid
                container 
                item xs={6}
                direction="column"
                alignItems="center"
              >
                <SongsInKey key={songKeyProp} songKey={songKeyProp} songsList={songsListProp}/>
              </Grid>
              )
          })}
        </Grid>
        

      </header>
    </div>
  );

}

export default SongsPage;
