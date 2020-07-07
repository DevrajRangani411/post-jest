import {GET_DATA_SUCCESS} from "../actionTypes/index"

export const INTIAL_STATE={
    
}

export default (state=INTIAL_STATE, action)=>{


    switch(action.type){
       
        case GET_DATA_SUCCESS: 
        console.log("DATA",action.payload)
            return{
                ...state,
                data: action.payload
            }
        default :
            return state;
    }
}

