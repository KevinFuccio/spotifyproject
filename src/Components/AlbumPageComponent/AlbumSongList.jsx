import { useDispatch } from "react-redux";
import { ADD_ALBUMS, SONG_PLAY } from "../../actions";

const AlbumSongList = ({ tracks }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="d-flex align-items-center justify-content-between trackHover"
      onClick={() => {
        dispatch({
          type: SONG_PLAY,
          payload: tracks,
        });
      }}
    >
      <div className="py-3 ">
        <a
          href="#"
          className="card-title trackHover pr-3"
          style={{ color: "white" }}
        >
          {tracks.title}
        </a>
      </div>
      <div className="d-flex align-items-center" style={{ width: "60px" }}>
        <div>
          <button
            onClick={() => {
              dispatch({
                type: ADD_ALBUMS,
                payload: tracks,
              });
            }}
          >
            +
          </button>
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
    </div>
  );
};
export default AlbumSongList;
