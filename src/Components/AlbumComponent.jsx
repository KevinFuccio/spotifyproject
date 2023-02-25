import { Link } from "react-router-dom";

const albumComponent = ({data}) => {
  return (
    <div className="col text-center">
      <a href="/album_page.html?id=102819">
        <img className="img-fluid" src={data.album.cover} alt="1" />
      </a>
      <p>
        <Link to={`/album/${data.album.id}`}>Album: {data.album.title}</Link>
      </p>
      <p>
        <Link to={`/artist/${data.artist.id}`}>Artist: {data.artist.name}</Link>
      </p>
    </div>
  );
};
export default albumComponent;