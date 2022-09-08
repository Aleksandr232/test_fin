import { INPUT_IMG} from  "./type"

const initialState={
    files:''
   
    
}


 export const inputImgReducer=(state=initialState, action)=>{
    console.log('input img Reducer >', action)
    switch(action.type){
        case INPUT_IMG:
            return Object.apply({}, state,{
                files: action.payload
            })
            
        default:
                return state;       
                     
    }

    
    
}