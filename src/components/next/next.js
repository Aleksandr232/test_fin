import {useDispatch, useSelector} from 'react-redux'

import './next.scss'


export function Next(){
    const text=useSelector(state=>{
        const {inputReducer} =state;
        return inputReducer.text;
        console.log('state >>>>>>', state)
    })

    const num=useSelector(state=>{
        const {inputNumReducer} =state;
        return inputNumReducer.num;
        console.log('state >>>>>>', state)
    })

    const city=useSelector(state=>{
        const {inputCityReducer} =state;
        return inputCityReducer.city;
        console.log('state >>>>>>', state)
    })

    return(
        <div className='next'>
            <p>{text}</p>
            <p>{num}</p>
            <p>{city}</p>
        </div>
    )
}
