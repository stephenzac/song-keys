import "../styles/SongsInKey.css"

const SongCount = ({songData}) => {
    let count = 0;
    Object.values(songData).map((value) => {
        count += value.length;
    });

    return (
        <h1 className="key-header">{`Total song count: ${count}`}</h1>
    )
};

export default SongCount;
