import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../MainPageComponent/MainPage.css";
import { singleAlbum } from "../../actions";
import AlbumSongList from "./AlbumSongList";

const AlbumPage = () => {
  const [album, setAlbum] = useState(null);
  const param = useParams();
  useEffect(() => {
    (async () => {
      let data = await singleAlbum(param.id);
      setAlbum(data);
    })();
  }, []);

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
        {album ? (
          <div className="row">
            <div className="col-md-3 pt-5 text-center" id="img-container">
              <img
                src={album.cover}
                className="card-img img-fluid"
                alt="Album"
              />
              <div className="mt-4 text-center">
                <p className="album-title">{album.title}</p>
              </div>
              <div className="text-center">
                <p className="artist-name">{album.artist.name}</p>
              </div>
              <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button">
                  Play
                </button>
              </div>
            </div>
            <div className="col-md-8 p-5">
                <div className="row">
                    <div className="col-md-10 mb-5" id="trackList">
                        {album.tracks.data.map((e, i) => (
                        <AlbumSongList tracks={e} key={i} />
                        ))}
                    </div>
                </div>
            </div>
          </div>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};
export default AlbumPage;
