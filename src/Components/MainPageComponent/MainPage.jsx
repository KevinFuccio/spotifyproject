import '../MainPageComponent/MainPage.css'
import { useEffect, useState } from 'react'
import { fetchedAlbums } from '../../actions'
import AlbumComponent from './AlbumComponent'
const MainPage = ()=>{
  const [albumRock,setAlbumRock] = useState([])
  const [albumPop,setAlbumPop] = useState([])
  const [albumHipHop,setAlbumHipHop] = useState([])
  useEffect(()=>{
    (async () => {
      const data = await fetchedAlbums('dreamtheater') //ProgMetal Albums
      const data2 = await fetchedAlbums('ladygaga') //POP albums
      const data3 = await fetchedAlbums('icecube') //HIP HOP albums
      setAlbumRock(data)
      setAlbumPop(data2)
      setAlbumHipHop(data3)
     })()
  },[])
    return(
      <div className='body min-vh-100'>
        <div className="col-12 col-md-9 offset-md-3 mainPage">
          <div className="row">
            <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="searchResults" style={{display: "none"}}>
                <h2>Search Results</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="rock">
                <h2>Rock ClassNameics</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                 
                >
                  {albumRock.slice(0,4).map((data,index)=>(
                    <AlbumComponent data={data} key={index}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="pop">
                <h2>Pop Culture</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                 
                >{albumPop.slice(0,4).map((data,index)=>(
                  <AlbumComponent data={data} key={index}/>
                ))}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="hipHopSection"
                >{albumHipHop.slice(0,4).map((data,index)=>(
                  <AlbumComponent data={data} key={index}/>
                ))}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}
export default MainPage