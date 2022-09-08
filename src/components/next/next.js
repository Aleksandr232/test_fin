import {useDispatch, useSelector} from 'react-redux'

import './next.scss'

import icon from '../img/icon.png'
import mail from '../img/mail.png'
import phone from '../img/phone.png'
import cityy from '../img/city.png'
import time from '../img/time.png'
import calender from '../img/calender.png'


export function Next(){
    const text=useSelector(state=>{
        const {inputReducer} =state;
        return inputReducer.text;
        
    })

    const num=useSelector(state=>{
        const {inputNumReducer} =state;
        return inputNumReducer.num;
        
    })

    const address=useSelector(state=>{
        const {inputAddressReducer} =state;
        return inputAddressReducer.address;
      
    })

    const title=useSelector(state=>{
        const {inputTitleReducer} =state;
        return inputTitleReducer.title;
        
    })

    const event=useSelector(state=>{
        const {inputEventReducer} =state;
        return inputEventReducer.event;
        
    })

    const desc=useSelector(state=>{
        const {inputDescReducer} = state;
        return inputDescReducer.desc;
        
    })

    const files=useSelector(state=>{
        const {inputImgReducer} = state;
        return inputImgReducer.files;
        
    })

    const date=useSelector(state=>{
        const {inputDateReducer} = state;
        return inputDateReducer.date;
        
    })

    return(
        <section className='next'>
            <img src={files}/>
            <div>{date}</div>
           <div className='next_text'>Шаг 2</div>
            <div className='next_center'>
                <div className='next_panel'>
                    <img className='icon' src={icon} alt="icon" />
                    <div className='next_panel_title'>Проверьте ваше мероприятие на наличие ошибок, если все в порядке - отправляйте на модерацию.</div>
                </div>
                <div className='next_title'>{title}</div>
                <div>
                    <img className='city' src={cityy} alt="city" />
                        <div className='city_text'>{address}</div>
                    <img className='calender' src={calender} alt="calender" />
                        <div className='calender_text'></div>
                    <img className='times' src={time} alt="" />
                        <div className='times_text'></div>
                </div>
                <div className='next_contatct'>Контакты</div>
                    <img className='phone' src={phone} alt="phone" />
                    <img className='mail' src={mail} alt="mail" />
                    <div className='phone_text'>{num}</div>
                    <div className='mail_text'>{text}</div>
                    <div className='next_o'>{event}</div>
                    <div className='next_o_title'>Организатор мероприятия</div>
                    <div className='next_description'>{desc}</div>
            </div>
        </section>
    )
}
