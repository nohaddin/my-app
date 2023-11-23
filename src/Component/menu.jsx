import React from 'react'
import './menu.css'
import sekil from './cv2.jpg'
const menu = () => {
  return (
    <div className='container'>
        <div className='black'> 
        <div className=''>
            <img className='foto' src={sekil} alt="profilFoto" />
        </div>
        <div className='name'>
            <h2>Qurbanlı Nohəddin</h2>
            <h3>Kompüter mühəndisi</h3>
        </div>
        <div className='con'>
            <p className='mail'>qurbanlinohddin@gmail.com</p>
            <p className='tel'>0508700350</p>
        </div>
        <div className='mr'>
            
            <p>Web proqrmlaşdırma</p>
            <p>Oyun dizayn;</p>
        </div>
        </div>
        <div className='white'> 
         
         <div >
            <p className='bar'>Təhsil</p>
            <p className='tehsil'> Azərbaycan Dövlət Neft Sənaye Universiteti/Kompüter mühəndisliyi</p>
         </div>
         <div>
            <p className='bar'>Proqram bilikləri</p>
            <p className='tehsil'>Microsoft excel <br />
            Microsoft Power Point  <br />
            Microsoft Word <br />
            Outlook <br /></p>
         </div>
         <div>
            <p className='bar'>Proqramlaşdırma bilikləri</p>
            <p className='tehsil'>C++ <br />
            HTML/CSS <br />
            Java script <br />
            React <br /></p>
         </div>
         <div>
            <p className='bar'>Dil bilikləri</p>
            <p className='tehsil'>
            Türk dili <br />
            ingilis dili <br />
            </p>
         </div>
         <div>
            <p className='bar'>Hobbilər</p>
            <p className='tehsil'>
            Kitab oxuma  <br />
            Atıcılıq <br />
            </p>
         </div>
        </div>

    </div>
  )
}

export default menu