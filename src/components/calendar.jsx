import '../App.css'

const Calendar =()=>{
    return(
    <div>
        <h2 className='colorOrange'>РАСПИСАНИЕ</h2>
      <div className="Box">
      <img className='img-Spring4' src='spr3.png' alt='img'/>
      <img className='img-Spring5' src='spr6.png' alt='img'/>
      <div className='center-div'>
        <ul>
          <span>МАЯПУР</span>
          <li>15.02 - заезд группы, размещение, отдых</li>
          <li>16.02 - 25.02 дни парикрамы по Надии</li>
          <li>26.02 - выезд из Маяпура</li>
          <span>ПУРИ</span>
          <li>26.02 - перелëт, размещение, отдых</li>
          <li>27.02 - 07.03 дни парикрамы по Пурушоттама кшетре</li>
          <li>08.03 - день выезда из Пури</li>
          <span>ВРИНДАВАН</span>
          <li>08.03 - перелёт, размещение, отдых</li>
          <li>09.02 - 18.02 дни парикрамы по Враджу</li>
          <li>19.03 - день разъезда группы</li>     
        </ul>
      </div>
      </div>
    </div>
    )
}
export default Calendar