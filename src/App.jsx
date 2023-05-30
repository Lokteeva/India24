import './App.css';
import React from 'react';
import myVideo from './video/logo2.mp4';


function App() {

 

return(  
 <div className='container'>

<div className="main-header">
  <div className="layers">

    <div className="layers__header">
      <div className="layers__title">Паломничество в Индию </div>
      <div className="layers__caption">с Бхакта Бхагаватамрита Кешава Свами</div>
    </div>

    <div className='layer layers__base' style={{backgroundImage: "url('g4.jpg')"}}></div>
    <div className='layer layers__middle' style={{backgroundImage: "url('')"}}></div>
    <div className='layer layers__front' style={{backgroundImage: "url('')"}}></div>

  </div>
 </div>

<article className='main-article'>
  <div className="main-article__title colorGrey">Весенний ретрит<br/> с 15 февраля  по 20 марта 2024 года</div>
  <div className='main-article__title colorOrange'>Маяпур, Пури, Вриндаван</div>
</article>

<div className="btn" >     
<div></div>                 
  <button className="btn2" >Есть вопрос? </button>
  <div></div>
  <a href="https://forms.gle/1tm9vXQ3JupHKWBcA" ><button className='btn2'>Оставить заявку</button></a>
  <div></div>
</div> 

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

<div className='section__registration'>
<div className=' '>
<p>
<strong>Дорогие преданные!</strong><br/>  Хотя на дворе еще лето  2023 года,<br/> мы уже сегодня приглашаем Вас <strong>зарегистрироваться</strong> на Весенний Ретрит,
</p>
</div>

<div className='center-div'>
<ul>
  <li> чтобы вы могли заранее запланировать свой отпуск </li>
  <li> принять участие в ретрите и забронировать проживание рядом с Гуру Махараджем</li>
  <li> успеть приобрести авиабилеты по САМОЙ НИЗКОЙ ЦЕНЕ </li>
</ul>
</div>

<div className='grid3col'>
  <img className='imgS' src="pic10.jpg" alt="img"/>
  <img className='imgS' src="pic11.jpg" alt="img"/>
  <img className='imgS' src="pic12.jpg" alt="img"/>
</div>

<p><strong>ДЛЯ ЭТОГО:</strong></p>
<div className="center-div">
  <ul>
    <li>Подайте заявку</li>
    <li>Внесите регистрационный сбор в размере 3 000 рублей до 30 июня.</li>
    <li>Приезжайте на ретрит 15 февраля 2024 года</li>
  </ul>
</div>
 
<div className="btn" >     
<div></div>                 
  <button className="btn2" >Есть вопрос? </button>
  <div></div>
  <a href="https://forms.gle/1tm9vXQ3JupHKWBcA" ><button className='btn2'>Оставить заявку</button></a>
  <div></div>
</div>

<div style={{backgroundColor: "#e0dfdf"}} className='GreyDiv'>
<p>
На ретритах с ГуруДевом всегда царит теплая семейная атмосфера, которая окутывает мудростью духовного учителя , заботой кураторов и вдохновением преданных.
</p>

<center>
<div className='main-article__title colorOrange'>
Программа нашего духовного путешествия насыщена: 
</div>
</center>

<div className="center-div">
<ul>
  <li>совместным воспеванием джапы и киртана</li>
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

<div className='grid2col'>
  <h3 className='grid2col__h3L'>
  В обществе преданных вы сможете проработать свои слабые стороны и анартхи. Начнете развивать качества чистой преданности, которые так ждет от всех нас духовный учитель.
  </h3>

  <img className='border2storoni imgS' src="https://static.tildacdn.com/tild3261-6134-4861-b565-613362626262/braj01.jpg" alt="img"/>
</div>

<center>
<div className="main-article__title colorGrey" >
Дорогие преданные! <br/>
Напоминаем, что наше предложение действует <span className='colorOrange'>до 30 июня!</span> 
</div>
</center>

<div className='grid3col'>
  <img className='imgS' src="pic13.jpg" alt="img"/>
  <img className='imgS' src="pic14.jpg" alt="img"/>
  <img className='imgS' src="pic15.jpg" alt="img"/>
</div>

<p><strong>Кто может принять участие в ретрите</strong></p>


<div className='center-div'>
<ul>
  <li>Преданные, которые едут получать первое  посвящение и пранама-мантру</li>
  <li>Ученики ГуруДева</li>
  <li>Близкие родственники преданных, друзья </li>
</ul>
</div>

<div className='grid2col'>
  <img className='border2storoni imgS' src="https://bhakti-space.ru/wp-content/uploads/2018/11/5cq7WaIahjQ.jpg" alt="img"/>
  
  <h3 className='grid2col__h3R'>
  Желающие получить посвящение должны переслать весь пакет документов до 31.декабоя 2023 года  на эл.адрес : ..........и получить подтверждение, что документы получены, и вы включены в список преданных, которые будут получать пранаму или посвящение на ретрите.
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

<div className='grid3col'>
  <img className='imgS' src="pic16.jpg" alt="img"/>
  <img className='imgS' src="pic17.jpg" alt="img"/>
  <img className='imgS' src="pic18.jpg" alt="img"/>
</div>

<h2 className='colorOrange'>РАСПИСАНИЕ</h2>
<div className='center-div'>
  <ul>
    <li>15 февраля – заезд группы в Маяпур</li>
    <li>16-22 февраля – Маяпур</li>
    <li>23 февраля – переезд из Маяпура в Ремуну</li>
    <li>24-25 февраля – Ремуна</li>
    <li>26 февраля – переезд в Пури</li>
    <li>27 февраля – 6 марта – Пури</li>
    <li>7 марта – переезд во Вриндаван</li>
    <li>8-19 марта – Вриндаван</li>
    <li>20 марта – отъезд группы</li>
  </ul>
</div>









 

 







</div>










 </div>
)
        
}
export default App
