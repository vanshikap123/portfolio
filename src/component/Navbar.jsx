import React, { useState } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { FaRegFile } from "react-icons/fa";
import { BiBookContent } from "react-icons/bi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [clicked, setclicked] = useState(true);
  console.log(clicked)
  return (
    <div >
      <div className={clicked===true?'navbar1':'navbar1 deactivate'}>
<div>
      <img className='m-auto' src="https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/profile-img.jpg" alt="" />
      <h3 className='text-white mt-3'>Vanshika Pathak</h3>
      <div className='d-flex gap-3 iconbox mt-4'>
      <i className='hovers'><FaLinkedinIn  color='white' fontSize={"20px"} /></i>
      <i className='hovers'><FaTwitter  color='white'  fontSize={"20px"}/></i>
     <Link to='https://github.com/'><i className='hovers'><FaGithub color='white'  fontSize={"20px"} />  </i></Link>
    <i className='hovers'> <FaInstagram color='white'  fontSize={"20px"}/></i>
      </div>
      </div>
   <nav>
      <ul className='ulList '>
        <li><i ><MdOutlineHome  fontSize={"25px"}/></i><a href="#home">Home</a></li>
        <li><i><LuUser2  fontSize={"25px"} /></i><a href="#about">About</a></li>
        <li><i><FaRegFile  fontSize={"25px"} /></i><a href="#resume">Resume</a></li>
        <li><i><BiBookContent  fontSize={"25px"} /></i><a href="#portfolio">Portfolio</a></li>
        <li><i><HiOutlineEnvelope  fontSize={"25px"}/></i><a href="#contact">Contact</a></li>
      </ul>

</nav>

    </div>
    <i className='menubar' onClick={()=>setclicked(!clicked)}>< IoMdMenu/></i>
    </div>
  )
}
export default Navbar;