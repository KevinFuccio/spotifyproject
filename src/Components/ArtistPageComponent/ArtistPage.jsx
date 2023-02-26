import { singleArtist, fetchedAlbums } from "../../actions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../MainPageComponent/MainPage.css";
import ArtistPageList from "./ArtistPageList";

const ArtistPage = () => {
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState([]);
  const param = useParams();

  useEffect(() => {
    (async () => {
      let data = await singleArtist(param.id);
      setArtist(data);
      if (artist) {
        let tracks = await fetchedAlbums(artist.name);
        setAlbums(tracks);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (artist) {
        let tracks = await fetchedAlbums(artist.name);
        setAlbums(tracks);
      }
    })();
  }, [artist]);

  return (
    <div className="body min-vh-100">
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <div className="row mb-3">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </div>
        </div>
        {artist ? (
          <>
            <div className="row">
              <div className="col-12 col-md-10 col-lg-10 mt-5">
                <h2 className="titleMain">{artist.name}</h2>
                <div id="followers">{artist.nb_fan} followers</div>
                <div
                  className="d-flex justify-content-center"
                  id="button-container"
                >
                  <button
                    className={`btn btn-success mr-2 mainButton  ${
                      !artist ? "d-none" : ""
                    }`}
                    id="playButton"
                  >
                    PLAY
                  </button>
                  <button
                    className={`btn btn-outline-light mainButton ${
                      !artist ? "d-none" : ""
                    }`}
                    id="followButton"
                  >
                    FOLLOW
                  </button>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                <div className="mt-4 d-flex justify-content-start">
                  <h2 className="text-white font-weight-bold">Tracks</h2>
                </div>
                <div className="pt-5 mb-5">
                  <div className="row" id="apiLoaded">
                    {albums.map((e, i) => (
                      <ArtistPageList songInfo={e} key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>ss</p>
        )}
      </div>
    </div>
  );
};
export default ArtistPage;
