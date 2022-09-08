import { INPUT_DESC} from  "./type"

const initialState={
    desc:''
   
    
}


 export const inputDescReducer=(state=initialState, action)=>{
    console.log('input desc Reducer >', action)
    switch(action.type){
        case INPUT_DESC :
            return{
                ...state,
                desc: action.desc
            }
        default:
                return state;       
                     
    }

    
    
}