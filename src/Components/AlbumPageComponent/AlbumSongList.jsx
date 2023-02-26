const AlbumSongList = ({ tracks }) => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="py-3 trackHover">
        <a
          href="#"
          className="card-title trackHover pr-3"
          style={{ color: "white" }}
        >
          {tracks.title}
        </a>

      </div>
        <small className="duration" style={{ color: "white" }}>
          {Math.floor(
            parseInt(tracks.duration) / 60 // setting the duration minutes
          )}
          :
          {parseInt(tracks.duration) % 60 < 10
            ? "0" + (parseInt(tracks.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
            : parseInt(tracks.duration) % 60}
        </small>
    </div>
  );
};
export default AlbumSongList;
