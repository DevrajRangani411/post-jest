import {GET_DATA_SUCCESS} from "../actionTypes/index"

export const INTIAL_STATE={
    data: null
}

export default (state=INTIAL_STATE, action)=>{


    switch(action.type){
       
        case GET_DATA_SUCCESS: 
            return{
                ...state,
                data: action.payload.data
            }
        default :
            return state;
    }
}

