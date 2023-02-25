export const ADD_ALBUMS = "ADD_ALBUMS";

export const fetchedAlbums = async(name) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${name}`
      );
      if (response.ok) {
        let { data } = await response.json();
        let dataSliced = data.slice(0, 4);
        
        return dataSliced
      }
    } catch (error) {
        console.log("error",error);
    }
  };

