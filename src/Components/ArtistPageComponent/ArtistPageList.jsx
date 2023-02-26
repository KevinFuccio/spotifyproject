import { Link } from "react-router-dom"
const ArtistPageList = ({songInfo})=>{
    return(
        <div className="col-sm-auto col-md-auto text-center mb-5">
            <a href="/album_page.html?id=${songInfo.album.id}">
              <img className="img-fluid" src={songInfo.album.cover} alt="1" />
            </a>
            <p>
              <Link href="#">Track:  
                "{
                  songInfo.title.length < 16
                    ? `${songInfo.title}`
                    : `${songInfo.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
                }"
              </Link>
            </p>
            <p>
              <Link to={`/album/${songInfo.album.id}`}href="/album_page.html?id=${songInfo.album.id}">Album: 
                "{
                  songInfo.album.title.length < 16
                    ? `${songInfo.album.title}`
                    : `${songInfo.album.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
                }"
              </Link>
            </p>
        </div>
    )
}
export default ArtistPageList