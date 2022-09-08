import { INPUT_ADDRESS} from  "./type"

const initialState={
    address:''
   
    
}


 export const inputAddressReducer=(state=initialState, action)=>{
    console.log('input address Reducer >', action)
    switch(action.type){
        case INPUT_ADDRESS:
            return{
                ...state,
                address: action.address
            }
        default:
                return state;       
                     
    }

    
    
}