import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { inputText, inputNum, inputAddress, inputTitle, inputEvent, inputDesc, inputImg } from '../../redux/action'
import { useNavigate } from 'react-router-dom'
import BasicDatePicker from '../datepickers/datepickers'
import BasicTimePicker from '../timepickers.js/timepickers'
import Picker from '../pickers/pickers'
import PickerTwo from '../pickers/pickertwo'

import './main.scss'

import photo from '../img/photo.png'
import white from '../img/white.jpg'
/* import { id } from 'date-fns/locale' */

export function Main(){
    const [select, setSelect] = useState('')
    const [age, setAge] = useState()
    const [file, setFile] = useState()
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [numberDirty, setNumberDirty] = useState(false)
    const [cityDirty, setCityDirty] = useState(false)
    const [image, setImage] = useState()
    const [imageURL, setImageURL] = useState()
    const [emailError, setEmailError] = useState('email не может быть пустым')
    const [numberError, setNumberError] = useState('Номер не может быть пустым')
    const [cityError, setCityError] = useState('Введите город')
    const [value, setValue] = useState()
    const navigate = useNavigate()
 
          
/*      useEffect(() => {
        fetch('http://localhost:3001/api/age')
        .then(response=>response.json())
        .then(response => setAge(response.age))
        console.log()
        
    }, []);   */
    function api (){
        return fetch('http://localhost:3000/api/age')
           .then(res => res.json())
           .then(result => {
             setAge(result);
             console.log(result);
             
           });
    }



    const clear=()=>{
        setValue('')
    }
    
   
    
    const next = ()=>{
        navigate('/next')
    }


   

    const dispatch = useDispatch();

    const fileReader = new FileReader();
    fileReader.onloadend = () =>{
        setImageURL(fileReader.result)
    }

    const handleOnChange = (e) =>{
        dispatch(inputImg(e.target.files[0]))
        e.preventDefault();
        const file = e.target.files[0];
        setImage(file);
        fileReader.readAsDataURL(file)
    }

    const titleHandler = (e) =>{
        dispatch(inputTitle(e.target.value))
        
    }

    const emailHandler = (e) =>{
        setEmail(e.target.value)
        dispatch(inputText(e.target.value))
        const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLocaleLowerCase())){
            setEmailError('Некорректный email')
        }else{
            setEmailError('')
        }
    }

    const phoneHandler = (e)=>{
        dispatch(inputNum(e.target.value))
        setNumber(e.target.value)
        const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i;
        if(!re.test(String(e.target.value).toLocaleLowerCase())){
            setNumberError('Введите цифры')
        }else{
            setNumberError('')
        }
    }

    const addressHandler = (e)=>{
        dispatch(inputAddress(e.target.value))
        
    }

    const eventHandler = (e)=>{
        dispatch(inputEvent(e.target.value))
       
        
    }

    const descHandler = (e)=>{
        dispatch(inputDesc(e.target.value))
        
    }

   


    const blurHandler = (e) =>{
        // eslint-disable-next-line default-case
        switch (e.target.name) {
         case 'phone':
            setNumberDirty(true)
            break
         case 'city':
            setCityDirty(true)
            break  
         case 'email':
            setEmailDirty(true)
            break
        }
    }

  function handleChange(event) {
    setFile(event.target.files[0])
  }
    return(
        <section className='main'>
            <div className='main_text'>Шаг 1</div>
                <div className='main_center'>
                    <div className='main_info'>
                        Информация об организаторе
                    </div>
                    <div className='main_organizer'>
                        Организатор
                    </div>
                    <input value={value} onChange={e=>eventHandler(e)} type="text" className='main_input' placeholder='Coca-cola' />
                        <div className='main_contact'>Контактные данные</div>
                        <div className='main_phone'>Телефон</div>
                        <div className='main_email'>E-mail</div>
                        <div className='main_city'>Город организатора</div>
                        {(emailDirty && emailError) && <div style={{color:"red", position: "absolute",top: 259, left:419}}>{emailError}</div>}
                    <input value={value} onChange={e=>phoneHandler(e)} onBlur={e => blurHandler(e)} name='phone' className='main_number' type="text" placeholder='+7 (999) 555-33-22' />
                        {(numberDirty && numberError) && <div style={{color:"red", position: "absolute",top: 259, left:28}}>{numberError}</div>}
                    <input value={value} onChange={e=>emailHandler(e)} onBlur={e => blurHandler(e)} name='email' className='main_mail' type="text" placeholder='ivanov@mail.ru'/>
                        {(cityDirty && cityError) && <div style={{color:"red", position: "absolute",top: 259, left:804}}>{cityError}</div>}
                    <input value={value}  onBlur={e => blurHandler(e)} name='city'  className='main_kzn' type="text" placeholder='Казань' />
                    <div className='main_about_info'>Общая информация</div>
                    <div className='main_title'>Название</div>
                    <input value={value} onChange={e=>titleHandler(e)} type="text" className='main_input_title' />
                        <div className='main_photo'>Фотография</div>
                    <label className='main_input_photo'>
                        <input onChange={handleOnChange} type="file" multiple/>
                        <i className="file_upload"/><img src={photo} alt="" /><i/>
                    </label>
                        <img src={imageURL ? imageURL : ""} alt="" className='main_img' />
                        <div className='main_img'>{image ? image.name : <img src={white}/>}</div>
                        <div className='main_description'>Подробное описание</div>
                        <input value={value} onChange={e=>descHandler(e)} type="text" className='main_input_description' />
                    <div className='main_time'>
                        <BasicDatePicker/>
                    <div className='divider'></div>
                        <BasicTimePicker/>
                    </div>
                    <div className='main_time1'>
                        <BasicDatePicker/>
                    <div className='divider'></div>
                        <BasicTimePicker/>
                    </div>
                        <Picker/>
                    <div className='divider1'></div>
                        <PickerTwo/>
                          
                    <div onClick={''} className='btn'>
                        <div className='text_btn'>+ Добавить дату</div>
                    </div>
                    <div className='rate'>Рейтинг мероприятия</div>
                    <div className='address'>Адрес мероприятия</div>
                    <select className='select-css' id="age" onChange={(e)=>{
                        const selectedAge = e.target.value;
                        setSelect(selectedAge)
                    }}>
                            <option key={age}></option>
                            <option ></option>
                            <option ></option>
                            <option ></option>
                    </select>
                    <input value={value} onChange={(e)=>addressHandler(e)} className='main_events' type="text"  />
                    <div onClick={clear} className='btn_close'>
                        <div className='btn_close_text'>Отменить</div>
                    </div>
                    <div onClick={()=>next()} className='btn_next'>
                        <div className='btn_next_text'>Далее</div>
                    </div>
                </div>
        </section>
    )
}