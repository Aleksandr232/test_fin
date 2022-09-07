import {useDispatch, useSelector} from 'react-redux'

import './next.scss'

import icon from '../img/icon.png'
import mail from '../img/mail.png'
import phone from '../img/phone.png'
import cityy from '../img/city.png'

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
        <section className='next'>
           <div className='next_text'>Шаг 2</div>
            <div className='next_center'>
                <div className='next_panel'>
                    <img className='icon' src={icon} alt="icon" />
                    <div className='next_panel_title'>Проверьте ваше мероприятие на наличие ошибок, если все в порядке - отправляйте на модерацию.</div>
                </div>
                <div>
                    <img className='city' src={cityy} alt="city" />
                    <div className='city_text'>{city}</div>
                </div>
                <div className='next_contatct'>Контакты</div>
                    <img className='phone' src={phone} alt="phone" />
                    <img className='mail' src={mail} alt="mail" />
                    <div className='phone_text'>{num}</div>
                    <div className='mail_text'>{text}</div>
            </div>
        </section>
    )
}
