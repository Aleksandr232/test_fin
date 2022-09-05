
import './main.scss'

export function Main(){
    return(
        <div className='main'>
            <div className='main_text'>Шаг 1</div>
                <div className='main_center'>
                    <div className='main_info'>
                        Информация об организаторе
                    </div>
                    <div className='main_organizer'>
                        Организатор
                    </div>
                    <input type="text" className='main_input' placeholder='Coca-cola' />
                        <div className='main_contact'>Контактные данные</div>
                        <div className='main_phone'>Телефон</div>
                        <div className='main_email'>E-mail</div>
                        <div className='main_city'>Город организатора</div>
                    <input className='main_number' type="text" placeholder='+7 (999) 555-33-22' />
                    <input className='main_mail' type="text" placeholder='ivanov@mail.ru'/>
                    <input className='main_kzn' type="text" placeholder='Казань' />
                    <div className='main_about_info'>Общая информация</div>
                    <div className='main_title'>Название</div>
                    <input type="text" className='main_input_title' />
                        <div className='main_photo'>Фотография</div>
                </div>
        </div>
    )
}