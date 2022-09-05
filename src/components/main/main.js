
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
                        <div className='main_contact'></div>
                </div>
        </div>
    )
}