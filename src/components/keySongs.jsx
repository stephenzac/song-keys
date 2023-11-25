import "./keySongs.css";


function KeySongs(props) {

    const { songsList, songKey } = props;

    return (
        <div className="keySong" key={songsList}>
            <h2 className='key-header'>Songs in {songKey}:</h2>
                <ul className="song-list">
                    {songsList.map((song) => {
                        return <li>{song}</li>
                    })}
                </ul>
        </div>
    )
}

export default KeySongs;
