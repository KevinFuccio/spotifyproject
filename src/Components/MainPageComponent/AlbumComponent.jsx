import { Link } from "react-router-dom";

const albumComponent = ({data}) => {
  return (
    <div className="col text-center">
      <Link to={`/album/${data.album.id}`}>

        <img className="img-fluid" src={data.album.cover} alt="1" />
      </Link>
    
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