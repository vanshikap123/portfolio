import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const About=()=>{
    return(
        <div className="topicc bg-black text-white">
            <h1 className="heading1 text-info">About</h1>
            <div className="divider "></div>
            <p className='pare'>As a passionate Full Stack Developer with over 2024 of experience, I thrive in crafting dynamic and responsive web applications that provide seamless user experiences. My expertise spans across both front-end and back-end technologies, allowing me to develop end-to-end solutions that meet user needs and business goals.

On the front-end, I specialize in creating intuitive and engaging user interfaces using modern JavaScript frameworks like React and Angular, coupled with strong HTML and CSS skills. My back-end experience includes working with Node.js, Express and where I focus on building robust APIs, managing databases with MongoDB and ensuring high-performance server-side functionality.</p>
           <div className="aboutsection">
            <div className="imgese">
               <img src="https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/profile-img.jpg" alt="" srcset="" /> 
                </div>
       <div className="info">
                <h3 className="text-info">Fullstack Developer</h3>
                <p className="fs-5 text">My personal Detail</p>
                <div className="list">
                    <div className="icons">
                    <ul className='ulfirst'>
                        <li><i><MdOutlineKeyboardArrowRight size='30px' color='aqua'/><strong className='text-info'>Birthday:</strong><span>19/01/2002</span></i></li>
                        <li><i><MdOutlineKeyboardArrowRight  size='30px' color='aqua'/><strong className='text-info'> Phone:</strong> <span>8009276297</span></i></li>
                        <li><i><MdOutlineKeyboardArrowRight size='30px' color='aqua' /><strong className='text-info'> Phone:</strong><span>Lucknow,UP</span></i></li>
                    </ul>
                </div>
                <div className="icons">
                    <ul className='ulfirst'>
                        <li><i><MdOutlineKeyboardArrowRight size='30px' color='aqua'/><strong className='text-info'> Age : </strong><span>21</span></i></li>
                        <li><i><MdOutlineKeyboardArrowRight size='30px' color='aqua' /><strong className='text-info'> Degree: </strong> <span>BCA</span></i></li>
                        <li><i><MdOutlineKeyboardArrowRight size='30px' color='aqua' /><strong className='text-info'> Email:</strong><span >abhip2517@gmail.com</span></i></li>
                    </ul>
                </div>
                </div>
               
                </div>
               
            </div>
        </div>
 
       
     
    )
}
export default About;