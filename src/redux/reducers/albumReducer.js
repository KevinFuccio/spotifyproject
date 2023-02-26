import { ADD_ALBUMS, REMOVE_SONG } from "../../actions";

const initialState = {
    albums: [],
    loading:false
};

export const albumReducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_ALBUMS:
            return{
                ...state,
                albums: [...state.albums,action.payload]
            }
        case REMOVE_SONG:
            return{
                ...state,
                albums: state.albums.filter((_,i)=> i !== action.payload)
            }
        default: 
        return state
    }
}