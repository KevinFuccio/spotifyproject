export const ADD_ALBUMS = "ADD_ALBUMS";
export const SONG_PLAY = "SONG_PLAY";
export const REMOVE_SONG = "REMOVE_SONG"

export const fetchedAlbums = async(name) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${name}`
      );
      if (response.ok) {
        let { data } = await response.json();
        return data
      }
    } catch (error) {
        console.log("error",error);
    }
  };

export const singleAlbum = async(id) => {
 try {
   let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`)
   if(response.ok){
    let data = await response.json()
    return data
   }
 } catch (error) {
  
 }
}
export const singleArtist = async(id) => {
  try {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`)
    if(response.ok){
     let data = await response.json()
     return data
    }
  } catch (error) {
   
  }
 }