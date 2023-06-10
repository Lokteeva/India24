import './App.css';
import React, { useEffect } from 'react';
import myVideo from './video/logo2.mp4';
import Btn from './components/btn'

function App() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
    });
  },[]);

return(  
  <div className='container'>

  

  <div className="main-header">
    <div className="layers">
  
      <div className="layers__header">
        <div className="layers__title">Паломничество в Индию </div>
        <div className="layers__caption">с Бхакти Бхагаватамрита Кешава Свами</div>
      </div>
  
     
      <div className='layer layers__base' style={{backgroundImage: "url('g4.jpg')"}}></div>
      <div className='layer layers__middle' style={{backgroundImage: "url('middle.png')"}}></div>
      <div className='layer layers__front' style={{backgroundImage: "url('front.png')"}}></div>
  
    </div>
   </div>
  
  
  <article className='main-article'>
    <div className="main-article__title colorGrey">Духовное путешествие<br/> с 15 февраля  по 20 марта 2024 года</div>
    <div className='main-article__title colorOrange'>Маяпур, Ремуна, Пури, Вриндаван</div>
  </article>
  
  <center>               
  <h2><span>НЫРНУТЬ</span> в океан блаженства и <span>ПРОБУДИТЬ</span> духовную силу в обществе преданных</h2>
  </center> 
  
  <div className='liSection'>
  <div >
          <video autoPlay muted loop id="video" width="100%">
          <source src={myVideo} type="video/mp4" />
          </video>
   </div> 
    <div>
    <img className='imgLi' src="/swami.jpg" alt="img"/>
    </div>
  </div>
  
  <Btn/>
  
  <div className='main-header'>
  <div className=''>
  <p>
  <strong>Дорогие преданные!</strong><br/>  Хотя на дворе еще лето  2023 года,<br/> мы уже сегодня приглашаем Вас <strong>зарегистрироваться</strong></p>  
  </div>  

 <div className="Box">
 <img className='img-Spring2' src='spr1.png' alt='img'/>
 <img className='img-Spring3' src='spr2.png' alt='img'/>
 <div className='center-div'>
  <ul>
    <li> чтобы вы могли заранее запланировать свой отпуск </li>
    <li> принять участие в духовном путешествии и забронировать проживание рядом с Гуру Махараджем</li>
    <li> успеть приобрести авиабилеты по САМОЙ НИЗКОЙ ЦЕНЕ </li>
  </ul>
  </div>
 </div>
  
  <div className='grid3col'>
    <img className='imgS' src="pic10.jpg" alt="img"/>
    <img className='imgS' src="pic11.jpg" alt="img"/>
    <img className='imgS' src="pic12.jpg" alt="img"/>
  </div>
  
  <p><strong>ДЛЯ ЭТОГО:</strong></p>
  <div className="Box">
  <img className='img-Spring4' src='spr3.png' alt='img'/>
  <img className='img-Spring5' src='spr6.png' alt='img'/>
  <div className="center-div">
    <ul>
      <li>Подайте заявку</li>
      <li>Внесите раннее бронирование в размере 5108 рублей до 30 июня.</li>
      <li>Приезжайте в святую дхаму 15 февраля 2024 года</li>
    </ul>
  </div>
  </div>
   
  <Btn/>
  <center>
  <a href="http://dukhovnayasemya.tilda.ws/pay" ><button className='btn3'>Забронировать</button></a>
  </center>

  
  <div style={{backgroundColor: "#e0dfdf"}} className='GreyDiv'>
  <img className='img-Radhe' src="radhe1.png" alt='img'/>
  <img className='img-Spring' src="spring2.png" alt='img'/>

  <p>  
В паломнических поездках с ГуруДевом всегда царит теплая семейная атмосфера, которая окутывает мудростью духовного учителя , заботой кураторов и вдохновением преданных.
  </p>
  
  <center>
  <div className='main-article__title colorOrange'>
  Программа нашего духовного путешествия насыщена: 
  </div>
  </center>
  
  <div className="center-div">
  <ul>
    <li>совместным воспеванием Святого имени и киртана</li>
    <li>интересными духовными встречами с учениками Шрилы Прабхупады и старших преданных</li>
    <li>посещением святых мест Пури, Майпура, Вриндавана </li>
    <li>и главное, что все это будет проходить под чутким руководством духовного учителя в святой Дхаме</li>
  </ul>
  </div>
  </div>
  
  <div className='grid2col'>
    <img className='border2storoni imgS' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Samadhi_Mandir_of_Srila_Prabhupada%2C_Mayapur_07102013_001.jpg/1199px-Samadhi_Mandir_of_Srila_Prabhupada%2C_Mayapur_07102013_001.jpg?20140521072643" alt="img"/>
    
    <h3 className='grid2col__h3R'>
    С помощью  духовного общения вы очистите свое сердце от претензий и обид и наполните его духовной энергией, научитесь эффективно сотрудничать в отношениях с преданными, глубоко проживете полученные знания, которые станут вашим духовным опытом.
    </h3>
  </div>
  <div className="telefon">
    <img className='border2storoni imgS' src="https://vsegda-pomnim.com/uploads/posts/2022-01/1643098906_16-vsegda-pomnim-com-p-khrami-vrindavana-foto-16.jpg" alt="img"/>
  </div>
  
  <div className='grid2col'>
    <h3 className='grid2col__h3L'>
    В обществе преданных вы сможете проработать свои слабые стороны и анартхи. Начнете развивать качества чистой преданности, которые так ждет от всех нас духовный учитель.
    </h3>
  
    <img className='border2storoni imgS' src="https://static.tildacdn.com/tild3261-6134-4861-b565-613362626262/braj01.jpg" alt="img"/>
  </div>
  
  <center>
  <div className="main-article__title colorGrey" >
  Дорогие преданные! <br/>
  Напоминаем, что количество участников духовного путешествия ограничено - <span className='colorOrange'><br/>не более 50 человек!</span> 
  </div>
  </center>
  
  <div className='grid3col'>
    <img className='imgS' src="pic13.jpg" alt="img"/>
    <img className='imgS' src="pic14.jpg" alt="img"/>
    <img className='imgS' src="pic15.jpg" alt="img"/>
  </div>
  
  
  <p><strong>Кто может принять участие в ретрите</strong></p>

   <div className="Box">
 <img className='img-Spring2' src='spr1.png' alt='img'/>
 <img className='img-Spring3' src='spr2.png' alt='img'/> 
  <div className='center-div'>
  <ul>
    <li>Преданные, которые едут получать первое  посвящение и пранама-мантру</li>
    <li>Ученики ГуруДева</li>
    <li>Близкие родственники преданных, друзья </li>
  </ul>
  </div>
  </div>
  
  <div className='grid2col'>
    <img className='border2storoni imgS' src="https://bhakti-space.ru/wp-content/uploads/2018/11/5cq7WaIahjQ.jpg" alt="img"/>
    
    <h3 className='grid2col__h3R'>
    Желающие получить посвящение должны переслать весь пакет документов до 31 декабря 2023 года  в Телеграмм бот: 
    <a href='@BBKS108_bot'> @BBKS108_bot</a> и получить подтверждение, что документы получены, и вы включены в список преданных, которые будут получать пранаму или посвящение на ретрите.
    </h3>
  </div>
  
  <div className='grid2col'>  
    <h3 className='grid2col__h3R'>
      <p>ПЕРЕЧЕНЬ ДОКУМЕНТОВ</p>
      <ol>
        <li>Сертификат о прохождении курса «Ученик в ИСККОН» </li>
        <li>Рекомендация от ятры</li>
        <li>Успешная сдача теста </li>
      </ol>
    </h3>
  
    <img className='border2storoni imgS' src="https://www.ahakimov.com/upfiles/info_line/444495001509460370.jpg" alt="img"/>
  </div>
  
  <Btn/>
  
  <div className='grid3col'>
    <img className='imgS' src="pic16.jpg" alt="img"/>
    <img className='imgS' src="pic17.jpg" alt="img"/>
    <img className='imgS' src="pic18.jpg" alt="img"/>
  </div>
  
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
  
  <div className='' style={{backgroundColor: "#e0dfdf"}}>
   <h2 className='colorOrange'><br/>ПЛАН ДЕЙСТВИЙ</h2>
  <ol className='GreyDiv2'>
    <li>Заполнить заявку на сайте </li>
    <li>Оплатить раннее бронирование </li>
    <li>С вами свяжутся и помогут с получением визы, авиабилетов</li>
    <li>Предложат рассрочку с возможностью помесячной оплаты</li>
    <li>В случае отмены с вашей стороны поездки - перечисленные средства возвращаются в течении 24 часов.</li>
  </ol>
  </div>
  
  <Btn/>
  <center>
  <a href="http://dukhovnayasemya.tilda.ws/pay" ><button className='btn3'>Забронировать</button></a>
  </center>
  
  
  
  
  
  
  
  
   
  
   
  
  
  
  
  
  
  
  </div>
  
  
  
  
  
  
  
  
  
  
   </div>
)
        
}
export default App
