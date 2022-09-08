import { INPUT_EVENT} from  "./type"

const initialState={
    event:''
   
    
}


 export const inputEventReducer=(state=initialState, action)=>{
    console.log('input event Reducer >', action)
    switch(action.type){
        case INPUT_EVENT :
            return{
                ...state,
                event: action.event
            }
        default:
                return state;       
                     
    }

    
    
}