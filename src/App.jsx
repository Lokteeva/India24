import './App.css';
import React, { useEffect } from 'react';
import Btn from './components/btn'
import Calendar from './components/calendar';
import Header from './components/header';
import Bron from './components/bron';
import Plan from './components/plan';
import Lenta3 from './components/lenta3';
import Lenta2 from './components/lenta2';
import Lenta1 from './components/lenta1';
import Programma from './components/programma';
import Infoblock1 from './components/infoblock1';
import Infoblock2 from './components/infoblock2';

function App() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
    });
  },[]);

return(  
  <div className='container'>

  <Header/>  
  <Btn/>
  
  <div className='main-header'>
  <div>
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
  
<Lenta1/>
  
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
  <Bron/>
  <Programma/>  
  <Infoblock1/>
  
  <center>
  <div className="main-article__title colorGrey" >
  Дорогие преданные! <br/>
  Напоминаем, что количество участников духовного путешествия ограничено - <span className='colorOrange'><br/>не более 50 человек!</span> 
  </div>
  </center>
  
 <Lenta2/>  
  
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
    
  <Infoblock2/>
  <Btn/>  
  <Lenta3/>  
  <Calendar/> 
  <Plan/>  
  <Btn/>
  <Bron/>
  




  </div>
  
   </div>
)
        
}
export default App
