import { INPUT_IMG} from  "./type"

const initialState={
    files:[]
   
    
}


 export const inputImgReducer=(state=initialState, action)=>{
    console.log('input img Reducer >', action)
    switch(action.type){
        case INPUT_IMG:
            return{
                ...state,
                files: action.files
            }
        default:
                return state;       
                     
    }

    
    
}