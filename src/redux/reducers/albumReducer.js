import { ADD_ALBUMS } from "../../actions";

const initialState = {
    albums:[]
};

export const albumReducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_ALBUMS:
            return{
                ...state,
                albums: action.payload
            }
        default: 
        return state
    }
}