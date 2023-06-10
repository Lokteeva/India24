import '../App.css'
import myVideo from '../video/logo2.mp4'

const Header =()=>{
    return(
    <div>
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
<div className='main-article__title colorOrange'>Маяпур, Пури, Вриндаван</div>
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
</div>
)
}
export default Header