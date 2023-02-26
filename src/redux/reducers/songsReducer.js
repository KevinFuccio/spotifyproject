import { SONG_PLAY } from "../../actions";

const initialState = {
    songs:null
};

export const songsReducer = (state=initialState,action) =>{
    switch(action.type){
        case SONG_PLAY:
            return{
                ...state,
                songs: action.payload
            }
        default: 
        return state
    }
}