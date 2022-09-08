import { INPUT_TITLE} from  "./type"

const initialState={
    title:''
   
    
}


 export const inputTitleReducer=(state=initialState, action)=>{
    console.log('input title Reducer >', action)
    switch(action.type){
        case INPUT_TITLE:
            return{
                ...state,
                title: action.title
            }
        default:
                return state;       
                     
    }

    
    
}