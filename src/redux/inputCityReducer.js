import { INPUT_CITY} from  "./type"

const initialState={
    city:''
   
    
}


 export const inputCityReducer=(state=initialState, action)=>{
    console.log('input city Reducer >', action)
    switch(action.type){
        case INPUT_CITY:
            return{
                ...state,
                city: action.city
            }
        default:
                return state;       
                     
    }

    
    
}