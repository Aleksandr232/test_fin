import { INPUT_DATE} from  "./type"

const initialState={
    date:''
   
    
}


 export const inputDateReducer=(state=initialState, action)=>{
    console.log('input date Reducer >', action)
    switch(action.type){
        case INPUT_DATE :
            return{
                ...state,
                date: action.date
            }
        default:
                return state;       
                     
    }

    
    
}