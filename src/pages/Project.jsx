import React from 'react'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div className='text-white '>
        <h1 className='text-info'>My Projects</h1>
        <div className="divider"></div>
      <div className='row  p-5'>
        <div className="col-md-4 p-2 border border-info border-1 w-50">
             <Link to={'https://recipe-reactapp-kohl.vercel.app/'}>
             <div className='boxShow'>
              <img className='w-100' src="https://img.freepik.com/free-vector/bio-healthy-food-landing-page-template_23-2148698385.jpg?t=st=1718120636~exp=1718124236~hmac=cdeb90189f493c662b07efd6ae02d2c49b593b48c14ccb7da3361d169f2c38af&w=996"  alt=""  />
              <button className='btn1'>Click me</button>
              </div> </Link><p className='text-center fs-4 fw-5 text-info'>Recipe Website </p></div>
        <div className="col-md-4 p-2 border border-info border-1 w-50">
             <Link to={'http://shopping-steel-iota.vercel.app/'}>
             <div className='boxShow'>
              <img className='w-100' src="https://img.freepik.com/free-vector/business-hand-drawn-e-commerce-landing-page_23-2149600513.jpg?t=st=1718120770~exp=1718124370~hmac=8a809b8dd18f0b284bcfa2856e65a9749c482fe26e3f34012626d31d83ce179a&w=996"  alt=""  />
              <button className='btn1'>Click me</button>
              </div>      
              </Link><p className='text-center fs-4 fw-5  text-info'>Shopping Website </p></div>
       
     
              </div>
              <div className='row p-5  '>
              <div className="col-md-4  p-2 border border-info border-2 w-50">
              <Link to={'https://yummy-recipe-sigma.vercel.app/'}>
              <div className='boxShow'>
              <img className='w-100' src="https://img.freepik.com/free-vector/bio-healthy-food-landing-page-template_23-2148698385.jpg?t=st=1718120636~exp=1718124236~hmac=cdeb90189f493c662b07efd6ae02d2c49b593b48c14ccb7da3361d169f2c38af&w=996"  alt=""  />
              <button className='btn1'>Click me</button>
              </div>
              </Link><p className='text-center fs-4 fw-5  text-info'>Recipe Website 2</p>
           
              </div>
             
              <div className="col-md-4 p-2 border border-info border-2 w-50">
             <Link to={'https://blogapp-kohl-seven.vercel.app/'} >
             <div className='boxShow'>
              <img className='w-100' src="https://img.freepik.com/premium-vector/photo-blog-web-banner-landing-page-sharing-media-content-internet_277904-13376.jpg?w=1060"  alt=""  />
              <button className='btn1'>Click me</button>
              </div> </Link><p className='text-center fs-4 fw-5  text-info'>Blog website</p></div>
              </div>
             
             
    </div>
  )
}

export default Project