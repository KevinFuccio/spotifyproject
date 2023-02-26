import { useDispatch, useSelector } from "react-redux";
import { REMOVE_SONG } from "../../actions";
import "../MainPageComponent/MainPage.css";
const Library = () => {
  const tracks = useSelector((state) => state.album.albums);
  const dispatch = useDispatch()
  return (
    <div className="body min-vh-100">
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <div className="row mb-3 flex-column">
          <h2 className="mt-5 text-white">Your Library</h2>
          <div style={{width:'25%'}}>
          {tracks.map((tracks,i) => (
            <div className="d-flex align-items-center justify-content-between trackHover" key={i}>
              <div className="py-3 ">
                <a
                  href="#"
                  className="card-title trackHover pr-3"
                  style={{ color: "white" }}
                >
                  {tracks.title}
                </a>
              </div>
              <div
                className="d-flex align-items-center"
                style={{ width: "60px" }}
              >
                <div>
                  <button onClick={()=>{
                    dispatch({
                        type: REMOVE_SONG,
                        payload: i
                    })
                  }}>-</button>
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
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Library;
