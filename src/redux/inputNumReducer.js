import { INPUT_NUMBER} from  "./type"

const initialState={
    num:''
   
    
}


 export const inputNumReducer=(state=initialState, action)=>{
    console.log('input num tReducer >', action)
    switch(action.type){
        case INPUT_NUMBER:
            return{
                ...state,
                num: action.num
            }
        default:
                return state;       
                     
    }

    
    
}